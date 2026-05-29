import { categories } from "../data/siteData";
import type { PropertyType } from "../types/site";
import { Icon } from "./Icon";

interface CategoryStripProps {
  activeType: string;
  onSelect: (type: PropertyType) => void;
}

export function CategoryStrip({ activeType, onSelect }: CategoryStripProps) {
  return (
    <section className="category-strip" aria-label="Categorias de imoveis">
      {categories.map((category) => (
        <button key={category.label} className={activeType === category.type ? "category-card selected" : "category-card"} onClick={() => onSelect(category.type)} type="button">
          <Icon name={category.icon} size={34} />
          <strong>{category.label}</strong>
          <span>{category.count} imoveis</span>
        </button>
      ))}
    </section>
  );
}
