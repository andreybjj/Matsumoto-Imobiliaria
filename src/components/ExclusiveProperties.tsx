import type { Property } from "../types/site";
import { Icon } from "./Icon";
import { PropertyCard } from "./PropertyCard";

interface ExclusivePropertiesProps {
  properties: Property[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  onShowAll: () => void;
}

export function ExclusiveProperties({ properties, favorites, onToggleFavorite, onShowAll }: ExclusivePropertiesProps) {
  return (
    <section id="imoveis" className="section exclusive-section">
      <div className="section-aside">
        <p className="eyebrow">Selecao especial</p>
        <h2>Imoveis Exclusivos</h2>
        <p>Uma selecao especial de imoveis com alto padrao e localizacoes privilegiadas em Bonito/MS.</p>
        <button className="outline-button dark" type="button" onClick={onShowAll}>Ver todos exclusivos<Icon name="chevron" size={16} /></button>
      </div>
      <div className="properties-row">
        {properties.slice(0, 3).map((property) => (
          <PropertyCard key={property.id} property={property} isFavorite={favorites.includes(property.id)} onToggleFavorite={onToggleFavorite} />
        ))}
        <button className="round-next" type="button" aria-label="Avancar imoveis"><Icon name="chevron" size={18} /></button>
      </div>
    </section>
  );
}
