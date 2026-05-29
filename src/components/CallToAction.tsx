import { Icon } from "./Icon";
import { whatsappUrl } from "../utils/format";

export function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-icon"><Icon name="file" size={44} /></div>
      <div>
        <h2>Nao encontrou o que procura?</h2>
        <p>Fale com um especialista e encontre o imovel ideal para voce!</p>
      </div>
      <a className="gold-button" href={whatsappUrl("Ola, nao encontrei o que procuro e quero ajuda.")}>Fale agora no WhatsApp<Icon name="whatsapp" size={16} /></a>
    </section>
  );
}
