
"use client";

import ContactForm from "@/components/contact/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section 
        className="relative pt-20 pb-12 md:pt-32 md:pb-20 flex items-center justify-center text-center bg-cover bg-center bg-fixed"
        style={{ 
            backgroundImage: `url('https://drive.google.com/uc?export=download&id=1wptAmzKIg3EepYgAVTwp3IpxAZGO0E7_')` 
        }}
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
      
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-6 sm:p-10 rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-10 duration-700">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-t-4 border-primary animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <div className="bg-primary/10 text-primary p-4 rounded-full">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl font-headline mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">845 3rd Ave 6th floor, New York, NY 10022, United States</p>
                  <p className="text-muted-foreground text-sm mt-2">Level-5, SB Tower, Film City, Sector-16A, Noida – 201301, (U.P.) India</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-t-4 border-primary animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <div className="bg-primary/10 text-primary p-4 rounded-full">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl font-headline mb-2">Contact Us</h3>
                  <a href="tel:+19176721794" className="text-muted-foreground hover:text-primary transition-colors">+1-917-6721794</a>
                  <br />
                  <a href="tel:+919821000921" className="text-muted-foreground hover:text-primary transition-colors">+91 98210 00921</a>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-t-4 border-primary animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <div className="bg-primary/10 text-primary p-4 rounded-full">
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
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0830491147716!2d-73.97444198464673!3d40.75708097932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258d4a460b6fd%3A0xc6c768a735626a5c!2s845%203rd%20Ave%206th%20floor%2C%20New%20York%2C%20NY%2010022%2C%20USA!5e0!3m2!1sen!2sin!4v1638275218706!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8129712061617!2d77.3190833758364!3d28.6053805847424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf25e0c5e7b57%3A0x7d6560935574345d!2sSB%20Tower!5e0!3m2!1sen!2sin!4v1638275306385!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
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

    