---
name: levva-design
description: Use esta skill para criar telas, sites, protótipos, peças de marketing, sinalização de estúdio e código de interface com a identidade da Levva (antes MONI e LiveHub), o estúdio de conteúdo pós-compra dentro de shoppings. Traz logo, tokens, tipografia, voz, botões e regras de uso.
user-invocable: true
---

# Levva: skill de design

Leia `README.md` nesta pasta antes de criar qualquer coisa. Ele é o livro de marca em texto. O brand book visual está em `brandbook.html`.

## Arquivos

- `tokens.css`: variáveis CSS prontas, tema claro em `:root` e `[data-theme="light"]`, escuro em `[data-theme="dark"]`. Importe ou copie para o `<style>` da peça.
- `tokens.json`: os mesmos tokens como dados (cores, tipografia, espaço, raios, sombras, bordas, durações).
- `logos/`: 12 SVGs com cores fixas. Use sempre o arquivo; nunca redesenhe a logo nem a escreva em texto.
- `animacao/`: SVG animado, vídeos MP4 e a página HTML da animação da logo.

## Regras que não mudam

1. Fundo `paper` (#FBF3EA), texto `ink` (#1A1210), uma única cor forte: `coral` (#FF4433). Nunca branco ou preto puros.
2. Texto sobre coral é tinta (`on-coral`). Coral como texto só a partir de 24 px; texto coral pequeno usa `coral-ink` (#C42A19).
3. Fontes do Google Fonts: Bricolage Grotesque 700 a 800 para títulos curtos e números, Inter para a interface, JetBrains Mono para tempo de gravação e IDs.
   `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap">`
4. A logo é o visor (dois cantos com ponto coral) mais "levva." com "a" de um andar e ponto final coral. Área de proteção igual ao diâmetro do ponto; mínimo de 96 px para a assinatura e 24 px para o símbolo.
5. Botões no estilo Apple: preenchimento chapado, sem borda, sem sombra, cápsula, Inter 600 com `letter-spacing: -.01em`.
   - Principal: `background: var(--coral); color: var(--on-coral)`, altura 50 / 40 / 30 px.
   - Secundário: tinta a 8% (`rgba(26, 18, 16, .08)`) com texto tinta. Sobre fundo escuro: papel a 14%.
   - Hover `filter: brightness(.95)`; pressionado `brightness(.86)` e `scale(.98)`; 120 ms com `cubic-bezier(.2, .8, .2, 1)`.
6. Cartões e campos: borda de 2 px em tinta, cantos `radius-lg` (16 px). Sombra chapada (`shadow-flat-md`) só no cartão que precisa se destacar.
7. Elementos da marca: moldura de visor (cantos inferior esquerdo e superior direito), selo REC (pílula tinta, ponto coral, tempo em mono) e padrão de visores. Sem gradientes, sem vidro fosco, sem emoji como ícone.
8. Voz: "você", frases curtas, número antes do adjetivo, caixa de frase. CAIXA ALTA só em selos (AO VIVO, GRAVANDO, EM ANÁLISE, APROVADO). Não prometa vendas garantidas nem pesquisa representativa.
9. Português brasileiro e sem o caractere de travessão longo.

## Como trabalhar

- Peça visual descartável (mock, slide, post, sinalização): gere um HTML estático com `tokens.css` e os SVGs de `logos/`, e mostre ao usuário.
- Código de produção: copie `tokens.css` para o projeto, use os nomes de token em vez de valores soltos e siga as regras de botão e cartão acima.
- Animação de logo: use `animacao/levva-lockup-animated.svg` ou os MP4. Toca uma vez; com "reduzir movimento", logo parada.
- Se o pedido vier sem detalhes, pergunte para quem é a peça (consumidor, lojista ou shopping) e onde ela vai aparecer, e então atue como designer da marca.

O design system histórico da MONI, com componentes React e templates, continua em `../Design System/`. Use como referência de estrutura, mas troque nome, logo e botões pelas regras desta skill.
