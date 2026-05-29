import type { ListingMode, PropertyType, SearchFilters } from "../types/site";
import { Icon } from "./Icon";

const types: Array<"Todos os tipos" | PropertyType> = [
  "Todos os tipos",
  "Casa",
  "Terreno",
  "Chacara",
  "Apartamento",
  "Comercial",
  "Barracao",
];

interface SearchPanelProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onSearch: () => void;
}

export function SearchPanel({ filters, onFiltersChange, onSearch }: SearchPanelProps) {
  const update = <K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <form className="search-panel" onSubmit={(event) => { event.preventDefault(); onSearch(); }}>
      <div className="tabs" role="tablist" aria-label="Tipo de negocio">
        {(["Comprar", "Alugar"] as ListingMode[]).map((mode) => (
          <button key={mode} type="button" className={filters.mode === mode ? "selected" : ""} onClick={() => update("mode", mode)}>
            {mode}
          </button>
        ))}
      </div>
      <div className="field-grid">
        <label>Tipo de imovel<select value={filters.type} onChange={(event) => update("type", event.target.value as SearchFilters["type"])}>{types.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label>Cidade / Bairro<select value={filters.city} onChange={(event) => update("city", event.target.value)}><option>Todas as cidades</option><option>Centro</option><option>Vila Donaria</option><option>Taruma Hipica Park</option><option>Aguas da Serra</option></select></label>
        <label>Valor minimo<select value={filters.minPrice} onChange={(event) => update("minPrice", event.target.value)}><option>R$ 0</option><option>R$ 500.000</option><option>R$ 1.000.000</option><option>R$ 2.000.000</option></select></label>
        <label>Valor maximo<select value={filters.maxPrice} onChange={(event) => update("maxPrice", event.target.value)}><option>R$ 10.000.000+</option><option>R$ 800.000</option><option>R$ 2.000.000</option><option>R$ 5.000.000</option></select></label>
        <button className="gold-button search-button" type="submit">Buscar imoveis<Icon name="search" size={16} /></button>
      </div>
      <details className="advanced">
        <summary>Busca avancada</summary>
        <div className="advanced-grid">
          <label>Quartos<select value={filters.bedrooms} onChange={(event) => update("bedrooms", event.target.value)}><option>Qualquer</option><option>2+</option><option>3+</option><option>4+</option></select></label>
          <label className="checkbox-row"><input type="checkbox" checked={filters.onlyExclusive} onChange={(event) => update("onlyExclusive", event.target.checked)} />Apenas exclusivos</label>
        </div>
      </details>
    </form>
  );
}
