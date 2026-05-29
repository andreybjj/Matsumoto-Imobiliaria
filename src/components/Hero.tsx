import { heroImage } from "../data/siteData";
import { Header } from "./Header";
import { Icon } from "./Icon";
import { SearchPanel } from "./SearchPanel";
import type { SearchFilters } from "../types/site";
import { whatsappUrl } from "../utils/format";

interface HeroProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onSearch: () => void;
}

export function Hero({ filters, onFiltersChange, onSearch }: HeroProps) {
  return (
    <section id="inicio" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-shade" aria-hidden="true" />
      <Header />
      <div className="hero-content">
        <p className="eyebrow">Encontre seu novo lar</p>
        <h1>
          Os melhores imoveis <br />
          de <span>Bonito/MS</span> estao aqui
        </h1>
        <p className="hero-copy">
          Temos as melhores opcoes para compra, venda e locacao. Encontre o imovel perfeito para voce e sua familia.
        </p>
        <div className="hero-actions">
          <a className="gold-button" href="#imoveis">
            Ver imoveis
            <Icon name="chevron" size={16} />
          </a>
          <a className="outline-button" href={whatsappUrl("Ola, quero falar com um corretor.")}>
            Falar com um corretor
            <Icon name="whatsapp" size={16} />
          </a>
        </div>
      </div>
      <SearchPanel filters={filters} onFiltersChange={onFiltersChange} onSearch={onSearch} />
    </section>
  );
}
