
'use server';
/**
 * @fileOverview A simple, rule-based chatbot flow.
 *
 * - chat - A function that handles the chat interaction based on keywords.
 */

// A map of keywords to canned responses.
// The keys are regex patterns to match against the user's message.
const cannedResponses: { [key: string]: string } = {
    'services|what do you do|offer': `We offer a wide range of services to help your business grow:\n\n• Social Media Marketing\n• Creative & Branding\n• B2B Marketing\n• Search Marketing (SEO/SEM)\n• Video Production\n• E-commerce & Website Development\n• Mobile App Development\n• Augmented Reality\n• Performance Marketing\n• Digital Transformation & Consulting\n\nYou can see all of them at /services.`,
    'contact|reach out|email|phone|address|location': "You can contact us at:\n\nEmail: contact@nexstarlive.com\nPhone (India): +91-9821000921\nPhone (US): +1-917-6721794",
    'pricing|cost|rates': "We have pricing pages for some of our key services. You can find them here: SEO Pricing (/pricing/seo-pricing), SMO Pricing (/pricing/smo-pricing), and PPC Pricing (/pricing/ppc-pricing). For anything else, please reach out via the /contact page.",
    'story|about us|who are you|history|company': "We are Nexstar Media, a premier IT & Media company specializing in digital media, development, and IT services. You can learn more about our journey at /story.",
    'portfolio|work|case studies|examples|projects': "You can see examples of our work and successful projects in our portfolio at /portfolio.",
    'inquiry|enquiry|query|question': "For any inquiries or to fill out an enquiry form, please email our team at atul@nexstarmedia.in. We'll be happy to assist you.",
    'hello|hi|hey': "Hello! I'm the Nexstar site assistant. How can I help you today? You can ask me about our services, pricing, or how to contact us.",
};

/**
 * Handles the chat interaction by checking for keywords in the user's message.
 * @param message The user's message.
 * @returns A pre-written response if a keyword is found, otherwise a default message.
 */
export async function chat(message: string): Promise<string> {
    const defaultResponse = "For detailed information, please contact our team at atul@nexstarmedia.in. We'll be happy to assist you.";
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
