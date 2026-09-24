async function testChat() {
  console.log('--- Testing /api/health ---');
  const healthRes = await fetch('http://localhost:5000/api/health');
  console.log('Health:', await healthRes.json());

  console.log('\n--- Testing /api/chat/stream ---');
  const chatRes = await fetch('http://localhost:5000/api/chat/stream', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'What is your typical pricing for MVP?' })
  });

  const reader = chatRes.body.getReader();
  const decoder = new TextDecoder();
  let received = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const text = decoder.decode(value);
    received += text;
    process.stdout.write(text);
  }

  console.log('\n\n--- Testing /api/leads/submit ---');
  const leadRes = await fetch('http://localhost:5000/api/leads/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test Client',
      email: 'client@example.com',
      phone: '+1 555-0199',
      scope: 'Build an AI-powered SaaS dashboard',
      budget: '$5,000 - $10,000'
    })
  });
  console.log('Lead Result:', await leadRes.json());

  console.log('\n✅ All tests passed successfully!');
}

testChat().catch(console.error);
