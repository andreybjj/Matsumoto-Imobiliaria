import type { Agent, Category, Property, Testimonial } from "../types/site";

export const heroImage =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=92";

export const aboutImage =
  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1600&q=92";

export const categories: Category[] = [
  { label: "Casas", count: 132, icon: "house", type: "Casa" },
  { label: "Terrenos", count: 85, icon: "trees", type: "Terreno" },
  { label: "Chacaras", count: 47, icon: "sprout", type: "Chacara" },
  { label: "Apartamentos", count: 38, icon: "building", type: "Apartamento" },
  { label: "Comerciais", count: 26, icon: "store", type: "Comercial" },
  { label: "Barracoes", count: 19, icon: "warehouse", type: "Barracao" },
];

export const properties: Property[] = [
  {
    id: 1,
    title: "Casa de Alto Padrao",
    neighborhood: "Taruma Hipica Park",
    type: "Casa",
    mode: "Comprar",
    price: 2890000,
    suites: 4,
    bedrooms: 6,
    bathrooms: 6,
    area: 450,
    exclusive: true,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 2,
    title: "Mansao Contemporanea",
    neighborhood: "Cond. Aguas da Serra",
    type: "Casa",
    mode: "Comprar",
    price: 4200000,
    suites: 5,
    bedrooms: 7,
    bathrooms: 7,
    area: 650,
    exclusive: true,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 3,
    title: "Casa Moderna",
    neighborhood: "Vila Donaria",
    type: "Casa",
    mode: "Comprar",
    price: 1950000,
    suites: 3,
    bedrooms: 4,
    bathrooms: 4,
    area: 330,
    exclusive: true,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 4,
    title: "Apartamento Central",
    neighborhood: "Centro",
    type: "Apartamento",
    mode: "Alugar",
    price: 6500,
    suites: 1,
    bedrooms: 3,
    bathrooms: 2,
    area: 118,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 5,
    title: "Terreno Nobre",
    neighborhood: "Portal do Rio",
    type: "Terreno",
    mode: "Comprar",
    price: 520000,
    suites: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: 720,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 6,
    title: "Ponto Comercial",
    neighborhood: "Rua Principal",
    type: "Comercial",
    mode: "Alugar",
    price: 12000,
    suites: 0,
    bedrooms: 0,
    bathrooms: 3,
    area: 260,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=90",
  },
];

export const stats = [
  { value: "+1.200", label: "Imoveis vendidos", icon: "home" },
  { value: "+850", label: "Clientes satisfeitos", icon: "users" },
  { value: "15+", label: "Bairros atendidos", icon: "pin" },
  { value: "12 Anos", label: "De experiencia", icon: "award" },
  { value: "100%", label: "Seguranca nos negocios", icon: "shield" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Juliana Ribeiro",
    role: "Compradora",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=220&q=90",
    text: "Atendimento impecavel do inicio ao fim. Encontraram exatamente o que eu procurava. Super recomendo!",
  },
  {
    name: "Carlos Mendes",
    role: "Vendedor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&q=90",
    text: "Profissionalismo e dedicacao que fizeram toda a diferenca na venda do meu imovel. Equipe nota 10!",
  },
  {
    name: "Mariana Souza",
    role: "Locataria",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=220&q=90",
    text: "Aluguei meu imovel com muita rapidez. Processo facil, seguro e transparente. Excelente experiencia!",
  },
];

export const agents: Agent[] = [
  {
    name: "Marco Aurelio",
    creci: "CRECI 00000",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=520&q=90",
  },
  {
    name: "Juliana Ferreira",
    creci: "CRECI 00000",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=520&q=90",
  },
  {
    name: "Rafael Lima",
    creci: "CRECI 00000",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=520&q=90",
  },
  {
    name: "Camila Prado",
    creci: "CRECI 00000",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=520&q=90",
  },
];
