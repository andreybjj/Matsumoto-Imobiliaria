export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/5567999999999?text=${encodeURIComponent(message)}`;
}

export function parseMoneyLabel(label: string): number {
  const digits = label.replace(/\D/g, "");
  return digits ? Number(digits) : 0;
}
