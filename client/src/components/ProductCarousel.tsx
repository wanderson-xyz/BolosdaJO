import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
  emoji: string;
}

export default function ProductCarousel({ title, products, emoji }: ProductCarouselProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="mr-3">{emoji}</span>
            {title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 px-4" style={{ width: 'max-content' }}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}