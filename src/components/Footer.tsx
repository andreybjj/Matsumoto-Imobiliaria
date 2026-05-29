import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { whatsappUrl } from "../utils/format";

export function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="footer-grid">
        <div><Logo /><p>Excelencia em bons negocios imobiliarios em Bonito/MS e regiao. Realizando sonhos ha mais de 12 anos.</p><div className="socials" aria-label="Redes sociais"><a href="/" aria-label="Instagram">ig</a><a href="/" aria-label="Facebook">f</a><a href="/" aria-label="YouTube">yt</a><a href="/" aria-label="Site">web</a></div></div>
        <div><h3>Navegacao</h3><a href="#inicio">Inicio</a><a href="#comprar">Comprar</a><a href="#alugar">Alugar</a><a href="#imoveis">Imoveis</a><a href="#quem-somos">Quem Somos</a><a href="#contato">Contato</a></div>
        <div><h3>Servicos</h3><a href="#servicos">Avaliacao de Imoveis</a><a href="#servicos">Imovel Pra Voce</a><a href="#servicos">Anuncie seu Imovel</a><a href="#servicos">Financiamento</a><a href="#servicos">Regularizacao</a></div>
        <div className="contact-list"><h3>Fale conosco</h3><a href="tel:+5567999999999"><Icon name="phone" size={20} />(67) 99999-9999</a><a href={whatsappUrl("Ola, quero atendimento.")}><Icon name="whatsapp" size={20} />(67) 99999-9999</a><a href="mailto:contato@imobiliaria.com.br"><Icon name="mail" size={20} />contato@imobiliaria.com.br</a><span><Icon name="pin" size={20} />Rua das Flores, 123 Centro - Bonito/MS</span></div>
      </div>
      <div className="footer-bottom"><span>(c) 2024 Imobiliaria. Todos os direitos reservados.</span><span>Desenvolvido com carinho por Agencia Especializada</span></div>
      <a className="floating-whatsapp" href={whatsappUrl("Ola, vim pelo site.")} aria-label="Abrir WhatsApp"><Icon name="whatsapp" size={30} /></a>
      <button className="scroll-top" type="button" aria-label="Voltar ao topo" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>^</button>
    </footer>
  );
}
