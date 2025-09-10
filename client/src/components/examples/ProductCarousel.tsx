import ProductCarousel from '../ProductCarousel';
import heroImage from "@assets/generated_images/Elegant_pink_bow_cake_ba0afee2.png";

export default function ProductCarouselExample() {
  const mockProducts = [
    {
      id: "kit1",
      title: "Kit Festa Pequeno",
      description: "1 torta laço (10 pessoas), 1 cento salgado, 1 refri 2L",
      price: "R$ 125",
      image: heroImage,
      category: "Kits de Festa"
    },
    {
      id: "kit2",
      title: "Kit Festa Médio",
      description: "1 torta laço (20 pessoas), 2 centos salgados, 2 refri 2L",
      price: "R$ 210",
      image: heroImage,
      category: "Kits de Festa"
    },
    {
      id: "kit3",
      title: "Kit Festa Grande",
      description: "1 torta laço (20 pessoas), 2 centos salgados, 2 refri 2L, 50 docinhos",
      price: "R$ 260",
      image: heroImage,
      category: "Kits de Festa"
    }
  ];

  return (
    <ProductCarousel 
      title="Kits de Festa"
      emoji="🎉"
      products={mockProducts}
    />
  );
}