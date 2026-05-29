import { useState } from "react";
import { testimonials } from "../data/siteData";

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials">
      <p className="eyebrow">Depoimentos</p>
      <h2>O que nossos clientes dizem</h2>
      <div className="gold-line" />
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <article className={active === index ? "testimonial active" : "testimonial"} key={item.name}>
            <img src={item.avatar} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <small>{item.role}</small>
              <span className="stars">*****</span>
              <p>{item.text}</p>
            </div>
            <b aria-hidden="true">"</b>
          </article>
        ))}
      </div>
      <div className="dots" aria-label="Selecionar depoimento">
        {testimonials.map((item, index) => (
          <button key={item.name} className={active === index ? "active" : ""} type="button" aria-label={`Ver depoimento de ${item.name}`} onClick={() => setActive(index)} />
        ))}
      </div>
    </section>
  );
}
