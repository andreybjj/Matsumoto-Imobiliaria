export type ListingMode = "Comprar" | "Alugar";

export type PropertyType =
  | "Casa"
  | "Terreno"
  | "Chacara"
  | "Apartamento"
  | "Comercial"
  | "Barracao";

export interface Property {
  id: number;
  title: string;
  neighborhood: string;
  type: PropertyType;
  mode: ListingMode;
  price: number;
  suites: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  exclusive?: boolean;
}

export interface Category {
  label: string;
  count: number;
  icon: string;
  type: PropertyType;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export interface Agent {
  name: string;
  creci: string;
  image: string;
}

export interface SearchFilters {
  mode: ListingMode;
  type: "Todos os tipos" | PropertyType;
  city: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  onlyExclusive: boolean;
}
