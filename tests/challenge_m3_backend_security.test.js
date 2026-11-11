import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import app from '../backend/api/index.js';

const TEST_ADMIN_KEY = 'm5_verified_super_secret_key_789!';

function createTestServer() {
  return new Promise((resolve) => {
    const server = http.createServer(app);
    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      const baseUrl = `http://127.0.0.1:${port}`;
      resolve({
        server,
        baseUrl,
        request(path, options = {}) {
          return new Promise((res, rej) => {
            const url = new URL(path, baseUrl);
            const req = http.request(
              {
                hostname: url.hostname,
                port: url.port,
                path: url.pathname + url.search,
                method: options.method || 'GET',
                headers: options.headers || {}
              },
              (response) => {
                let data = '';
                response.on('data', (chunk) => (data += chunk));
                response.on('end', () => {
                  let json = null;
                  try {
                    json = JSON.parse(data);
                  } catch {}
                  res({
                    status: response.statusCode,
                    headers: response.headers,
                    body: json,
                    rawText: data
                  });
                });
              }
            );
            req.on('error', rej);
            if (options.body) {
              req.write(typeof options.body === 'string' ? options.body : JSON.stringify(options.body));
            }
            req.end();
          });
        },
        close() {
          return new Promise((cRes) => server.close(cRes));
        }
      });
    });
  });
}

test('Milestone 3 & 5 — Empirical Backend Security & Auth Protection Suite', async (t) => {
  const originalAdminKey = process.env.ADMIN_API_KEY;
  const originalFrontendUrl = process.env.FRONTEND_URL;
  process.env.ADMIN_API_KEY = TEST_ADMIN_KEY;
  process.env.FRONTEND_URL = 'https://custom-partner.novadesk.site, https://client-portal.novadesk.site';

  const harness = await createTestServer();

  t.after(async () => {
    await harness.close();
    process.env.ADMIN_API_KEY = originalAdminKey;
    process.env.FRONTEND_URL = originalFrontendUrl;
  });

  await t.test('1. GET /api/leads without auth header returns HTTP 401 Unauthorized', async () => {
    const res = await harness.request('/api/leads');
    assert.equal(res.status, 401, 'Expected status 401 without auth credentials');
    assert.equal(res.body?.success, false);
    assert.match(res.body?.error || '', /Unauthorized/i);
  });

  await t.test('2. GET /api/leads with invalid x-admin-key returns HTTP 401', async () => {
    const res = await harness.request('/api/leads', {
      headers: { 'x-admin-key': 'incorrect_dummy_key_12345' }
    });
    assert.equal(res.status, 401, 'Expected status 401 with invalid admin key');
    assert.equal(res.body?.success, false);
  });

  await t.test('3. GET /api/leads with invalid Authorization Bearer returns HTTP 401', async () => {
    const res = await harness.request('/api/leads', {
      headers: { authorization: 'Bearer wrong_token_value' }
    });
    assert.equal(res.status, 401, 'Expected status 401 with invalid bearer token');
    assert.equal(res.body?.success, false);
  });

  await t.test('4. GET /api/leads with valid x-admin-key returns HTTP 200 and leads array', async () => {
    const res = await harness.request('/api/leads', {
      headers: { 'x-admin-key': TEST_ADMIN_KEY }
    });
    assert.equal(res.status, 200, 'Expected status 200 with valid x-admin-key');
    assert.equal(res.body?.success, true);
    assert(Array.isArray(res.body?.leads), 'Expected response to contain leads array');
  });

  await t.test('5. GET /api/leads with valid x-api-key returns HTTP 200', async () => {
    const res = await harness.request('/api/leads', {
      headers: { 'x-api-key': TEST_ADMIN_KEY }
    });
    assert.equal(res.status, 200, 'Expected status 200 with valid x-api-key');
    assert.equal(res.body?.success, true);
    assert(Array.isArray(res.body?.leads));
  });

  await t.test('6. GET /api/leads with valid Authorization: Bearer returns HTTP 200', async () => {
    const res = await harness.request('/api/leads', {
      headers: { authorization: `Bearer ${TEST_ADMIN_KEY}` }
    });
    assert.equal(res.status, 200, 'Expected status 200 with valid Bearer token');
    assert.equal(res.body?.success, true);
  });

  await t.test('7. Fail-safe: Unset or placeholder ADMIN_API_KEY rejects all requests with HTTP 401', async () => {
    delete process.env.ADMIN_API_KEY;
    const resUnset = await harness.request('/api/leads', {
      headers: { 'x-admin-key': TEST_ADMIN_KEY }
    });
    assert.equal(resUnset.status, 401, 'Unset ADMIN_API_KEY must fail-safe to 401');

    process.env.ADMIN_API_KEY = 'YOUR_ADMIN_API_KEY_HERE';
    const resPlaceholder = await harness.request('/api/leads', {
      headers: { 'x-admin-key': 'YOUR_ADMIN_API_KEY_HERE' }
    });
    assert.equal(resPlaceholder.status, 401, 'Placeholder ADMIN_API_KEY must fail-safe to 401');

    // Restore for subsequent tests
    process.env.ADMIN_API_KEY = TEST_ADMIN_KEY;
  });

  await t.test('8. POST /api/leads/submit remains open and returns HTTP 200', async () => {
    const payload = {
      name: 'Empirical Challenger M5',
      email: 'm5_challenger@novadesk.site',
      message: 'End-to-End Acceptance Lead Test'
    };
    const res = await harness.request('/api/leads/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    });
    assert.equal(res.status, 200, 'Lead submission endpoint must accept valid submissions');
    assert.equal(res.body?.success, true);
    assert(res.body?.leadId, 'Response must return leadId');
  });

  await t.test('9. CORS: Allowed official production origin https://www.novadesk.site receives CORS header', async () => {
    const res = await harness.request('/api/health', {
      headers: { origin: 'https://www.novadesk.site' }
    });
    assert.equal(
      res.headers['access-control-allow-origin'],
      'https://www.novadesk.site',
      'Should return matching Access-Control-Allow-Origin header'
    );
  });

  await t.test('10. CORS: Allowed origin https://novadesk.vercel.app receives CORS header', async () => {
    const res = await harness.request('/api/health', {
      headers: { origin: 'https://novadesk.vercel.app' }
    });
    assert.equal(
      res.headers['access-control-allow-origin'],
      'https://novadesk.vercel.app'
    );
  });

  await t.test('11. CORS: Vercel preview subdomain matching regex receives CORS header', async () => {
    const res = await harness.request('/api/health', {
      headers: { origin: 'https://novadesk-git-feature-preview-123.vercel.app' }
    });
    assert.equal(
      res.headers['access-control-allow-origin'],
      'https://novadesk-git-feature-preview-123.vercel.app'
    );
  });

  await t.test('12. CORS: Local development origin http://localhost:5173 receives CORS header', async () => {
    const res = await harness.request('/api/health', {
      headers: { origin: 'http://localhost:5173' }
    });
    assert.equal(
      res.headers['access-control-allow-origin'],
      'http://localhost:5173'
    );
  });

  await t.test('13. CORS: FRONTEND_URL custom origins receive CORS header', async () => {
    const res = await harness.request('/api/health', {
      headers: { origin: 'https://custom-partner.novadesk.site' }
    });
    assert.equal(
      res.headers['access-control-allow-origin'],
      'https://custom-partner.novadesk.site'
    );
  });

  await t.test('14. CORS: Attacker domain (unknown origin) is rejected (NO Access-Control-Allow-Origin header)', async () => {
    const res = await harness.request('/api/health', {
      headers: { origin: 'https://evil-attacker.com' }
    });
    assert.equal(
      res.headers['access-control-allow-origin'],
      undefined,
      'Attacker origin must NOT receive Access-Control-Allow-Origin header'
    );
  });

  await t.test('15. CORS: Subdomain spoofing attempt https://attacker-novadesk.site.evil.com is rejected', async () => {
    const res = await harness.request('/api/health', {
      headers: { origin: 'https://attacker-novadesk.site.evil.com' }
    });
    assert.equal(res.headers['access-control-allow-origin'], undefined);
  });

  await t.test('16. CORS: Unrelated Vercel app https://malicious-app.vercel.app is rejected', async () => {
    const res = await harness.request('/api/health', {
      headers: { origin: 'https://malicious-app.vercel.app' }
    });
    assert.equal(res.headers['access-control-allow-origin'], undefined);
  });

  await t.test('17. Preflight OPTIONS request includes x-admin-key and x-api-key in allowed headers', async () => {
    const res = await harness.request('/api/leads', {
      method: 'OPTIONS',
      headers: {
        origin: 'https://www.novadesk.site',
        'access-control-request-method': 'GET',
        'access-control-request-headers': 'x-admin-key,x-api-key,Authorization,Content-Type'
      }
    });
    assert([200, 204].includes(res.status), `Preflight must return 200 or 204, got ${res.status}`);
    const allowHeaders = (res.headers['access-control-allow-headers'] || '').toLowerCase();
    assert(allowHeaders.includes('x-admin-key'), 'CORS preflight must allow x-admin-key header');
    assert(allowHeaders.includes('x-api-key'), 'CORS preflight must allow x-api-key header');
  });
});
