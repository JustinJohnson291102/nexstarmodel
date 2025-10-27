




// 🔥 FIX: URLs ko working content links (uc?id=FILE_ID) mein change kiya gaya hai.
const clientLogos = [
  { src: "https://ik.imagekit.io/ggelm1lwa/new/download-removebg-preview.png?updatedAt=1761487160864", alt: "Client 9" },
  { src: "https://ik.imagekit.io/ggelm1lwa/new/download__11_-BWbJYOwO-removebg-preview.png?updatedAt=1761487160751", alt: "Client 8" },
  { src: "https://ik.imagekit.io/ggelm1lwa/new/download__13_-CIOG7-ML-removebg-preview.png?updatedAt=1761487160729", alt: "Client 7" },
  { src: "https://ik.imagekit.io/ggelm1lwa/new/download__7_-DDamdP-Q-removebg-preview.png?updatedAt=1761487160687", alt: "Client 6" },
  { src: "https://ik.imagekit.io/ggelm1lwa/new/download__3_-removebg-preview.png?updatedAt=1761487160646", alt: "Client 5" },
  { src: "https://ik.imagekit.io/ggelm1lwa/new/download__2_-removebg-preview.png?updatedAt=1761487160623", alt: "Client 4" },
  { src: "https://ik.imagekit.io/ggelm1lwa/new/download__4_-removebg-preview.png?updatedAt=1761487160611", alt: "Client 3" },
  { src: "https://ik.imagekit.io/ggelm1lwa/new/download__1_-QcHrYjAO-removebg-preview.png?updatedAt=1761487160401", alt: "Client 2" },
  { src: "https://ik.imagekit.io/ggelm1lwa/new/download__1_-removebg-preview.png?updatedAt=1761487160366", alt: "Client 1" },
];

export default function OurClients({ showTitle = true }: { showTitle?: boolean }) {
  // Continuous loop ke liye logos ko duplicate kiya gaya hai
  const extendedLogos = [...clientLogos, ...clientLogos]; 
  
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {showTitle && (
            <h2 className="font-headline text-primary text-2xl md:text-3xl font-bold tracking-tight mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
              Our Clients
            </h2>
          )}
          <div
            // Main container: flex, overflow-x-hidden, aur w-full
            className="relative flex overflow-x-hidden w-full group"
          >
            {/* Pehla set: w-max aur flex-shrink-0 continuous strip ensure karte hain */}
            <div className="flex w-max animate-marquee-slow flex-shrink-0">
              {extendedLogos.map((logo, index) => (
                <div key={`set1-${index}`} className="mx-10 flex items-center justify-center h-24 opacity-50 transition-opacity duration-300 hover:opacity-100">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={195}
                    height={98}
                    className="object-contain h-24 w-auto"
                  />
                </div>
              ))}
            </div>

            {/* Doosra set: Loop ko complete karta hai */}
            <div className="flex w-max animate-marquee-slow flex-shrink-0" aria-hidden="true">
              {extendedLogos.map((logo, index) => (
                <div key={`set2-${index}`} className="mx-10 flex items-center justify-center h-24 opacity-50 transition-opacity duration-300 hover:opacity-100">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={195}
                    height={98}
                    className="object-contain h-24 w-auto"
                  />
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
