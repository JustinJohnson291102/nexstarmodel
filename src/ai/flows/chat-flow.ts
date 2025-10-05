
'use server';
/**
 * @fileOverview A simple chat flow for the site assistant.
 *
 * - chat - A function that handles the chat interaction.
 */

const servicesResponse = "Nexstar offers a wide range of services including Social Media Marketing, Creative & Branding, Web/Tech Solutions, B2B Marketing, and much more. You can see all our services on the /services page.";

// A simple map of questions to answers.
const predefinedResponses: Record<string, string> = {
  hi: "Hi Sir/Ma'am, I am the Nexstar assistant. How can I help you today?",
  hello: "Hi Sir/Ma'am, I am the Nexstar assistant. How can I help you today?",
  services: servicesResponse,
  contact: "You can contact us via email at support@nexstarlive.com, call us at (123) 456-7890, or visit our /contact page to get in touch.",
  'what services do you offer?': servicesResponse,
  'how can i contact you?': "You can contact us via email at support@nexstarlive.com, call us at (123) 456-7890, or visit our /contact page to get in touch.",
};

const defaultResponse = "I'm sorry, I can only answer some basic questions right now. For more detailed inquiries, please visit our contact page or email us at support@nexstarlive.com.";

/**
 * Handles the chat interaction by looking up a predefined response.
 * @param message The user's message.
 * @returns A predefined response or a default message.
 */
export async function chat(message: string): Promise<string> {
  const lowerCaseMessage = message.toLowerCase().trim();

  // Check for an exact match first
  const exactMatch = predefinedResponses[lowerCaseMessage];
  if (exactMatch) {
    return exactMatch;
  }

  // If no exact match, check if the message includes "services"
  if (lowerCaseMessage.includes("services")) {
    return servicesResponse;
  }

  // Otherwise, return the default response
  return defaultResponse;
}
