function LogoMark() {
  return (
    <svg className="logo-mark-svg" viewBox="0 0 174 160" aria-hidden="true">
      <circle cx="87" cy="80" r="80" fill="#fff" />
      <path d="M14 66 87 4l73 62h-32L87 32 46 66H14Z" fill="#0a0d11" />
      <path d="M45 68h28l14 18 14-18h28v82h-25V96l-17 22-17-22v54H45V68Z" fill="#0a0d11" />
      <path d="M12 70h31v80A80 80 0 0 1 12 70Zm119 0h31a80 80 0 0 1-31 80V70Z" fill="#fff" />
    </svg>
  );
}

export function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Matsumoto Imobiliaria">
      <span className="logo-mark">
        <LogoMark />
      </span>
      <span>
        <strong>Imobiliaria</strong>
        <small>Excelencia em bons negocios</small>
      </span>
    </a>
  );
}
