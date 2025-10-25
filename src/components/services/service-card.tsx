import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";


export default function ServiceCard({ image, title, description }) {
  return (
    <Card className="h-full group transition-all duration-300 ease-in-out hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:rotate-1 overflow-hidden">
      {image && (
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={image.imageUrl}
              alt={title}
             
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              data-ai-hint={image.imageHint}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6">
        <CardTitle className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors duration-300">
          Learn More
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
        </div>
      </CardContent>
    </Card>
  );
}
