import { GoogleGenerativeAI } from '@google/generative-ai';

async function testStream() {
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-3.5-flash-lite' });

  console.log('Testing generateContentStream...');
  try {
    const res = await model.generateContentStream('Tell me what NovaDesk does in 10 words');
    for await (const chunk of res.stream) {
      process.stdout.write(chunk.text());
    }
    console.log('\n✅ generateContentStream SUCCESS!');
  } catch (err) {
    console.error('generateContentStream ERROR:', err);
  }

  console.log('\nTesting startChat sendMessageStream...');
  try {
    const chat = model.startChat();
    const chatRes = await chat.sendMessageStream('Hello');
    for await (const chunk of chatRes.stream) {
      process.stdout.write(chunk.text());
    }
    console.log('\n✅ sendMessageStream SUCCESS!');
  } catch (err) {
    console.error('sendMessageStream ERROR:', err);
  }
}

testStream();
