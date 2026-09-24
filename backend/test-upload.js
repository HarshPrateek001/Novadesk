import fs from 'fs';

async function testUpload() {
  console.log('\n--- Testing /api/upload ---');
  const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
  const fileContent = 'NovaDesk Sample Project Scope Brief for Web App';
  const fileName = 'project_brief.txt';

  const body = [
    `--${boundary}`,
    `Content-Disposition: form-data; name="file"; filename="${fileName}"`,
    `Content-Type: text/plain`,
    '',
    fileContent,
    `--${boundary}--`
  ].join('\r\n');

  const res = await fetch('http://localhost:5000/api/upload', {
    method: 'POST',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`
    },
    body: body
  });

  const uploadResult = await res.json();
  console.log('Upload Result:', uploadResult);

  if (uploadResult.success && uploadResult.url) {
    console.log('✅ File upload verified! URL:', uploadResult.url);
  } else {
    throw new Error('Upload verification failed');
  }
}

testUpload().catch(console.error);
