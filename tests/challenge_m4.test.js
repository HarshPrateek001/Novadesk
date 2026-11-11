import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const DELETED_FILES = [
  'public/fullstack_hero_illustration.png',
  'public/hero-realistic.png',
  'public/images/nova_avatar.jpg',
  'public/novadesk_founders_duo_feathered.png',
  'public/novadesk_team_5_members_hero.png',
  'public/novadesk_team_banner.png',
  'public/python_hero_realistic.png',
  'public/webapp_hero_illustration.png'
];

const WEBP_COUNTERPARTS = [
  'public/fullstack_hero_illustration.webp',
  'public/hero-realistic.webp',
  'public/images/nova_avatar.webp',
  'public/novadesk_founders_duo_feathered.webp',
  'public/novadesk_team_5_members_hero.webp',
  'public/novadesk_team_banner.webp',
  'public/python_hero_realistic.webp',
  'public/webapp_hero_illustration.webp'
];

const REQUIRED_GITIGNORE_ENTRIES = [
  'unused_assets/',
  'Agency-Project 0/',
  'Agency_Contracts/',
  'Inside Pages TXT Files/',
  'like/',
  'scratch/',
  'icons/',
  '.agents/',
  '.kilo/',
  'txt1',
  'txt2',
  't5d42NEZJZ.json',
  'instructions.txt',
  'company_overview.pdf',
  'generate-pdf.cjs'
];

test('Milestone 4 — Asset Optimization, Deletion & Integrity', async (t) => {
  await t.test('All 8 legacy PNG/JPG files are removed from disk', () => {
    for (const file of DELETED_FILES) {
      assert.strictEqual(
        fs.existsSync(file),
        false,
        `Legacy duplicate file should have been deleted: ${file}`
      );
    }
  });

  await t.test('All 8 WebP counterparts exist and have non-zero size with valid headers', () => {
    for (const file of WEBP_COUNTERPARTS) {
      assert.strictEqual(
        fs.existsSync(file),
        true,
        `WebP counterpart must exist: ${file}`
      );
      const stat = fs.statSync(file);
      assert.ok(
        stat.size > 1000,
        `WebP file ${file} should have meaningful size (>1KB), got ${stat.size} bytes`
      );

      // Verify WebP magic header: 'RIFF' .... 'WEBP'
      const fd = fs.openSync(file, 'r');
      const headerBuf = Buffer.alloc(12);
      fs.readSync(fd, headerBuf, 0, 12, 0);
      fs.closeSync(fd);

      const riff = headerBuf.subarray(0, 4).toString('ascii');
      const webp = headerBuf.subarray(8, 12).toString('ascii');
      assert.strictEqual(riff, 'RIFF', `File ${file} must have RIFF header`);
      assert.strictEqual(webp, 'WEBP', `File ${file} must have WEBP magic bytes`);
    }
  });

  await t.test('Zero references to deleted PNG/JPG assets remain anywhere in src/', () => {
    const rawNames = DELETED_FILES.map(f => path.basename(f));
    const violations = [];

    function scan(dir) {
      for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          scan(full);
        } else {
          const content = fs.readFileSync(full, 'utf8');
          for (const name of rawNames) {
            if (content.includes(name)) {
              violations.push({ file: full, asset: name });
            }
          }
        }
      }
    }

    scan('src');
    assert.deepStrictEqual(
      violations,
      [],
      `Found residual references to deleted images in src/: ${JSON.stringify(violations)}`
    );
  });

  await t.test('Active pages AboutUs and WebApplicationDevelopment use WebP assets', () => {
    const aboutUsContent = fs.readFileSync('src/pages/AboutUs.jsx', 'utf8');
    assert.ok(
      aboutUsContent.includes('/novadesk_founders_duo_feathered.webp'),
      'AboutUs.jsx should reference /novadesk_founders_duo_feathered.webp'
    );
    assert.ok(
      !aboutUsContent.includes('/novadesk_founders_duo_feathered.png'),
      'AboutUs.jsx should NOT reference /novadesk_founders_duo_feathered.png'
    );

    const webAppContent = fs.readFileSync('src/pages/services/WebApplicationDevelopment.jsx', 'utf8');
    assert.ok(
      webAppContent.includes('/webapp_hero_illustration.webp'),
      'WebApplicationDevelopment.jsx should reference /webapp_hero_illustration.webp'
    );
    assert.ok(
      !webAppContent.includes('/webapp_hero_illustration.png'),
      'WebApplicationDevelopment.jsx should NOT reference /webapp_hero_illustration.png'
    );
  });
});

test('Milestone 4 — Repo Hygiene & .gitignore Verification', async (t) => {
  await t.test('.gitignore is clean UTF-8 with no null bytes or BOM', () => {
    const rawBuf = fs.readFileSync('.gitignore');
    assert.strictEqual(
      rawBuf.includes(0),
      false,
      '.gitignore must not contain null bytes (no UTF-16 corruption)'
    );
    // BOM check
    const isBOM = rawBuf[0] === 0xef && rawBuf[1] === 0xbb && rawBuf[2] === 0xbf;
    assert.strictEqual(isBOM, false, '.gitignore should not have a UTF-8 BOM');
  });

  await t.test('.gitignore contains all required non-production clutter patterns', () => {
    const content = fs.readFileSync('.gitignore', 'utf8');
    const lines = content.split('\n').map(l => l.trim()).filter(Boolean);

    for (const entry of REQUIRED_GITIGNORE_ENTRIES) {
      assert.ok(
        lines.includes(entry),
        `.gitignore is missing required entry: ${entry}`
      );
    }
  });
});

test('Milestone 4 — Comprehensive Local Image Existence Scan in src/', async (t) => {
  await t.test('All locally referenced static images in src/ exist on disk in public/', () => {
    const missing = [];
    const imageExtensions = ['.png', '.webp', '.jpg', '.jpeg', '.svg', '.gif', '.ico'];
    const scannedAssets = new Set();

    function scan(dir) {
      for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          scan(full);
        } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
          const content = fs.readFileSync(full, 'utf8');
          // Match all string literals
          const stringRegex = /['"`]([^'"`]+)['"`]/g;
          let match;
          while ((match = stringRegex.exec(content)) !== null) {
            const val = match[1];
            // Check if it's a relative/root-relative asset path to an image
            if (val.startsWith('/') && !val.startsWith('//') && !val.startsWith('/api')) {
              const cleanVal = val.split('?')[0].split('#')[0];
              const ext = path.extname(cleanVal).toLowerCase();
              if (imageExtensions.includes(ext)) {
                scannedAssets.add(cleanVal);
                const localDiskPath = path.join('public', cleanVal.slice(1));
                if (!fs.existsSync(localDiskPath)) {
                  missing.push({ asset: cleanVal, sourceFile: full });
                }
              }
            }
          }
        }
      }
    }

    scan('src');
    // Ensure we actually scanned a non-trivial set of assets
    assert.ok(
      scannedAssets.size >= 10,
      `Should have scanned multiple local assets, found ${scannedAssets.size}`
    );
    assert.deepStrictEqual(
      missing,
      [],
      `Found broken image references in src/: ${JSON.stringify(missing)}`
    );
  });
});
