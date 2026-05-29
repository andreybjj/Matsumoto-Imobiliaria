import { stats } from "../data/siteData";
import { Icon } from "./Icon";

export function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Numeros da imobiliaria">
      {stats.map((item) => (
        <div className="stat-item" key={item.label}>
          <Icon name={item.icon} size={32} />
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
