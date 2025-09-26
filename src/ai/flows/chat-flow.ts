'use server';
/**
 * @fileOverview A simple chat flow for the site assistant.
 *
 * - chat - A function that handles the chat interaction.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe('The user message'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  message: z.string().describe('The AI response'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(message: string): Promise<string> {
  const {message: response} = await chatFlow({message});
  return response;
}

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are a helpful assistant for a digital marketing agency called Nexstar.
  
  This is the user's message:
  {{{message}}}
  
  Keep your response concise and helpful.`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
