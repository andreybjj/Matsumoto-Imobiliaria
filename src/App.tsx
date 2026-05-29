import { useMemo, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { CallToAction } from "./components/CallToAction";
import { CategoryStrip } from "./components/CategoryStrip";
import { ExclusiveProperties } from "./components/ExclusiveProperties";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { TeamSection } from "./components/TeamSection";
import { Testimonials } from "./components/Testimonials";
import { properties } from "./data/siteData";
import type { PropertyType, SearchFilters } from "./types/site";
import { parseMoneyLabel } from "./utils/format";

const initialFilters: SearchFilters = {
  mode: "Comprar",
  type: "Todos os tipos",
  city: "Todas as cidades",
  minPrice: "R$ 0",
  maxPrice: "R$ 10.000.000+",
  bedrooms: "Qualquer",
  onlyExclusive: false,
};

export function App() {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showAllExclusive, setShowAllExclusive] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesMode = property.mode === filters.mode;
      const matchesType = filters.type === "Todos os tipos" || property.type === filters.type;
      const matchesCity =
        filters.city === "Todas as cidades" || property.neighborhood.toLowerCase().includes(filters.city.toLowerCase());
      const matchesExclusive = !filters.onlyExclusive || property.exclusive;
      const minBedrooms = filters.bedrooms === "Qualquer" ? 0 : Number(filters.bedrooms.replace("+", ""));
      const matchesBedrooms = property.bedrooms >= minBedrooms;
      const minPrice = parseMoneyLabel(filters.minPrice);
      const maxPrice = filters.maxPrice.includes("+") ? Number.POSITIVE_INFINITY : parseMoneyLabel(filters.maxPrice);
      const matchesPrice = property.price >= minPrice && property.price <= maxPrice;

      return matchesMode && matchesType && matchesCity && matchesExclusive && matchesBedrooms && matchesPrice;
    });
  }, [filters]);

  const exclusiveProperties = showAllExclusive
    ? properties.filter((property) => property.exclusive)
    : filteredProperties.filter((property) => property.exclusive);

  function toggleFavorite(id: number) {
    setFavorites((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function selectCategory(type: PropertyType) {
    setFilters((current) => ({ ...current, type }));
    document.getElementById("imoveis")?.scrollIntoView({ behavior: "smooth" });
  }

  function runSearch() {
    setShowAllExclusive(false);
    document.getElementById("imoveis")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Hero filters={filters} onFiltersChange={setFilters} onSearch={runSearch} />
      <main>
        <span id="comprar" className="anchor-target" aria-hidden="true" />
        <span id="alugar" className="anchor-target" aria-hidden="true" />
        <CategoryStrip activeType={filters.type} onSelect={selectCategory} />
        <ExclusiveProperties
          properties={exclusiveProperties.length ? exclusiveProperties : properties.filter((property) => property.exclusive)}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onShowAll={() => setShowAllExclusive(true)}
        />
        <StatsBar />
        <AboutSection />
        <Testimonials />
        <span id="servicos" className="anchor-target" aria-hidden="true" />
        <TeamSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
