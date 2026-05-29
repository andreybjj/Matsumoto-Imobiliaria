# Matsumoto Imobiliaria

Landing page em TypeScript inspirada no mockup fornecido, com componentes separados para evolucao futura.

## Como rodar

```bash
npm install
npm run dev
```

## Compatibilidade com Vercel

O projeto ja inclui `vercel.json` configurado para Vite:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Rewrite SPA: todas as rotas apontam para `index.html`

Para conectar:

1. Importe o repositorio `andreybjj/Matsumoto-Imobiliaria` na Vercel.
2. Selecione o framework `Vite`.
3. Confirme os comandos detectados pelo `vercel.json`.
4. Publique. Cada push na branch `main` gera deploy de producao pela integracao Git.

## Estrutura

- `src/data/siteData.ts`: textos, imoveis, equipe, categorias e depoimentos.
- `src/components`: blocos visuais e funcionais da pagina.
- `src/types`: tipos compartilhados.
- `src/utils`: helpers de formatacao.
