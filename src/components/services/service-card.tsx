import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <Card className="h-full group transition-all duration-300 ease-in-out hover:border-primary hover:shadow-xl hover:-translate-y-2">
      <CardHeader className="flex flex-col items-start gap-4">
        <div className="bg-primary/10 text-primary p-3 rounded-lg">
          <Icon className="h-8 w-8 transition-transform duration-300 group-hover:rotate-[-15deg] group-hover:scale-110" />
        </div>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
}
