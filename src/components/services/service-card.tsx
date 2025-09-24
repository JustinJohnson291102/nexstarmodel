import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServiceCard({ image, title, description }) {
  return (
    <Card className="h-full group transition-all duration-300 ease-in-out hover:border-primary hover:shadow-xl hover:-translate-y-2 overflow-hidden">
      {image && (
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full">
            <Image
              src={image.imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6">
        <CardTitle className="font-headline text-2xl mb-4">{title}</CardTitle>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
}
