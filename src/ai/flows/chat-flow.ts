
'use server';
/**
 * @fileOverview A simple, rule-based chatbot flow.
 *
 * - chat - A function that handles the chat interaction based on keywords.
 */

// A map of keywords to canned responses.
// The keys are regex patterns to match against the user's message.
const cannedResponses: { [key: string]: string } = {
    'social media': `Our Social Media Marketing services help you build and nurture online communities. We offer:\n\n• Social-First Strategy Development\n• Platform Management (Instagram, Facebook, LinkedIn, etc.)\n• Community Building & Engagement\n• Campaign Creation & Execution\n• Social Listening & Brand Positioning\n\nWe create content that connects and run targeted ad campaigns to expand your reach. You can learn more at /social-media.`,
    'creative|branding': `We craft unforgettable brand identities. Our Creative & Branding services include:\n\n• Brand Strategy & Positioning\n• Logo Design & Visual Identity\n• Full-Service Production (Photo & Video)\n• Copywriting & Brand Voice\n\nWe build brands with soul. Learn more at /creative-branding.`,
    'b2b marketing': `We drive meaningful engagement and growth with strategic B2B marketing solutions. Our core services are:\n\n• Account-Based Marketing (ABM)\n• Lead Generation & Nurturing\n• B2B Content Strategy\n• Marketing & Sales Analytics\n\nWe connect you with your ideal customers. See more at /b2b.`,
    'search marketing|seo|sem': `We help you dominate search engine results. Our Search Marketing services combine:\n\n• Search Engine Optimization (SEO) to climb rankings organically.\n• Search Engine Marketing (SEM) for immediate impact with Pay-Per-Click (PPC) ads.\n\nWe increase your visibility and drive targeted traffic. Explore more at /search-marketing.`,
    'video production': `We create compelling video content from concept to completion. Our services include:\n\n• Concept & Scriptwriting\n• On-Location & Studio Filming\n• Post-Production & Editing\n• Animation & Motion Graphics\n\nWe tell your story through video. See our work at /video-production.`,
    'online reputation management|orm': `We shape your brand’s narrative and protect your online image. Our services include:\n\n• Reputation Monitoring\n• Review Management\n• Brand Image Building\n• Crisis Response\n\nWe help you control your digital narrative. Learn more at /online-reputation-management.`,
    'ecommerce|e-commerce': `We build beautiful, high-performing e-commerce websites that turn visitors into loyal customers. We specialize in:\n\n• Custom Storefront Design\n• Platform Expertise (Shopify & WooCommerce)\n• Mobile-First and Responsive Design\n• Conversion Rate Optimization (CRO)\n\nWe build digital flagships. See more at /ecommerce-development.`,
    'website development|web solutions': `We build high-performance websites engineered for performance, security, and scalability. Our process includes:\n\n• Discovery & Planning\n• UI/UX Design\n• Development & Testing\n• Launch & Support\n\nWe also build custom web applications and work with Content Management Systems (CMS). Learn more at /web-solutions.`,
    'mobile app': `We build intuitive, high-performance native iOS & Android apps that engage users and drive growth. Our full-service process covers:\n\n• Strategy & UI/UX Design\n• Agile Development & QA\n• App Store Deployment\n• Ongoing Support\n\nWe bring your vision to the palm of their hand. See our approach at /mobile-app-development.`,
    'augmented reality|ar': `We craft AR experiences that captivate, engage, and convert, blurring the lines between digital and reality. Our AR services include:\n\n• Immersive 3D Models\n• WebAR & App-Based Solutions\n• Custom Social Media Filters\n• Interactive Animations\n\nStep into the future with us at /augmented-reality.`,
    'gtm strategy|go-to-market': `We turn great ideas into market-leading products with our comprehensive Go-To-Market (GTM) strategy, a roadmap designed to successfully launch and scale your venture. Our phases include research, positioning, pre-launch buzz, launch execution, and growth optimization. Plan your launch at /gtm-strategy.`,
    'performance marketing': `Drive growth and maximize your ROI with our data-driven performance marketing strategies. We focus on measurable results through:\n\n• Paid Search Advertising (PPC)\n• Social Media Advertising\n• Conversion Rate Optimization (CRO)\n\nSee how we deliver tangible results at /performance-marketing.`,
    'rapid website': `Launch your online presence in record time. Our rapid development service is ideal for startups, marketing campaigns, and MVPs. We use customizable templates to deliver high-quality, responsive websites quickly. Get your site live in as little as 1-2 weeks. Explore options at /rapid-website-development.`,
    'outsource|backend|frontend': `Scale your development capabilities with our expert, dedicated teams. We offer flexible engagement models:\n\n• Dedicated Teams\n• Staff Augmentation\n• Project-Based Solutions\n\nWe provide access to top-tier talent in technologies like React, Next.js, Node.js, Python, and more. Extend your team at /backend-frontend-outsource.`,
    'whatsapp|chatbot': `Automate customer conversations with AI-powered WhatsApp Chatbots. We help you provide 24/7 support, generate leads, and even process orders directly in WhatsApp, engaging customers where they are most active. Learn more at /whatsapp-chatbots.`,
    'consulting': `Navigate the complexities of the digital landscape with our Digital Business Consulting. We provide strategic guidance on:\n\n• Digital Transformation Roadmaps\n• Technology Stack Advisory\n• Market Entry & Growth Strategy\n\nLet us be your strategic partner in digital growth. See more at /digital-business-consulting.`,
    'digital branding': `Craft a consistent and compelling brand identity across all your digital touchpoints. We focus on:\n\n• Online Brand Identity\n• Digital Content Strategy\n• Brand Voice & Messaging\n\nBuild a brand that thrives online. See our approach at /digital-branding.`,
    'digital transformation': `Modernize your operations and automate processes to stay ahead of the curve. Our services include:\n\n• Legacy System Modernization\n• Business Process Automation\n• Cloud Migration & Strategy\n\nEvolve your business for the digital age at /digital-transformation.`,
    'ott': `Launch your own branded streaming service. Our Over-The-Top (OTT) platform services empower you to build your own "Netflix-like" service. We handle:\n\n• Custom OTT App Development (iOS, Android, Roku, etc.)\n• VOD & Live Streaming solutions\n• Monetization Models (Subscription, Ads, Pay-per-view)\n\nLaunch your streaming empire with us. Learn more at /ott-services.`,
    'broadcast': `We provide end-to-end broadcast solutions to engineer the future of media delivery. Our core services include:\n\n• Playout & Automation\n• Live Streaming & Encoding\n• Media Asset Management (MAM)\n• Broadcast Infrastructure design\n\nPower your media operation at /broadcast-solutions.`,
    'podcast|digital tv|nexstar insights': `Our podcast, "Nexstar Insights," is your weekly dose of digital marketing trends, strategies, and success stories. We also have "Nexstar Bharat" coming soon. You can find our latest episodes, watch video versions, and subscribe on your favorite platform. Explore it all on our Digital TV page at /podcast.`,
    'services|what do you do|offer': `We offer a wide range of services to help your business grow:\n\n• Social Media Marketing\n• Creative & Branding\n• B2B Marketing\n• Search Marketing (SEO/SEM)\n• Video Production\n• E-commerce & Website Development\n• Mobile App Development\n• Augmented Reality\n• Performance Marketing\n• Digital Transformation & Consulting\n\nYou can see all of them at /services.`,
    'contact|reach out|email|phone|address|location': "You can contact us via:\n\nEmail: contact@nexstarlive.com\nPhone (India): +91-9821000921\nPhone (US): +1-917-6721794",
    'pricing|cost|rates': "We have pricing pages for some of our key services. You can find them here:\n\n• SEO Pricing (/pricing/seo-pricing)\n• SMO Pricing (/pricing/smo-pricing)\n• PPC Pricing (/pricing/ppc-pricing)\n\nFor anything else, please reach out via the /contact page.",
    'story|about us|who are you|history|company': "We are Nexstar Media, a premier IT & Media company founded in 2019. As the flagship company of Nexstar Live LLC, US, we specialize in digital media solutions, development, and IT services for an international clientele. You can learn more about our journey, values, and team at /story.",
    'portfolio|work|case studies|examples|projects': "You can see examples of our work and successful projects in our portfolio. We showcase case studies in areas like Blockchain, UI/UX Design, IT Consultancy, and Data Analytics. Explore our work at /portfolio.",
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
