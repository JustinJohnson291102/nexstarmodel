
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [
    googleAI({ apiKey: process.env.GEMINI_API_KEY || 'AIzaSyCWGwUMWpsLf3Uh9BaA6_dvuU-e7GmK1Ys' }),
  ],
});
