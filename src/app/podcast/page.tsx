import EpisodeCard from "@/components/podcast/episode-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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

export default function PodcastPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          Digitale Dispatches
        </h1>
        <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
          Tune in to our podcast for insights, interviews, and inspiration from
          the forefront of the digital world.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
    </div>
  );
}
