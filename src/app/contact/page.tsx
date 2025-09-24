import ContactForm from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100">
          Have a project in mind or just want to say hello? We'd love to hear
          from you.
        </p>
      </div>
      <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200">
        <ContactForm />
      </div>
    </div>
  );
}
