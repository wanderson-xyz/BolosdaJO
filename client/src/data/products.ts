// Todo: move this to backend/database when implementing full system
import cakeImage from "@assets/generated_images/Elegant_pink_bow_cake_ba0afee2.png";
import chantillyImage from "@assets/generated_images/Chantilly_cream_cake_7c25707d.png";
import traditionalImage from "@assets/generated_images/Traditional_Brazilian_cake_a2c3eef8.png";
import brownieImage from "@assets/generated_images/Chocolate_brownies_bdf1a545.png";
import salgadosImage from "@assets/generated_images/Brazilian_savory_snacks_1d73f3cd.png";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const kitsFesta: Product[] = [
  {
    id: "kit1",
    title: "Kit 1 - Pequeno",
    description: "1 torta laço (10 pessoas), 1 cento salgado, 1 refri 2L",
    price: "R$ 125",
    image: cakeImage,
    category: "Kits de Festa"
  },
  {
    id: "kit2", 
    title: "Kit 2 - Médio",
    description: "1 torta laço (20 pessoas), 2 centos salgados, 2 refri 2L",
    price: "R$ 210",
    image: cakeImage,
    category: "Kits de Festa"
  },
  {
    id: "kit3",
    title: "Kit 3 - Completo",
    description: "1 torta laço (20 pessoas), 2 centos salgados, 2 refri 2L, 50 docinhos",
    price: "R$ 260", 
    image: cakeImage,
    category: "Kits de Festa"
  },
  {
    id: "kit4",
    title: "Kit 4 - Grande",
    description: "1 torta laço (30 pessoas), 3 centos salgados, 3 refri 2L, 50 docinhos",
    price: "R$ 350",
    image: cakeImage,
    category: "Kits de Festa"
  },
  {
    id: "kit5",
    title: "Kit 5 - Supremo", 
    description: "1 torta laço (30 pessoas), 3 centos salgados, 3 refri 2L, 100 docinhos",
    price: "R$ 405",
    image: cakeImage,
    category: "Kits de Festa"
  }
];

export const kitsChantininho: Product[] = [
  {
    id: "chant1",
    title: "Kit Chantininho 1",
    description: "Chantininho (15 pessoas), 1 cento salgados, 50 docinhos",
    price: "R$ 275",
    image: chantillyImage,
    category: "Kits Chantininho"
  },
  {
    id: "chant2", 
    title: "Kit Chantininho 2",
    description: "Chantininho (25 pessoas), 2 centos salgados, 100 docinhos", 
    price: "R$ 399",
    image: chantillyImage,
    category: "Kits Chantininho"
  },
  {
    id: "chant3",
    title: "Kit Chantininho 3",
    description: "Chantininho (35 pessoas), 3 centos salgados, 100 docinhos",
    price: "R$ 489",
    image: chantillyImage,
    category: "Kits Chantininho"
  }
];

export const tortasBolos: Product[] = [
  {
    id: "bolo1",
    title: "Bolo Amanteigado",
    description: "Bolo tradicional amanteigado, receita da família",
    price: "R$ 20",
    image: traditionalImage,
    category: "Tortas e Bolos"
  },
  {
    id: "bolo2",
    title: "Bolo Formigueiro", 
    description: "Clássico bolo formigueiro com granulado",
    price: "R$ 20",
    image: traditionalImage,
    category: "Tortas e Bolos"
  },
  {
    id: "bolo3",
    title: "Bolo Mesclado",
    description: "Delicioso bolo mesclado de chocolate e baunilha",
    price: "R$ 20",
    image: traditionalImage,
    category: "Tortas e Bolos"
  },
  {
    id: "bolo4",
    title: "Bolo Mole Tradicional",
    description: "Bolo mole tradicional, úmido e saboroso",
    price: "R$ 26", 
    image: traditionalImage,
    category: "Tortas e Bolos"
  }
];

export const docesExtras: Product[] = [
  {
    id: "brownie1",
    title: "Brownie Individual",
    description: "Brownie artesanal de chocolate, rico e cremoso",
    price: "R$ 5",
    image: brownieImage,
    category: "Doces"
  }
];

export const salgados: Product[] = [
  {
    id: "salgado1",
    title: "Salgados (1 cento)",
    description: "Coxinha, risole, pastel e outros salgados fresquinhos",
    price: "Conforme kits",
    image: salgadosImage,
    category: "Salgados"
  }
];