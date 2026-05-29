import { agents } from "../data/siteData";
import { Icon } from "./Icon";
import { whatsappUrl } from "../utils/format";

export function TeamSection() {
  return (
    <section className="section team-section">
      <div className="section-aside">
        <p className="eyebrow">Nossa equipe</p>
        <h2>Corretores Especialistas</h2>
        <p>Profissionais qualificados prontos para te ajudar a encontrar o imovel ideal.</p>
        <a className="outline-button dark" href={whatsappUrl("Ola, quero falar com a equipe de corretores.")}>Falar com a equipe<Icon name="whatsapp" size={16} /></a>
      </div>
      <div className="agents-row">
        {agents.map((agent) => (
          <article className="agent-card" key={agent.name}>
            <img src={agent.image} alt={agent.name} />
            <div><h3>{agent.name}</h3><span>{agent.creci}</span></div>
          </article>
        ))}
        <button className="round-next" type="button" aria-label="Avancar equipe"><Icon name="chevron" size={18} /></button>
      </div>
    </section>
  );
}
