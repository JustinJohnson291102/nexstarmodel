
import GetStartedForm from "@/components/shared/get-started-form";
import { ShieldCheck, MessageSquare, Star, Search, CheckCircle, HelpCircle, Siren, Eye } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurClients from "@/components/homepage/our-clients";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
    {
        question: "How long does it take to see results from ORM?",
        answer: "Building a positive reputation takes time. You can often see initial improvements within the first 1-3 months, such as an increase in positive reviews and better handling of negative feedback. Significant, lasting changes in search results and overall brand sentiment can take 6-12 months of consistent effort."
    },
    {
        question: "Can you remove negative reviews or articles?",
        answer: "Removing content is often difficult and depends on the platform's terms of service. Our primary strategy is not removal, but suppression. We work to create and promote a wealth of positive, authoritative content that pushes negative items further down in search results, making them much less visible."
    },
    {
        question: "What's the difference between SEO and ORM?",
        answer: "SEO (Search Engine Optimization) focuses on ranking your website for specific keywords. ORM (Online Reputation Management) is broader; it's about managing the entire search results page for your brand name to ensure the overall sentiment is positive, which includes websites, review sites, social media, and news articles."
    },
    {
        question: "Is ORM a one-time fix or an ongoing process?",
        answer: "Reputation is dynamic and requires continuous attention. While we can manage a specific crisis, we strongly recommend an ongoing ORM strategy to proactively monitor your brand, cultivate positive reviews, and be prepared to address any new issues that may arise."
    }
]

const alternatingContent = [
    {
        title: "Proactive Brand Monitoring",
        description: "We are your eyes and ears online. Our team uses advanced tools to monitor mentions of your brand across social media, forums, news sites, and review platforms, allowing us to stay ahead of the conversation.",
        points: [
            "24/7 monitoring of brand keywords.",
            "Sentiment analysis to gauge public perception.",
            "Real-time alerts for critical mentions.",
            "Competitor reputation tracking."
        ],
        image: {
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncm93dGglMjBjaGFydHxlbnwwfHx8fDE3NjIyNDc5NTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
            hint: "colorful professional data monitoring"
        }
    },
    {
        title: "Strategic Content for Reputation Building",
        description: "The best defense is a good offense. We create and promote a portfolio of positive, high-quality content that reinforces your brand's authority and pushes down unwanted search results.",
        points: [
            "Creation of positive news articles and press releases.",
            "Development of thought leadership blog content.",
            "Promotion of positive customer testimonials and case studies.",
            "Creation and optimization of owned media properties."
        ],
        image: {
            src: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwc3RyYXRlZ3l8ZW58MHx8fHwxNzYyMzM3NzUxfDA&ixlib=rb-4.0.3&q=80&w=1080",
            hint: "colorful professional positive content"
        }
    }
];

export default function OnlineReputationManagementPage() {
  const pageData = {
    title: "Online Reputation Management",
    description: "Shape your brand's narrative, build trust, and protect your online image with our proactive reputation management services.",
    heroImage: "https://ik.imagekit.io/ggelm1lwa/pexels-anamul-rezwan-1216589.jpg?updatedAt=1759859066606",
    heroHint: "colorful professional brand trust",
    features: [
      {
        icon: Search,
        title: "Reputation Monitoring",
        description: "We keep a close watch on mentions, reviews, and conversations about your brand across the web, social media, and review sites.",
      },
      {
        icon: MessageSquare,
        title: "Review Management",
        description: "Encourage positive reviews from satisfied customers and professionally address negative feedback to mitigate damage and show you care.",
      },
      {
        icon: Star,
        title: "Brand Image Building",
        description: "Proactively build a positive online presence through strategic content creation, PR, and positive sentiment generation.",
      },
      {
        icon: ShieldCheck,
        title: "Crisis Response",
        description: "In the event of a reputation crisis, we act swiftly to control the narrative, manage communications, and restore public trust.",
      },
    ]
  };

  return (
    <div className="bg-background">
      <section 
        className="relative h-[80vh] w-full flex items-center justify-center text-center bg-white"
      >
        <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZXNlYXJjaCUyMGFuYWx5c2lzfGVufDB8fHx8MTc2MjI0NzU0OHww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Online Reputation Management"
            className="w-full h-full object- loading="eager" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto px-4">
            {pageData.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Your Reputation is Your Greatest Asset</h2>
                <p>
                  In the digital age, your online reputation is paramount. It's the first impression you make on potential customers, partners, and employees. A single negative review, a misleading news article, or a viral social media comment can have a significant and lasting impact on your bottom line. Our Online Reputation Management (ORM) services are designed to build, protect, and maintain a positive brand image that fosters trust and credibility with your audience.
                </p>
                <p>
                  We don't just react to problems; we take a proactive, 360-degree approach. By continuously monitoring online conversations, managing customer reviews, and creating a buffer of positive, authoritative content, we ensure that your brand is always seen in the best possible light. We help you control your digital narrative, not let it control you.
                </p>
              </div>

              <div className="space-y-8">
                {pageData.features.map(feature => (
                  <div key={feature.title} className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="bg-primary/10 text-primary p-4 rounded-lg">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
               <div className="bg-secondary p-6 md:p-8 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold font-headline mb-4 flex items-center gap-3"><ShieldCheck className="w-7 h-7 text-primary"/>Why ORM is Crucial:</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Over 90% of consumers read online reviews before visiting a business.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>A one-star increase in Yelp rating can lead to a 5-9% increase in revenue.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>Building and maintaining trust is key to customer loyalty and long-term success.</span></li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /> <span>A positive online reputation is a powerful competitive advantage.</span></li>
                  </ul>
               </div>

            </div>
            <div className="md:col-span-1 sticky top-32">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://ik.imagekit.io/ggelm1lwa/pexels-fauxels-3184292.jpg?updatedAt=1759859341496')` }}
        data-ai-hint="colorful professional digital security"
      >
        <div className="absolute inset-0 bg-background/0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline">Our ORM Strategy</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto px-4">A proactive approach to building and protecting your brand image.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-card/70 backdrop-blur-sm">
              <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">Monitor</h3>
              <p className="text-muted-foreground">Continuously track mentions and sentiment across all online channels.</p>
            </Card>
            <Card className="p-8 text-center bg-card/70 backdrop-blur-sm">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">Manage</h3>
              <p className="text-muted-foreground">Engage with reviews, both positive and negative, to show you're listening.</p>
            </Card>
            <Card className="p-8 text-center bg-card/70 backdrop-blur-sm">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">Build</h3>
              <p className="text-muted-foreground">Proactively create and promote positive content to build a strong reputation.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 space-y-16 md:space-y-24">
            {alternatingContent.map((item, index) => (
                <div key={item.title} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className={`overflow-hidden rounded-lg shadow-xl animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-1 slide-in-from-left-10' : 'md:order-2 slide-in-from-right-10'}`}>
                        <img src={item.image.src}
                            alt={item.title}
                            width={800}
                            height={600}
                            data-ai-hint={item.image.hint}
                            className="w-full h-full w-full h-auto object-rounded-lg transition-transform duration-500 hover:scale-105"
                         />
                    </div>
                    <div className={`animate-in fade-in duration-700 ${index % 2 === 0 ? 'md:order-2 slide-in-from-right-10' : 'md:order-1 slide-in-from-left-10'}`}>
                        <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">{item.title}</h3>
                        <p className="text-muted-foreground mb-6">{item.description}</p>
                        <ul className="space-y-3">
                            {item.points.map(point => (
                                <li key={point} className="flex items-start">
                                   <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>  
            ))}
        </div>
      </section>

      <OurClients />

      <section 
        className="relative py-20 md:py-32 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Why Choose Us as Your ORM Partner?
            </h2>
            <p className="text-lg text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4">
              We understand the nuances of online reputation. Our team combines PR expertise, SEO mastery, and content strategy to build a robust defense for your brand. We act as your digital guardians, working tirelessly to ensure the conversation around your brand is positive, accurate, and aligned with your values.
            </p>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
             <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-12 px-4">
              Your questions about online reputation, answered.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
