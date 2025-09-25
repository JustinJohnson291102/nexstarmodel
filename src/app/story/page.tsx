import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function StoryPage() {
  return (
    <>
      <section className="relative h-[70vh] w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://drive.google.com/uc?export=view&id=1OqAyh5AJXjw63hlhWy3koRpY8GXgoGe6"
          alt="Group of people collaborating"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white mb-4">
            Our Story
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
            We ignite brands with ideas that transform behaviour
          </p>
        </div>
      </section>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-8 text-center animate-in fade-in slide-in-from-bottom-5 duration-500">
              The Journey of Digitale
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              <p>
                Founded on the principle of innovation, Digitale Agency was born from a desire to bridge the gap between creative vision and digital execution. We saw a world brimming with incredible ideas that just needed the right strategy and technical expertise to come to life.
              </p>
              <p>
                Our journey began with a small team of passionate developers, designers, and marketers who shared a common goal: to build exceptional digital experiences. From crafting pixel-perfect Shopify stores to engineering data-driven go-to-market strategies, we've always been obsessed with delivering results that matter.
              </p>
              <p>
                Over the years, we've grown, but our core mission remains the same. We believe in the power of collaboration, the magic of creativity, and the impact of technology. We're not just a service provider; we're a partner in our clients' success, dedicated to helping them navigate the ever-evolving digital landscape and achieve their most ambitious goals.
              </p>
              <p>
                We're excited about what the future holds and look forward to writing the next chapter of our story with you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section 
        className="py-20 md:py-32 bg-secondary relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/team-bg/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-secondary/80 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-full mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground mx-auto max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              Our highly-enthusiastic team is a fantastic mix of energy, ideas, experience and new thinking, who work hand-in-hand to create stand-out work. From creative to strategy, business to digital marketing, media to interactive – we’re always raring to go!
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center animate-in fade-in slide-in-from-left-10 duration-700">
              <div className="inline-block">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1sHb5vgWug43sY7N9TWDoZfnsTvCBFvSb"
                  alt="Kiran Bhat"
                  width={280}
                  height={280}
                  className="rounded-lg shadow-lg"
                />
                <h3 className="text-2xl font-bold font-headline text-accent mt-4">
                  Kiran Bhat
                </h3>
                <p className="text-lg text-primary font-semibold">CMD</p>
              </div>
            </div>
            <div className="text-muted-foreground prose prose-lg text-justify animate-in fade-in slide-in-from-right-10 duration-700 space-y-4">
              <p>
                Kiran Bhat is not only an advertising and strategy maestro, she's a veritable force when it comes to busting stereotypes. An Industrial Psychologist by qualification, Kiran went on to get her Executive Education from Harvard Business School.
              </p>
              <p>
                She is also Co-author of the hugely successful book on entrepreneurship - 'No Holy Cows in Business' - she continues to serve as guest faculty in several of India's top management schools. Frequently invited to speak on several industry panels across India.
              </p>
              <p>
                She started Xebec Communications Pvt Ltd in 1992. A rich experience of 28 years stands her in good stead as she continues to steer and build successful brands across diverse verticals - be it BFSI, Retail, Real Estate, B2B, FMCG, Education or new age businesses which need out of the box thinking.
              </p>
              <p>
                Always up for new challenges, Kiran has successfully created a niche for Xebec and herself as one of the most respected and creatively-forward names in Digital Marketing and Advertising Communication.
              </p>
            </div>
          </div>
          
          <div className="mt-20 md:mt-32">
            <Separator className="my-16 bg-primary/20" />
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              <div className="md:order-2 text-center animate-in fade-in slide-in-from-right-10 duration-700">
                <div className="inline-block">
                  <Image
                    src="https://drive.google.com/uc?export=view&id=18bldZBErWmnA1HsjR2UmZIkqnVqRo-qg"
                    alt="Anil Bhat"
                    width={280}
                    height={280}
                    className="rounded-lg shadow-lg"
                  />
                  <h3 className="text-2xl font-bold font-headline text-accent mt-4">
                    Anil Bhat
                  </h3>
                  <p className="text-lg text-primary font-semibold">Director & CEO</p>
                </div>
              </div>
              <div className="md:order-1 text-muted-foreground prose prose-lg text-justify animate-in fade-in slide-in-from-left-10 duration-700 space-y-4">
                <p>
                  Anil Bhat lives, sleeps, talks and breathes Digital Marketing - and that's no exaggeration! Having completed his Graduation in Engineering, Anil went on to become a Certified Digital Marketing Specialist with a Google Black Belt certification. He has now completed 25 years in Xebec Communications, as the guiding light behind transforming it into a leading digital marketing company.
                </p>
                <p>
                  Be it Social Media Marketing or Web Design, Search Engine Optimization or Performance Marketing, Application Development or Marketing Strategy - Anil has been instrumental for the Digital Transformation of several brands across verticals like Education, Real Estate, B2B, Retail, Home & Interiors, BFSI and more. As a specialist in the field, he has the expertise to deliver solutions that extend over the entire gamut of E-Commerce, CRM, Lead Generation, Digital Media Planning, Media Buying, Marketing Strategy and Technology.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-32">
            <Separator className="my-16 bg-primary/20" />
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              <div className="text-center animate-in fade-in slide-in-from-left-10 duration-700">
                <div className="inline-block">
                  <Image
                    src="https://drive.google.com/uc?export=view&id=1yccbQERS1sPGFOwT51wAZddfr_x50-Lx"
                    alt="New Team Member"
                    width={280}
                    height={280}
                    className="rounded-lg shadow-lg"
                  />
                  <h3 className="text-2xl font-bold font-headline text-accent mt-4">
                    [New Team Member Name]
                  </h3>
                  <p className="text-lg text-primary font-semibold">[Title/Role]</p>
                </div>
              </div>
              <div className="text-muted-foreground prose prose-lg text-justify animate-in fade-in slide-in-from-right-10 duration-700 space-y-4">
                <p>
                  [Placeholder for the new team member's biography. You can provide the text, and I will add it here.]
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
              Down the memory lane
            </h2>
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100">
              {/* Content for this section will go here */}
              <p className="text-lg text-muted-foreground">This section is ready for your content.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
