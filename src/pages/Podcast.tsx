
import { Link } from "react-router-dom";
import { ArrowRight, Mic, Headphones, PlayCircle, Rss, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Input } from "@/components/ui/input";


const episodes = [
  {
    title: "The Future of Digital Marketing",
    category: "Marketing Trends",
    description: "An in-depth discussion on how AI, machine learning, and data analytics are shaping the future of the marketing industry.",
    image: { src: "https://ik.imagekit.io/ggelm1lwa/digital-marketing-with-icons-business-people.jpg?updatedAt=1759942542891", hint: "futuristic marketing" },
    tags: ["AI", "Data Analytics", "Marketing"],
    episodeNumber: "Ep. 12",
  },
  {
    title: "Building a Brand That Lasts",
    category: "Branding",
    description: "Experts share their secrets on creating a strong brand identity that resonates with audiences and stands the test of time.",
    image: { src: "https://ik.imagekit.io/ggelm1lwa/digital-marketing-branding-loyalty-graphics.jpg?updatedAt=1759942678944", hint: "brand identity" },
    tags: ["Branding", "Strategy", "Storytelling"],
    episodeNumber: "Ep. 11",
  },
  {
    title: "The Art of Conversion Rate Optimization",
    category: "E-commerce",
    description: "Learn the techniques and tools used by top professionals to turn website visitors into loyal customers.",
    image: { src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxlY29tbWVyY2UlMjBvcHRpbWl6YXRpb258ZW58MHx8fHwxNzYyMzM3NzUxfDA&ixlib=rb-4.0.3&q=80&w=1080", hint: "conversion optimization" },
    tags: ["CRO", "E-commerce", "UX"],
    episodeNumber: "Ep. 10",
  },
  {
    title: "Navigating the World of B2B Marketing",
    category: "B2B",
    description: "A deep dive into the unique challenges and opportunities in the B2B marketing landscape, with a focus on ABM and lead nurturing.",
    image: { src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxiMmIlMjBtYXJrZXRpbmd8ZW58MHx8fHwxNzYyMzM3NzUxfDA&ixlib=rb-4.0.3&q=80&w=1080", hint: "b2b strategy" },
    tags: ["B2B", "ABM", "Lead Generation"],
    episodeNumber: "Ep. 09",
  },
    {
    title: "Mastering Social Media Engagement",
    category: "Social Media",
    description: "Explore strategies for creating authentic connections and fostering a vibrant community around your brand on social media.",
    image: { src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGVuZ2FnZW1lbnR8ZW58MHx8fHwxNzYyMzM3NzUxfDA&ixlib=rb-4.0.3&q=80&w=1080", hint: "social media engagement" },
    tags: ["Community", "Engagement", "Content"],
    episodeNumber: "Ep. 08",
  },
   {
    title: "The Power of Video Storytelling",
    category: "Video Production",
    description: "Discover how to leverage video to tell compelling stories that capture attention and drive action.",
    image: { src: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx2aWRlbyUyMHN0b3J5dGVsbGluZ3xlbnwwfHx8fDE3NjIzMzc3NTF8MA&ixlib=rb-4.0.3&q=80&w=1080", hint: "video storytelling" },
    tags: ["Video", "Storytelling", "Production"],
    episodeNumber: "Ep. 07",
  },
];

const featuredGuests = [
  {
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    image: { src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", hint: "business woman" },
  },
  {
    name: "John Smith",
    title: "Marketing Guru & Author",
    image: { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBleHBlcnQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjIzMzgxNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080", hint: "marketing expert" },
  },
  {
    name: "Emily White",
    title: "Head of UX, Creative Solutions",
    image: { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx1eCUyMGRlc2lnbmVyJ2Bwb3J0cmFpdHxlbnwwfHx8fDE3NjIzMzgxNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080", hint: "ux designer" },
  },
  {
    name: "Michael Brown",
    title: "Data Scientist",
    image: { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzYyMzM4MTU2fDA&ixlib=rb-4.0.3&q=80&w=1080", hint: "data scientist" },
  },
  {
    name: "Jessica Green",
    title: "Social Media Strategist",
    image: { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHN0cmF0ZWdpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjIzMzgxNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080", hint: "social media strategist" },
  },
  {
    name: "David Wilson",
    title: "Founder, Growth Hype",
    image: { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjIzMzgxNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080", hint: "startup founder" },
  },
];


export default function PodcastPage() {
  return (
    <div className="bg-background text-foreground">
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center text-center"
      >
        <img src="https://drive.google.com/uc?export=download&id=1eT9LRdRF581FRDSpAeWrdlKlOMuMpYOv"
          alt="Podcast hero background"
          className="w-full h-full object-cover" loading="eager" data-ai-hint="podcast setup"
         />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <Mic className="h-20 w-20 mx-auto mb-4" />
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
            Nexstar Insights
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            Your weekly dose of digital marketing trends, strategies, and success stories.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-8" style={{fontFamily: 'cursive', color: 'hsl(var(--primary))'}}>India's Nexstar coming soon</h2>
          <div className="border-2 border-double border-border p-px">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/zmdTK3rfWFA" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="flex items-center justify-center p-8 md:border-l-2 md:border-double md:border-border">
                <img src="https://ik.imagekit.io/ggelm1lwa/Nexstar-Bharat-768x768-removebg-preview.png?updatedAt=1759936634616" 
                  alt="Nexstar Bharat Logo" 
                  width={300} 
                  height={300} 
                  className="object-contain"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24 bg-secondary">
         <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517420704952-d9f39e95b413?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}
          data-ai-hint="colorful abstract"
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500">
              Latest Episodes
            </h2>
            <p className="text-lg text-muted-foreground mt-4 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              Tune in to our latest conversations with industry leaders and innovators.
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {episodes.map((episode, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card 
                      className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-6 h-full flex flex-col"
                      style={{ animationDelay: `${index * 100}ms`, borderRadius: '10px' }}
                    >
                        <CardHeader className="p-0">
                          <div className="relative aspect-video">
                            <img src={episode.image.src}
                              alt={episode.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              style={{borderRadius: '10px 10px 0 0'}}
                              data-ai-hint={episode.image.hint}
                             />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                             <div className="absolute top-4 left-4">
                              <Badge variant="secondary">{episode.category}</Badge>
                            </div>
                             <div className="absolute bottom-4 right-4">
                               <div className="bg-primary/50 text-primary-foreground p-3 rounded-full backdrop-blur-sm border border-primary-foreground/20">
                                <Headphones className="h-6 w-6" />
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-semibold text-muted-foreground">{episode.episodeNumber}</span>
                          </div>
                          <CardTitle className="font-headline text-xl mb-3 leading-tight">{episode.title}</CardTitle>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{episode.description}</p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 mt-auto">
                           <Button className="w-full group/button">
                             <PlayCircle className="mr-2 h-5 w-5 transition-transform group-hover/button:scale-110" /> Listen Now
                           </Button>
                        </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
          </Carousel>

        </div>
      </section>

      <section
        className="py-16 md:py-32 bg-cover bg-center"
        style={{backgroundImage: `url('https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight text-white mb-4">Influencer Marketing Hub</h2>
            <p className="text-lg text-white/80 mb-8">Connect with creators, amplify your message, and drive authentic engagement. We build bridges between brands and influential voices.</p>
            <Button size="lg">Explore Campaigns <ArrowRight className="ml-2 h-5 w-5"/></Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">Never Miss an Episode</h3>
                <p className="text-muted-foreground mb-6">Subscribe to get the latest episodes delivered straight to your inbox.</p>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Enter your email" />
                    <Button type="submit">Subscribe</Button>
                </div>
            </div>
             <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">Listen On Your Favorite Platform</h3>
                 <p className="text-muted-foreground mb-6">Find Nexstar Insights on all major podcast platforms.</p>
                <div className="flex justify-center md:justify-start space-x-4">
                   <Button variant="outline" size="lg">Spotify</Button>
                   <Button variant="outline" size="lg">Apple Podcasts</Button>
                   <Button variant="outline" size="lg">Google Podcasts</Button>
                </div>
            </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-32 bg-background text-foreground"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-500">
              Featured Guests
            </h2>
            <p className="text-lg text-muted-foreground mt-4 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
              We've had the pleasure of hosting some of the brightest minds in the industry.
            </p>
          </div>
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {featuredGuests.map((guest, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group relative overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-6 text-center"
                    style={{ animationDelay: `${index * 150}ms`, borderRadius: '10px' }}
                  >
                    <div className="relative aspect-square">
                        <img src={guest.image.src}
                            alt={guest.name}
                            className="w-full h-full object-w-full h-full transition-transform duration-500 group-hover:scale-110 filter brightness-125 group-hover:brightness-100"
                            style={{borderRadius: '10px'}}
                            data-ai-hint={guest.image.hint}
                         />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6" style={{borderRadius: '10px'}}>
                      <h3 className="font-headline text-2xl font-bold text-white mb-1">{guest.name}</h3>
                      <p className="text-white/80 text-sm">{guest.title}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
             <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
          </Carousel>

           <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-7 duration-500 delay-300">
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Become a Guest <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}

    