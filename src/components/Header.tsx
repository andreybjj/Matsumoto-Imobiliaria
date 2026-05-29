import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { whatsappUrl } from "../utils/format";

const links = ["Inicio", "Comprar", "Alugar", "Imoveis", "Quem Somos", "Servicos", "Contato"];

export function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="nav" aria-label="Navegacao principal">
        {links.map((link) => (
          <a key={link} className={link === "Inicio" ? "active" : ""} href={`#${link.toLowerCase().replace(" ", "-")}`}>
            {link}
          </a>
        ))}
      </nav>
      <a className="outline-button compact" href={whatsappUrl("Ola, quero falar com a Matsumoto Imobiliaria.")}>
        Falar no WhatsApp
        <Icon name="whatsapp" size={16} />
      </a>
    </header>
  );
}
