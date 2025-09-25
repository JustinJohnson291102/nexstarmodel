
import EpisodeCard from "@/components/podcast/episode-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Headphones, Mic, Rss, Users, PlayCircle } from "lucide-react";

const episodes = [
  {
    id: 1,
    title: "The Future of E-commerce",
    description: "Exploring the latest trends shaping online retail and how to stay ahead of the curve.",
    duration: "45 min",
    image: PlaceHolderImages.find((img) => img.id === "podcast-thumb-1"),
  },
  {
    id: 2,
    title: "Mastering Go-To-Market Strategy",
    description: "A deep dive into crafting a GTM plan that guarantees a successful product launch.",
    duration: "52 min",
    image: PlaceHolderImages.find((img) => img.id === "podcast-thumb-2"),
  },
  {
    id: 3,
    title: "The Art of Digital Branding",
    description: "How to build a memorable brand in a crowded digital landscape with our expert panel.",
    duration: "38 min",
    image: PlaceHolderImages.find((img) => img.id === "podcast-thumb-3"),
  },
  {
    id: 4,
    title: "AI in Marketing: Beyond the Hype",
    description: "Practical applications of AI that can transform your marketing efforts and drive real results.",
    duration: "61 min",
    image: PlaceHolderImages.find((img) => img.id === "podcast-thumb-4"),
  },
];

const hosts = [
    {
        name: "Alex Chen",
        role: "Lead Strategist",
        avatar: "https://picsum.photos/seed/host1/200",
        avatarHint: "man portrait smiling",
    },
    {
        name: "Jasmine Kaur",
        role: "Creative Director",
        avatar: "https://picsum.photos/seed/host2/200",
        avatarHint: "woman portrait professional",
    }
]

export default function PodcastPage() {
  const featuredEpisode = episodes[0];
  
  return (
    <div className="bg-background text-foreground">
      <section 
        className="relative h-[70vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/podcast-hero/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 px-4 text-white animate-in fade-in slide-in-from-bottom-10 duration-700">
           <Headphones className="h-20 w-20 mx-auto mb-4 text-primary" />
           <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
              Digitale Dispatches
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
              Insights, interviews, and inspiration from the forefront of the digital world.
            </p>
        </div>
      </section>

      <section className="relative py-20 md:py-32" style={{ backgroundImage: `url('https://picsum.photos/seed/podcast-about/1920/1080')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-in fade-in slide-in-from-left-10 duration-700">
                    <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6">
                        Tune In. Level Up.
                    </h2>
                    <p className="text-lg text-muted-foreground space-y-4">
                        <span>Digitale Dispatches is your weekly dose of digital marketing expertise. We cut through the noise to bring you actionable strategies and fresh perspectives from industry leaders.</span>
                        <span>Whether you're a startup founder, a marketing pro, or just digitally curious, our podcast is designed to give you the edge.</span>
                    </p>
                </div>
                <div className="animate-in fade-in slide-in-from-right-10 duration-700">
                    <div className="rounded-lg overflow-hidden shadow-2xl">
                        <Image src="https://picsum.photos/seed/podcast-mic/600/400" alt="Podcast Microphone" width={600} height={400} className="w-full h-auto object-cover" data-ai-hint="podcast microphone" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    Latest Episodes
                </h2>
                <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
                    Catch up on our recent conversations and discover your next big idea.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {episodes.map((episode, index) => (
                <div
                    key={episode.id}
                    className="animate-in fade-in slide-in-from-bottom-6 duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <EpisodeCard episode={episode} />
                </div>
                ))}
            </div>
             <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-7 duration-500 delay-300">
                <Button size="lg" asChild className="group">
                    <Link href="#">
                        Browse All Episodes <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>
      
       <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/podcast-hosts/1920/1080')` }}
       >
         <div className="absolute inset-0 bg-primary/90 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <Users className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              Meet Your Hosts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {hosts.map((host, index) => (
                <div key={host.name} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 bg-background/10 p-8 rounded-lg animate-in fade-in slide-in-from-bottom-6 duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                    <Avatar className="h-24 w-24 border-4 border-background/20">
                        <AvatarImage src={host.avatar} alt={host.name} data-ai-hint={host.avatarHint} />
                        <AvatarFallback>{host.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-primary-foreground">
                        <h3 className="text-2xl font-bold font-headline">{host.name}</h3>
                        <p className="text-primary-foreground/80 font-semibold mb-2">{host.role}</p>
                        <p className="text-primary-foreground/70 text-sm">Our resident expert in all things strategy, Alex breaks down complex topics into actionable advice.</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Listen & Subscribe
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Never miss an episode. Find Digitale Dispatches on your favorite platform.
            </p>
            <div className="flex justify-center gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-7 duration-500 delay-200">
              <Button variant="outline" size="lg" asChild className="transition-transform hover:-translate-y-1">
                <Link href="#" aria-label="Listen on Spotify">
                  <Rss className="h-6 w-6 mr-2" /> Spotify
                </Link>
              </Button>
               <Button variant="outline" size="lg" asChild className="transition-transform hover:-translate-y-1">
                <Link href="#" aria-label="Listen on Apple Podcasts">
                   <Mic className="h-6 w-6 mr-2" /> Apple Podcasts
                </Link>
              </Button>
               <Button variant="outline" size="lg" asChild className="transition-transform hover:-translate-y-1">
                <Link href="#" aria-label="Listen on Google Podcasts">
                   <PlayCircle className="h-6 w-6 mr-2" /> Google Podcasts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

    