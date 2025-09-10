// Catálogo completo conforme PRD - Todo: move to backend/database when implementing full system
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
  whatsappMessage?: string;
}

// 🎉 Kits de Festa - Preços conforme PRD
export const kitsFesta: Product[] = [
  {
    id: "kit-festa-1",
    title: "Kit 1",
    description: "1 torta laço (10 pessoas), 1 cento salgado, 1 refri 2L",
    price: "R$ 125",
    image: cakeImage,
    category: "Kits de Festa",
    whatsappMessage: "Olá! Gostaria de encomendar o Kit 1 de festa (R$ 125) - 1 torta laço para 10 pessoas, 1 cento de salgados e 1 refrigerante 2L. Podem me passar mais informações?"
  },
  {
    id: "kit-festa-2", 
    title: "Kit 2",
    description: "1 torta laço (20 pessoas), 2 centos salgados, 2 refri 2L",
    price: "R$ 210",
    image: cakeImage,
    category: "Kits de Festa",
    whatsappMessage: "Olá! Gostaria de encomendar o Kit 2 de festa (R$ 210) - 1 torta laço para 20 pessoas, 2 centos de salgados e 2 refrigerantes 2L. Podem me ajudar?"
  },
  {
    id: "kit-festa-3",
    title: "Kit 3",
    description: "1 torta laço (20 pessoas), 2 centos salgados, 2 refri 2L, 50 docinhos",
    price: "R$ 260", 
    image: cakeImage,
    category: "Kits de Festa",
    whatsappMessage: "Olá! Interesse no Kit 3 de festa (R$ 260) - 1 torta laço para 20 pessoas, 2 centos de salgados, 2 refri 2L e 50 docinhos. Para quando precisaria?"
  },
  {
    id: "kit-festa-4",
    title: "Kit 4",
    description: "1 torta laço (30 pessoas), 3 centos salgados, 3 refri 2L, 50 docinhos",
    price: "R$ 350",
    image: cakeImage,
    category: "Kits de Festa",
    whatsappMessage: "Olá! Quero fazer o pedido do Kit 4 de festa (R$ 350) - 1 torta laço para 30 pessoas, 3 centos de salgados, 3 refri 2L e 50 docinhos. Qual o prazo de entrega?"
  },
  {
    id: "kit-festa-5",
    title: "Kit 5", 
    description: "1 torta laço (30 pessoas), 3 centos salgados, 3 refri 2L, 100 docinhos",
    price: "R$ 405",
    image: cakeImage,
    category: "Kits de Festa",
    whatsappMessage: "Olá! Gostaria de pedir o Kit 5 de festa completo (R$ 405) - 1 torta laço para 30 pessoas, 3 centos de salgados, 3 refri 2L e 100 docinhos. Podem me dar mais detalhes?"
  }
];

// 🎂 Kits Chantininho - Preços conforme PRD
export const kitsChantininho: Product[] = [
  {
    id: "kit-chantininho-1",
    title: "Kit Chantininho 1",
    description: "Chantininho (15 pessoas), 1 cento salgados, 50 docinhos",
    price: "R$ 275",
    image: chantillyImage,
    category: "Kits Chantininho",
    whatsappMessage: "Olá! Tenho interesse no Kit Chantininho 1 (R$ 275) - bolo chantininho para 15 pessoas, 1 cento de salgados e 50 docinhos. Está disponível?"
  },
  {
    id: "kit-chantininho-2", 
    title: "Kit Chantininho 2",
    description: "Chantininho (25 pessoas), 2 centos salgados, 100 docinhos", 
    price: "R$ 399",
    image: chantillyImage,
    category: "Kits Chantininho",
    whatsappMessage: "Olá! Quero encomendar o Kit Chantininho 2 (R$ 399) - bolo chantininho para 25 pessoas, 2 centos de salgados e 100 docinhos. Como faço o pedido?"
  },
  {
    id: "kit-chantininho-3",
    title: "Kit Chantininho 3",
    description: "Chantininho (35 pessoas), 3 centos salgados, 100 docinhos",
    price: "R$ 489",
    image: chantillyImage,
    category: "Kits Chantininho",
    whatsappMessage: "Olá! Gostaria de fazer o pedido do Kit Chantininho 3 (R$ 489) - bolo chantininho para 35 pessoas, 3 centos de salgados e 100 docinhos. Qual o prazo?"
  }
];

// 🍰 Tortas e Bolos - Preços conforme PRD
export const tortasBolos: Product[] = [
  {
    id: "bolo-amanteigado",
    title: "Bolo Amanteigado",
    description: "Bolo tradicional amanteigado, receita da família",
    price: "R$ 20",
    image: traditionalImage,
    category: "Tortas e Bolos",
    whatsappMessage: "Olá! Gostaria de pedir um Bolo Amanteigado (R$ 20). É possível encomendar para hoje/amanhã?"
  },
  {
    id: "bolo-formigueiro",
    title: "Bolo Formigueiro", 
    description: "Clássico bolo formigueiro com granulado",
    price: "R$ 20",
    image: traditionalImage,
    category: "Tortas e Bolos",
    whatsappMessage: "Olá! Quero pedir um Bolo Formigueiro (R$ 20). Vocês fazem para quando?"
  },
  {
    id: "bolo-mesclado",
    title: "Bolo Mesclado",
    description: "Delicioso bolo mesclado de chocolate e baunilha",
    price: "R$ 20",
    image: traditionalImage,
    category: "Tortas e Bolos",
    whatsappMessage: "Olá! Tenho interesse no Bolo Mesclado (R$ 20). Como posso fazer a encomenda?"
  },
  {
    id: "bolo-mole",
    title: "Bolo Mole Tradicional",
    description: "Bolo mole tradicional, úmido e saboroso",
    price: "R$ 26", 
    image: traditionalImage,
    category: "Tortas e Bolos",
    whatsappMessage: "Olá! Gostaria de encomendar um Bolo Mole Tradicional (R$ 26). Está disponível?"
  }
];

// 🍫 Brownies - Preços conforme PRD
export const brownies: Product[] = [
  {
    id: "brownie",
    title: "Brownie",
    description: "Brownie artesanal de chocolate, rico e cremoso",
    price: "R$ 5",
    image: brownieImage,
    category: "Brownies",
    whatsappMessage: "Olá! Quero pedir brownies (R$ 5 cada). Quantos vocês têm disponíveis hoje?"
  }
];

// 🥟 Salgados - Preços conforme PRD
export const salgados: Product[] = [
  {
    id: "salgados-cento",
    title: "Salgados (1 cento)",
    description: "Coxinha, risole, pastel e outros salgados fresquinhos",
    price: "Conforme kits",
    image: salgadosImage,
    category: "Salgados",
    whatsappMessage: "Olá! Gostaria de saber o preço dos salgados avulsos (1 cento). Quais tipos vocês têm disponíveis?"
  }
];

// Dados da empresa
export const companyInfo = {
  name: "Bolos da Jô",
  phone: "5511999999999", // Todo: replace with real number
  address: "Rua das Flores, 123 - Centro, São Paulo - SP", // Todo: replace with real address
  hours: {
    weekdays: "8h às 18h",
    saturday: "8h às 15h", 
    sunday: "Fechado"
  },
  instagram: "@bolosdajo", // Todo: replace with real instagram
  description: "Bolos caseiros, kits de festa, tortas, brownies e salgados artesanais há mais de 10 anos."
};