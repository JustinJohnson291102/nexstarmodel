"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function EpisodeCard({ episode }) {
  return (
    <Card className="h-full flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full">
          {episode.image && (
            <Image
              src={episode.image.imageUrl}
              alt={episode.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={episode.image.imageHint}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-headline font-bold text-lg mb-2 leading-tight">
          {episode.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {episode.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <div className="w-full">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>0:00</span>
            <span>{episode.duration}</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-1.5 mb-4">
            <div className="bg-primary h-1.5 rounded-full w-0 group-hover:w-1/4 transition-all duration-500 ease-out"></div>
          </div>
          <Button variant="secondary" className="w-full group/button">
            <Play className="h-4 w-4 mr-2 text-primary group-hover/button:scale-125 group-hover/button:text-accent transition-all duration-300" />
            Play Episode
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
