# Especificação de Design e Identidade Visual

> Nota: Com Astro, o CSS permanece visualmente idêntico. A única mudança é a **arquitetura dos estilos**:
> - Design tokens (`:root`) e reset → `src/styles/global.css`
> - Estilos de cada seção → `<style>` scoped no respectivo componente `.astro`
> - Astro scoped styles são prefixados automaticamente (`data-astro-*`), eliminando conflitos
> - Não há mudança nos valores de design, breakpoints, ou comportamento visual

## Sistema de Design (Design Tokens)

### Cores

```css
/* Backgrounds */
--bg-primary:   hsl(340, 64%, 53%);  /* Rosa escuro */
--bg-secondary: rgb(224, 133, 197);  /* Rosa claro */
--bg-card:      rgba(230, 3, 14, 0.73);  /* Vermelho escuro */

/* Marca */
--primary:       hsl(313, 69%, 48%);  /* Roxo escuro */
--primary-hover: hsl(320, 85%, 64%);  /* Rosa choque */
--secondary:     hsl(313, 67%, 56%);  /* Roxo turquesa */
--accent:        rgb(240, 114, 162);  /* Rosa claro */

/* Texto */
--text-primary:   hsl(0, 0%, 0%);  /* Preto */
--text-secondary: hsl(313, 100%, 88%);  /* Rosa claro */
--text-muted:     rgb(247, 120, 204);  /* Rosa claro */

/* Bordas */
--border: rgba(255, 255, 255, 0.12);

/* Botões */
--btn-primary-bg:   rgb(218, 131, 189);  /* Rosa */
--btn-primary-text: rgb(252, 164, 215);
--btn-secondary-bg:   rgb(155, 9, 9);  /* Vermelho escuro */
--btn-secondary-text: rgb(156, 11, 11);  /* Vermelho escuro */

/* Estados */
--success: rgb(107, 22, 50);
--warning: rgb(247, 7, 107);
--danger:  rgb(192, 17, 154);

/* Utilitários */
--shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
--radius: 24px;
--radius-sm: 16px;
--max: 1180px;
```

### Fundo

- Gradiente linear vertical: `--bg-primary` (0%) → `--bg-secondary` (50%) → `--bg-primary` (100%)
- Cards com gradiente sutil: `rgba(15, 16, 41, 0.06)` → `hsla(221, 56%, 10%, 0.00)`

### Tipografia

- **Font-family**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Headings**: letter-spacing negativo, sem serifa
- **Hero title**: `clamp(2.4rem, 8vw, 5.5rem)`, line-height `0.95`, letter-spacing `-0.05em`
- **Section titles**: `clamp(1.5rem, 4vw, 2.4rem)`, line-height `1.05`, letter-spacing `-0.04em`
- **Corpo**: `1rem` (padrão), `line-height: 1.6`

### Botões

- **Primário**: fundo gradiente azul (`#1088FF` → `#0070E0`), borda `999px`, padding `.95rem 1.2rem`, sombra azul
- **Secundário**: fundo ciano (`#72D9F0`), texto roxo escuro, borda `1px solid var(--border)`
- **Hover**: `translateY(-2px)`, sombra intensificada, transição `180ms`

## Layout

### Container

```css
width: min(calc(100% - 2rem), var(--max));
margin-inline: auto;
```

## Hero

- Grid de 2 colunas em desktop (`1.15fr 0.85fr`)
- 1 coluna em mobile
- Imagem com overlay gradiente e filtro `saturate(0.95) contrast(1.08) brightness(0.95)`

## Seções

- Padding vertical: `1.5rem` (mobile), `2rem` (720px+), `2.4rem` (1024px+)
- Cards com padding: `1.5rem` / `2rem` / `2.2rem`

## Grids Responsivos

| Componente | Mobile | 720px+ |
|---|---|---|
| Hero | 1 coluna | 2 colunas |
| Realizadores | 1 coluna | 3 colunas |
| Galeria | 1 coluna | 3 colunas |
| Ficha Técnica | 1 coluna | 2 colunas |
| Footer | 1 coluna | 3 colunas (1.5fr 1fr 1fr) |

## Breakpoints

- `600px`: ajuste de padding em tabelas
- `720px`: grids de 2-3 colunas
- `768px`: footer grid
- `1024px`: hero maior, padding expandido

## Header (Sticky)

---- `position: sticky; top: 0; z-index: 50`
- `backdrop-filter: blur(18px)` com fundo semi-transparente
- Borda inferior sutil
- Marca: bolinha gradiente (roxo → azul) + texto "Sonoplastia 2026"
- Link externo "Rede Daora" alinhado à direita

## Footer

- Fundo `rgba(45, 13, 82, 0.4)` com `backdrop-filter: blur(12px)`
- Grid de 3 colunas (768px+)
- Card de desenvolvedor 3D
- Botão "Voltar ao topo"
- Links para Termos e Privacidade

## Modais

### Player de Áudio
- Overlay escuro com `backdrop-filter: blur(12px)`
- Card central: largura `480px` max, gradiente roxo, borda sutil
- Arte do álbum: `80x80px`, borda ciano com glow
- Botão de fechar vermelho no hover
- Transições: opacidade `0.3s`, transform `scale`

### Lightbox
- Overlay escuro `rgba(15, 5, 27, 0.96)` com `backdrop-filter: blur(8px)`
- Imagem: `max-height: 70vh`, borda arredondada, sombra
- Botões de navegação: círculos semi-transparentes
- Mobile: navegação na parte inferior
- Transições: opacidade `0.3s`, transform `scale`

## Galeria

- Grid de 3 colunas (720px+)
- Aspect ratio `4/3`
- Hover: escala `1.04`, remove grayscale
- Filtro padrão: `grayscale(15%) contrast(1.05)`

## Cards de Realizadores

- Centralizados, texto alinhado ao centro
- Fotos: `110x110px`, `border-radius: 50%`, borda roxa com glow
- Hover: `translateY(-4px)`, borda roxa semi-transparente
- Transição: `200ms`

## Player de Áudio Customizado

### Progress Bar
- Altura: `6px`, border-radius: `999px`
- Thumb: `14x14px`, ciano com glow
- Background gradiente dinâmico via JS

### Volume Slider
- Largura: `80px`, altura: `4px`
- Thumb: `10x10px`

### Play Button
- `54x54px`, gradiente azul, sombra, `scale(1.08)` no hover

### Letra
- Expansão: `max-height` animada (`0` → `220px`)
- `mask-image` linear gradient para fade nas bordas
- Scroll customizado (`4px`, ciano semi-transparente)
