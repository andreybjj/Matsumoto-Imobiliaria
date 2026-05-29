import type { ReactNode } from "react";

interface IconProps {
  name: string;
  size?: number;
}

const paths: Record<string, ReactNode> = {
  house: <path d="M4 11.5 12 5l8 6.5V21h-5v-6H9v6H4z" />,
  trees: <path d="M8 19v-5M16 19v-5M5 14h6L8 4zm8 0h6l-3-10z" />,
  sprout: <path d="M12 21v-8M12 13C7 13 5 9 5 5c5 0 7 4 7 8Zm0 0c5 0 7-4 7-8-5 0-7 4-7 8Z" />,
  building: <path d="M5 21V5h10v16M15 9h4v12M8 8h4M8 12h4M8 16h4" />,
  store: <path d="M4 10h16l-1.5-5h-13zM6 10v11h12V10M9 21v-6h6v6" />,
  warehouse: <path d="M3 21V9l9-5 9 5v12M7 21v-8h10v8M7 13h10" />,
  home: <path d="M4 11.5 12 5l8 6.5V21h-5v-6H9v6H4z" />,
  users: <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
  pin: <path d="M12 21s7-5.1 7-12A7 7 0 1 0 5 9c0 6.9 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  award: <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM9 14l-1 7 4-2 4 2-1-7" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  search: <path d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />,
  whatsapp: <path d="M5 19 6.3 15.2A8 8 0 1 1 9 17.7zM9.2 8.8c.2 3 2.6 5.2 5.6 5.8l1.2-1.4-2-.9-.8.8c-1.2-.5-2.2-1.4-2.8-2.6l.8-.8-.9-2z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  heart: <path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.6 4.6 0 0 1 12 6.9a4.6 4.6 0 0 1 8.8 1.9Z" />,
  bed: <path d="M4 11V5h6a3 3 0 0 1 3 3v3M4 11h16a2 2 0 0 1 2 2v5M4 18v-7M22 18H4" />,
  bath: <path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM7 12V6a3 3 0 0 1 5.4-1.8M15 6h-4" />,
  area: <path d="M4 4h6M4 4v6M20 20h-6M20 20v-6M14 4h6v6M10 20H4v-6" />,
  file: <path d="M6 2h9l5 5v15H6zM14 2v6h6M9 13h6M9 17h6" />,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.8L7.6 9.6a16 16 0 0 0 6.8 6.8l1.3-1.3a2 2 0 0 1 1.8-.6l2.8.4a2 2 0 0 1 1.7 2Z" />,
  mail: <path d="M4 4h16v16H4zM4 7l8 6 8-6" />,
};

export function Icon({ name, size = 22 }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size}>
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {paths[name] ?? paths.house}
      </g>
    </svg>
  );
}
