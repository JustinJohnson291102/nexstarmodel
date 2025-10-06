
'use server';
/**
 * @fileOverview A simple chat flow for the site assistant.
 *
 * - chat - A function that handles the chat interaction.
 */

// A map of keywords to predefined responses and the relevant page URL.
const predefinedResponses: { [key: string]: { response: string; url?: string } } = {
    "services": {
        response: "We offer a wide range of digital services, including Social Media Marketing, Creative & Branding, B2B Marketing, Search Marketing (SEO/SEM), Video Production, Web & Mobile App Development, and more. You can explore all our offerings on our services page.",
        url: "/services"
    },
    "social media": {
        response: "We offer Social Media Marketing services, including strategy, content creation, and community management. You can find more details on our Social Media page.",
        url: "/social-media"
    },
    "branding": {
        response: "Our Creative & Branding services help you craft a strong brand identity. This includes logo design, brand strategy, and more. Check out our Creative & Branding page for details.",
        url: "/creative-branding"
    },
    "b2b marketing": {
        response: "We specialize in B2B Marketing strategies, including Account-Based Marketing (ABM) and lead generation. Learn more on our B2B Marketing page.",
        url: "/b2b"
    },
    "seo": {
        response: "Our Search Marketing services cover both SEO and SEM to improve your visibility. For more details, visit our Search Marketing page.",
        url: "/search-marketing"
    },
    "sem": {
        response: "Our Search Marketing services cover both SEO and SEM to improve your visibility. For more details, visit our Search Marketing page.",
        url: "/search-marketing"
    },
    "video production": {
        response: "We offer full-service video production, from concept to final cut. You can see more on our Video Production page.",
        url: "/video-production"
    },
    "reputation management": {
        response: "We can help you with Online Reputation Management to protect and improve your brand's image. Visit our ORM page for more information.",
        url: "/online-reputation-management"
    },
    "ecommerce": {
        response: "We build high-performing e-commerce websites on platforms like Shopify and WooCommerce. Check out our E-commerce Development page for more.",
        url: "/ecommerce-development"
    },
    "website": {
        response: "We design and develop beautiful, high-performance websites. See our Web Solutions page to learn more.",
        url: "/web-solutions"
    },
    "web solutions": {
        response: "We design and develop beautiful, high-performance websites, from simple brochure sites to complex web applications. See our Web Solutions page to learn more.",
        url: "/web-solutions"
    },
    "mobile app": {
        response: "We build intuitive and high-performance native iOS and Android mobile apps. Visit our Mobile App Development page for details.",
        url: "/mobile-app-development"
    },
    "augmented reality": {
        response: "We create captivating AR experiences for marketing, e-commerce, and events. Learn more on our Augmented Reality page.",
        url: "/augmented-reality"
    },
    "contact": {
        response: "You can get in touch with us via our contact page for a free consultation. Our email is contact@nexstarlive.com and phone is +1 (917) 672-8930.",
        url: "/contact"
    },
    "about us": {
        response: "You can learn more about our story, our mission, and our team on our Story page.",
        url: "/story"
    },
    "story": {
        response: "You can learn more about our story, our mission, and our team on our Story page.",
        url: "/story"
    },
    "podcast": {
        response: "We have a podcast called 'Nexstar Insights' where we discuss digital marketing trends. You can find it on our Podcast page.",
        url: "/podcast"
    },
    "portfolio": {
        response: "You can see examples of our work in our Portfolio.",
        url: "/portfolio"
    },
    "pricing": {
        response: "We have pricing pages for our SEO, SMO, and PPC services. You can find them under the 'Pricing' menu.",
        url: "/pricing/seo-pricing"
    }
};

/**
 * Handles the chat interaction by checking for keywords in the user's message.
 * @param message The user's message.
 * @returns An AI-generated response.
 */
export async function chat(message: string): Promise<string> {
    const defaultResponse = "Hello! I'm your Nexstar AI assistant. How can I help you ?";
    
    if (!message || message.trim().toLowerCase() === 'hi' || message.trim().toLowerCase() === 'hello') {
        return defaultResponse;
    }

    const lowerCaseMessage = message.toLowerCase();

    for (const keyword in predefinedResponses) {
        if (lowerCaseMessage.includes(keyword)) {
            const { response, url } = predefinedResponses[keyword];
            return `${response}${url ? `\n\nYou can visit the page here: ${url}` : ''}`;
        }
    }

    return defaultResponse;
}
