import ProductCard from '../ProductCard';
import heroImage from "@assets/generated_images/Elegant_pink_bow_cake_ba0afee2.png";

export default function ProductCardExample() {
  return (
    <div className="p-4">
      <ProductCard 
        id="example"
        title="Kit Festa Completo"
        description="1 torta laço (10 pessoas), 1 cento salgado, 1 refri 2L"
        price="R$ 125"
        image={heroImage}
        category="Kits de Festa"
      />
    </div>
  );
}