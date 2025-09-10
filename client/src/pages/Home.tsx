import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOSchema from "@/components/SEOSchema";
import { 
  kitsFesta, 
  kitsChantininho, 
  tortasBolos, 
  brownies, 
  salgados 
} from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOSchema />
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Product Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProductCarousel 
            title="Kits de Festa"
            emoji="🎉"
            products={kitsFesta}
          />
          
          <ProductCarousel 
            title="Kits Chantininho"
            emoji="🎂"
            products={kitsChantininho}
          />
          
          <ProductCarousel 
            title="Tortas e Bolos"
            emoji="🍰"
            products={tortasBolos}
          />
          
          <ProductCarousel 
            title="Brownies"
            emoji="🍫"
            products={brownies}
          />
          
          <ProductCarousel 
            title="Salgados"
            emoji="🥟"
            products={salgados}
          />
        </motion.div>
        
        <AboutSection />
        <LocationSection />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}