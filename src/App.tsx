import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Preloader from '@/components/layout/preloader';
import Chatbot from '@/components/layout/chatbot';

import Home from '@/pages/Home';
import AugmentedReality from '@/pages/AugmentedReality';
import B2B from '@/pages/B2B';
import BackendFrontendOutsource from '@/pages/BackendFrontendOutsource';
import BroadcastSolutions from '@/pages/BroadcastSolutions';
import Contact from '@/pages/Contact';
import CreativeBranding from '@/pages/CreativeBranding';
import DigitalBranding from '@/pages/DigitalBranding';
import DigitalBusinessConsulting from '@/pages/DigitalBusinessConsulting';
import DigitalTransformation from '@/pages/DigitalTransformation';
import EcommerceDevelopment from '@/pages/EcommerceDevelopment';
import GtmStrategy from '@/pages/GtmStrategy';
import MobileAppDevelopment from '@/pages/MobileAppDevelopment';
import OnlineReputationManagement from '@/pages/OnlineReputationManagement';
import OttServices from '@/pages/OttServices';
import PerformanceMarketing from '@/pages/PerformanceMarketing';
import Podcast from '@/pages/Podcast';
import Portfolio from '@/pages/Portfolio';
import PpcPricing from '@/pages/PpcPricing';
import SeoPricing from '@/pages/SeoPricing';
import SmoPricing from '@/pages/SmoPricing';
import RapidWebsiteDevelopment from '@/pages/RapidWebsiteDevelopment';
import SearchMarketing from '@/pages/SearchMarketing';
import Services from '@/pages/Services';
import Shopify from '@/pages/Shopify';
import SocialMedia from '@/pages/SocialMedia';
import Story from '@/pages/Story';
import VideoProduction from '@/pages/VideoProduction';
import WebSolutions from '@/pages/WebSolutions';
import WhatsappChatbots from '@/pages/WhatsappChatbots';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-body antialiased">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <main className="pt-[4.5rem] md:pt-28">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/augmented-reality" element={<AugmentedReality />} />
              <Route path="/b2b" element={<B2B />} />
              <Route path="/backend-frontend-outsource" element={<BackendFrontendOutsource />} />
              <Route path="/broadcast-solutions" element={<BroadcastSolutions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/creative-branding" element={<CreativeBranding />} />
              <Route path="/digital-branding" element={<DigitalBranding />} />
              <Route path="/digital-business-consulting" element={<DigitalBusinessConsulting />} />
              <Route path="/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
              <Route path="/gtm-strategy" element={<GtmStrategy />} />
              <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/online-reputation-management" element={<OnlineReputationManagement />} />
              <Route path="/ott-services" element={<OttServices />} />
              <Route path="/performance-marketing" element={<PerformanceMarketing />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing/ppc-pricing" element={<PpcPricing />} />
              <Route path="/pricing/seo-pricing" element={<SeoPricing />} />
              <Route path="/pricing/smo-pricing" element={<SmoPricing />} />
              <Route path="/rapid-website-development" element={<RapidWebsiteDevelopment />} />
              <Route path="/search-marketing" element={<SearchMarketing />} />
              <Route path="/services" element={<Services />} />
              <Route path="/shopify" element={<Shopify />} />
              <Route path="/social-media" element={<SocialMedia />} />
              <Route path="/story" element={<Story />} />
              <Route path="/video-production" element={<VideoProduction />} />
              <Route path="/web-solutions" element={<WebSolutions />} />
              <Route path="/whatsapp-chatbots" element={<WhatsappChatbots />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
          <Toaster />
        </>
      )}
    </div>
  );
}
