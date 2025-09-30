
"use client";

import ContactForm from "@/components/contact/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <section 
        className="relative pt-20 pb-12 md:pt-32 md:pb-20 flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://drive.google.com/uc?export=view&id=1wptAmzKIg3EepYgAVTwp3IpxAZGO0E7_')` }}
        data-ai-hint="vibrant contact background"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 mt-4">
              We're here to help you achieve your goals. Whether you have a question about our services or want to start a project, our team is ready to help.
            </p>
          </div>
        </div>
      </section>
      
      <section className="relative py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 relative z-10">
           <div className="grid md:grid-cols-2 gap-16 items-start">
             <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
                <Card className="bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-l-4 border-primary">
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-lg">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl font-headline mb-2">Visit Us</h3>
                      <p className="text-muted-foreground">845 3rd Ave 6th floor, New York, NY 10022, United States</p>
                      <p className="text-muted-foreground mt-2">Level-5, SB Tower, Film City, Sector-16A, Noida – 201301, (U.P.) India</p>
                    </div>
                  </CardContent>
                </Card>
                 <Card className="bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-l-4 border-primary">
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-lg">
                      <Phone className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl font-headline mb-2">Contact Us</h3>
                      <a href="tel:+19176728930" className="text-muted-foreground hover:text-primary transition-colors">+1 (917) 672-8930</a>
                      <br />
                      <a href="tel:+919821000921" className="text-muted-foreground hover:text-primary transition-colors">+91 98210 00921</a>
                    </div>
                  </CardContent>
                </Card>
                 <Card className="bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-l-4 border-primary">
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-lg">
                      <Mail className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl font-headline mb-2">Email Us</h3>
                      <a href="mailto:contact@nexstarlive.com" className="text-muted-foreground hover:text-primary transition-colors">contact@nexstarlive.com</a>
                       <br />
                      <a href="mailto:contact@nexstarmedia.in" className="text-muted-foreground hover:text-primary transition-colors">contact@nexstarmedia.in</a>
                    </div>
                  </CardContent>
                </Card>
             </div>
             <div className="bg-card p-8 rounded-2xl shadow-xl animate-in fade-in slide-in-from-right-10 duration-700">
                <ContactForm />
             </div>
           </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.613337920792!2d-73.9712196845942!3d40.75050097932788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590155b33c07%3A0x232e6e58284e3753!2s845%203rd%20Ave%2C%20New%20York%2C%20NY%2010022%2C%20USA!5e0!3m2!1sen!2sin!4v1678886311545!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                 <div className="h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.492063045293!2d77.31296561508127!3d28.58502098243685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a55b314d69%3A0x1c98492019934d61!2sSB%20Tower!5e0!3m2!1sen!2sin!4v1678886393521!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
