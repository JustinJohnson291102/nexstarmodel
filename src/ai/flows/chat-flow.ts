
'use server';
/**
 * @fileOverview A simple chat flow for the site assistant.
 *
 * - chat - A function that handles the chat interaction.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Define the context for the AI model. This gives it knowledge about the website.
const websiteContext = `
You are the Nexstar AI assistant. Your goal is to help users by answering their questions about Nexstar and its services.
Nexstar is a digital media and IT services company with a global presence, including offices in New York, the UK, and India.

Here is a summary of the services offered. Use this information to answer user questions. Direct users to the relevant page URL for more details.

- **Social Media Marketing (/social-media):** Building and nurturing online communities. Includes strategy, content creation, and paid campaigns.
- **Creative & Branding (/creative-branding):** Crafting brand identities, logos, and visual systems. Includes full photo and video production.
- **B2B Marketing (/b2b):** Strategic marketing for business-to-business clients, including Account-Based Marketing (ABM) and lead generation.
- **Search Marketing (SEO/SEM) (/search-marketing):** A dual approach using SEO for long-term organic growth and PPC/SEM for immediate, targeted traffic.
- **Video Production (/video-production):** End-to-end video creation, from concept and scriptwriting to filming and post-production for brand films, commercials, and social content.
- **Online Reputation Management (/online-reputation-management):** Proactively building and protecting a brand's online image by monitoring conversations and managing reviews.
- **E-commerce Development (/ecommerce-development):** Building high-performing online stores on platforms like Shopify and WooCommerce.
- **Website Development (/web-solutions):** Designing and developing beautiful, high-performance websites engineered for performance and scalability.
- **Mobile App Development (/mobile-app-development):** Building intuitive and high-performance native iOS and Android mobile apps.
- **Augmented Reality (/augmented-reality):** Crafting captivating AR experiences for marketing, e-commerce, and events.
- **Go-To-Market Strategy (/gtm-strategy):** A comprehensive roadmap for launching and scaling new products or ventures.
- **Performance Marketing (/performance-marketing):** Data-driven campaign management to drive growth and maximize ROI on advertising spend.
- **Rapid Website Development (/rapid-website-development):** An agile service to launch professional websites quickly, ideal for startups and marketing campaigns.
- **Backend & Frontend Outsourcing (/backend-frontend-outsource):** Providing dedicated development teams and staff augmentation to scale clients' technical capabilities.
- **WhatsApp Chatbots (/whatsapp-chatbots):** Developing AI-powered chatbots to automate customer conversations on WhatsApp.
- **Digital Business Consulting (/digital-business-consulting):** Offering strategic guidance to help businesses navigate digital transformation and leverage technology for growth.
- **Digital Branding (/digital-branding):** Crafting a consistent and compelling brand identity across all digital touchpoints.
- **XTrack Analytics (/xtrack):** A powerful analytics solution to understand, engage, and grow audiences with real-time data.
- **Digital Transformation (/digital-transformation):** Modernizing operations, automating processes, and helping businesses embrace a data-driven culture.
- **Contact Information (/contact):** Users can get in touch via the contact page for a free consultation. Email: contact@nexstarlive.com, Phone: +1 (917) 672-8930.
- **Our Story (/story):** Nexstar was founded in 2019 to bridge the gap between brilliant ideas and flawless digital execution. We are a hybrid agency with global offices.
- **Podcast (/podcast):** The "Nexstar Insights" podcast covers digital marketing trends, strategies, and success stories.
- **Portfolio (/portfolio):** Showcases our recent work and case studies across various industries.
- **Pricing:** We have pricing pages for SEO, SMO, and PPC services.
`;

const ChatInputSchema = z.object({
  message: z.string(),
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const llmResponse = await ai.generate({
      model: 'gemini-1.5-flash-latest',
      prompt: `${websiteContext}\n\nUser question: "${input.message}"\n\nAnswer the user's question based on the context provided. If the user says hi or hello, respond with a friendly greeting and ask how you can help.`,
      config: {
        temperature: 0.5,
      },
    });

    return llmResponse.text;
  }
);

/**
 * Handles the chat interaction by passing the user's message to a Genkit flow.
 * @param message The user's message.
 * @returns An AI-generated response.
 */
export async function chat(message: string): Promise<string> {
    if (!message) {
        return "Hello! I'm the Nexstar Assistant. How can I help you today?";
    }
    return await chatFlow({ message });
}
