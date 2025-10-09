'use server';
/**
 * @fileOverview A simple, rule-based chatbot flow.
 *
 * - chat - A function that handles the chat interaction based on keywords.
 */

// A map of keywords to canned responses.
// The keys are regex patterns to match against the user's message.
const cannedResponses: { [key: string]: string } = {
    'services': "We offer a wide range of services including Social Media Marketing, Creative & Branding, B2B Marketing, SEO/SEM, Video Production, and much more. You can see all of them at /services.",
    'contact|reach out|email|phone': "You can contact us via the form on our /contact page, or by email at contact@nexstarlive.com. Our phone numbers are +91-9821000921 and +1-917-6721794.",
    'pricing|cost': "We have pricing pages for some of our key services. You can find them here: SEO Pricing (/pricing/seo-pricing), SMO Pricing (/pricing/smo-pricing), and PPC Pricing (/pricing/ppc-pricing). For anything else, please reach out via the /contact page.",
    'story|about us|who are you': "We are Nexstar Media, a premier IT & Media company specializing in digital media, development, and IT services. You can learn more about our journey at /story.",
    'portfolio|work|case studies': "You can see examples of our work and successful projects in our portfolio at /portfolio.",
    'hello|hi': "Hello! I'm the Nexstar site assistant. How can I help you today? You can ask me about our services, pricing, or how to contact us.",
};

/**
 * Handles the chat interaction by checking for keywords in the user's message.
 * @param message The user's message.
 * @returns A pre-written response if a keyword is found, otherwise a default message.
 */
export async function chat(message: string): Promise<string> {
    const defaultResponse = "I'm sorry, I don't have the answer to that. For more complex queries, please reach out to our team by emailing atul@nexstarmedia.in.";
    const normalizedMessage = message.toLowerCase();

    for (const pattern in cannedResponses) {
        // Create a regex from the pattern string. 'i' flag makes it case-insensitive.
        const regex = new RegExp(pattern, 'i');
        if (regex.test(normalizedMessage)) {
            return cannedResponses[pattern];
        }
    }

    return defaultResponse;
}
