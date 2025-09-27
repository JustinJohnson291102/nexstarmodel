
import ContactForm from "@/components/contact/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/contact-hero/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 px-4 text-white">
           <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
              Get in Touch
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </p>
        </div>
      </section>
      
      <section className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/contact-bg/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-background/60 z-0" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="grid md:grid-cols-2 gap-16 items-start">
             <div className="animate-in fade-in slide-in-from-left-10 duration-700 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold font-headline mb-4">Contact Information</h2>
                  <p className="text-muted-foreground text-lg">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">(123) 456-7890</a>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <a href="mailto:hello@nexstar.com" className="text-muted-foreground hover:text-primary transition-colors">hello@nexstar.com</a>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-muted-foreground">123 Digital Ave, Innovation City, 12345</p>
                    </div>
                  </div>
                </div>
             </div>
             <div className="animate-in fade-in slide-in-from-right-10 duration-700">
                <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-4 sm:p-8 shadow-lg">
                  <CardContent className="p-0">
                    <ContactForm />
                  </CardContent>
                </Card>
             </div>
           </div>
        </div>
      </section>
    </>
  );
}

    