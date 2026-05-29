import type { Property } from "../types/site";
import { formatCurrency } from "../utils/format";
import { Icon } from "./Icon";

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export function PropertyCard({ property, isFavorite, onToggleFavorite }: PropertyCardProps) {
  return (
    <article className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        {property.exclusive && <span className="badge">Exclusivo</span>}
        <button className={isFavorite ? "favorite active" : "favorite"} type="button" aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"} onClick={() => onToggleFavorite(property.id)}>
          <Icon name="heart" size={18} />
        </button>
      </div>
      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.neighborhood}</p>
        <div className="property-features" aria-label="Caracteristicas">
          <span><Icon name="bed" size={15} />{property.suites} suites</span>
          <span><Icon name="bath" size={15} />{property.bathrooms} banheiros</span>
          <span><Icon name="area" size={15} />{property.area}m2</span>
        </div>
        <strong className="price">{formatCurrency(property.price)}</strong>
      </div>
    </article>
  );
}
