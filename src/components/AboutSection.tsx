import { aboutImage } from "../data/siteData";
import { Icon } from "./Icon";
import { LogoMark } from "./Logo";

export function AboutSection() {
  return (
    <section id="quem-somos" className="about-section">
      <div className="about-photo">
        <img src={aboutImage} alt="Sala de reunioes da Matsumoto Imobiliaria" />
        <div className="photo-logo">
          <span className="logo-mark large">
            <LogoMark />
          </span>
          <small>Excelencia em bons negocios</small>
        </div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">Quem somos</p>
        <h2>Excelencia em bons negocios em Bonito/MS</h2>
        <p>
          Somos uma imobiliaria local especializada em oferecer as melhores oportunidades para quem deseja comprar,
          vender ou alugar imoveis em Bonito e regiao.
        </p>
        <p>
          Com uma equipe experiente e atendimento personalizado, garantimos seguranca, transparencia e as melhores
          condicoes para realizar o seu sonho.
        </p>
        <div className="about-benefits">
          <span>
            <Icon name="users" />
            Atendimento Personalizado
          </span>
          <span>
            <Icon name="file" />
            Assessoria Completa
          </span>
          <span>
            <Icon name="shield" />
            Seguranca em Todo Processo
          </span>
        </div>
        <a className="outline-button dark" href="#contato">
          Conheca nossa historia
          <Icon name="chevron" size={16} />
        </a>
      </div>
    </section>
  );
}
