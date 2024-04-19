import { experimental_generateText } from 'ai';
import { OpenAI } from '@ai-sdk/openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = createOpenAI();

async function main() {
  const result = await experimental_generateText({
    model: openai.completion('gpt-3.5-turbo-instruct'),
    maxTokens: 1024,
    system: 'You are a helpful chatbot.',
    messages: [
      {
        role: 'user',
        content: 'Hello!',
      },
      {
        role: 'assistant',
        content: 'Hello! How can I help you today?',
      },
      {
        role: 'user',
        content: 'I need help with my computer.',
      },
    ],
  });

  console.log(result.text);
}

main().catch(console.error);
