import ContactForm from "@/components/contact/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section 
        className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">
              Get Free Quote
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-2">
              Just have a quick any questions?
            </p>
          </div>
        </div>
      </section>
      
      <section className="relative pb-20 md:pb-32 bg-background">
        <div className="container mx-auto px-4 relative z-10">
           <div className="grid md:grid-cols-2 gap-16 items-start">
             <div className="space-y-8">
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Visit Us</h3>
                      <p className="text-muted-foreground text-sm">845 3rd Ave 6th floor, New York, NY 10022, United States</p>
                      <p className="text-muted-foreground text-sm mt-2">Level-5, SB Tower, Film City, Sector-16A, Noida – 201301, (U.P.) India</p>
                    </div>
                  </CardContent>
                </Card>
                 <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Contact Us</h3>
                      <a href="tel:+19176728930" className="text-muted-foreground hover:text-primary transition-colors text-sm">+1 (917) 672-8930</a>
                      <br />
                      <a href="tel:+919821000921" className="text-muted-foreground hover:text-primary transition-colors text-sm">+91 98210 00921</a>
                    </div>
                  </CardContent>
                </Card>
                 <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <a href="mailto:contact@nexstarlive.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">contact@nexstarlive.com</a>
                       <br />
                      <a href="mailto:contact@nexstarmedia.in" className="text-muted-foreground hover:text-primary transition-colors text-sm">contact@nexstarmedia.in</a>
                    </div>
                  </CardContent>
                </Card>
             </div>
             <div>
                <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-4 sm:p-8 shadow-lg">
                   <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold font-headline">Get Free Quote</h2>
                      <p className="text-muted-foreground">Just have a quick any questions?</p>
                   </div>
                  <CardContent className="p-0">
                    <ContactForm />
                  </CardContent>
                </Card>
             </div>
           </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="h-[400px] md:h-[500px] w-full">
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
                 <div className="h-[400px] md:h-[500px] w-full">
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