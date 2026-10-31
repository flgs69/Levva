# Levva

**Quem compra, conta.**

A Levva instala estúdios compactos dentro de shoppings e transforma compras reais em vídeos prontos para as lojas usarem, e cada gravação em aprendizado sobre como os clientes enxergam os produtos. É o nome atual do projeto que antes se chamou LiveHub e MONI. Este sistema herda a base visual do design system MONI e troca o nome, o símbolo e a animação.

Brand Guide completo (17 capítulos, da estratégia à governança): `brand-guide.html` nesta pasta, publicado em https://claude.ai/artifact/PWT5gnq7ianwrybqev57SJ. Brand book visual resumido: `brandbook.html`, publicado em https://claude.ai/artifact/KgTwNiUxqhd6HtEUdrATyw. Design system no Claude Design: https://claude.ai/artifact/RLSjCpm9DYKYEz2cofLRq1

## O que a Levva faz

1. O cliente compra numa loja participante e recebe o convite.
2. Entende formato, incentivo e uso de imagem, e só então autoriza.
3. Grava 30 segundos no estúdio: o produto em uso ou por que comprou.
4. A loja recebe o vídeo final aprovado e um relatório do que o público disse.

Quem paga é a loja ou a marca. O consumidor participa em troca de um incentivo. O shopping ganha uma experiência que liga o espaço físico ao digital.

**Posicionamento:** a infraestrutura de conteúdo e inteligência do varejo físico, instalada onde a compra acontece.

**Promessa para a loja:** transformamos clientes reais em conteúdo pronto para a sua marca, e cada gravação em aprendizado sobre como o seu produto é percebido.

**Não prometemos:** aumento garantido de vendas, pesquisa estatisticamente representativa, automação completa de publicação, volume antes de medir capacidade, uso de dados fora do consentimento.

## Voz

Direta, real, enérgica, responsável. "Você" para o consumidor e para o lojista.

- Consumidor: "Tem 30 segundos? Mostra sua compra e ganha R$ 5 de volta."
- Lojista: "Veja quais vídeos trouxeram mais gente para a loja esta semana."
- Faça: diga quanto tempo leva e o que a pessoa ganha; número antes do adjetivo ("1.204 vídeos este mês"); caixa de frase; uso de imagem explicado em uma linha.
- Não faça: jargão de agência, urgência falsa, mais de um ponto de exclamação por tela, emoji na interface, roteiro que pede elogio.
- CAIXA ALTA só em selos curtos: AO VIVO, GRAVANDO, EM ANÁLISE, APROVADO.

## Logo

O símbolo é um visor de câmera: dois cantos de enquadramento e um ponto coral de gravação no centro. O canto de baixo é um L, de Levva. A palavra "levva" vem em Bricolage Grotesque ExtraBold, caixa baixa, com o "a" de um andar só (ponta arredondada, como os cantos do visor) e um ponto final coral: o mesmo ponto de gravação do símbolo fechando a palavra. Na versão monocromática, o ponto final segue a cor da palavra.

- Construção em grade de 100: traço dos cantos 9, raio 16 (`radius-lg`), ponto com diâmetro 24 no centro exato. Na assinatura, a altura do "l" é 76 e o espaço entre símbolo e palavra é 22.
- Área de proteção: o diâmetro do ponto (24 em 100) em volta de qualquer versão.
- Tamanho mínimo: símbolo 24 px ou 8 mm; assinatura 96 px ou 25 mm.
- Fundos: principal sobre `paper`; negativa (`levva-lockup-paper.svg`) sobre `ink` ou foto escura; monocromática tinta sobre `coral` e `gold`.
- Não faça: distorcer, recolorir, girar, ponto coral sobre coral, mover o ponto, sombra ou efeito.

Os arquivos e o uso de cada um estão no grupo Logos.

## Animação da logo

"Enquadra, grava, assina." Os cantos entram pelas diagonais (0 a 520 ms), o ponto acende com um leve estouro (380 a 720 ms), as letras sobem uma a uma a cada 70 ms (560 a 1300 ms) o ponto final acende por último (1320 a 1660 ms) e o ponto do símbolo pisca duas vezes como luz de gravação (900 a 2100 ms). Total de 2,1 s (`duration-logo`), curva ease-snap `cubic-bezier(.2, .8, .2, 1)`, sem quique.

Toca uma vez e para; nunca em loop na interface. Com "reduzir movimento" ativo, mostre a logo parada. Usos: abertura e fechamento de vídeos, carregamento do app, telas do estúdio, início de apresentações. Vídeos e SVG animado no grupo Movimento; o card LogoAnimation mostra a animação ao vivo.

## Cores

Uma única cor forte, o coral, usada com moderação para a ação principal de cada tela e para o estado de gravação. A base é papel quente e tinta quase preta, nunca branco ou preto puros.

- `coral` (#FF4433): a cor da marca. Texto sobre coral é `on-coral` (tinta, 5,4:1). Coral como texto só em 24 px ou mais; para texto pequeno use `coral-ink`.
- `ink` (#1A1210): texto e a borda assinatura de 2 px. `paper` (#FBF3EA): fundo.
- `teal` para dados e aprovado, `gold` para recompensa e cashback (só preenchimento, texto em tinta).
- Proporção numa peça: 60% papel, 25% tinta, 10% coral, 5% acentos.
- Tema escuro: `paper` vira tinta e `ink` vira papel; o coral não muda.

## Tipografia

Bricolage Grotesque (`display`) para títulos curtos e números grandes, Inter (`body`) para toda a interface, JetBrains Mono (`mono`) para tempo de gravação e IDs. Todas do Google Fonts:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap">
```

## Elementos gráficos

- Botões no estilo Apple: preenchimento chapado, sem borda e sem sombra, cápsula (`radius-pill`), Inter 600. Principal em `coral` com texto `on-coral`; secundário em tinta a 8%. Pressionado escurece 14% e reduz para 98%.
- Borda de 2 px em tinta (`border-width`) em cartões, campos e modais.
- Sombra chapada sem desfoque (`shadow-flat-sm/md/lg`). A suave (`shadow-soft`) só em tabelas e superfícies densas.
- Moldura de visor: os dois cantos do símbolo enquadram títulos, fotos e telas, sempre na diagonal canto inferior esquerdo e superior direito.
- Padrão de visores: o símbolo em grade, tinta sobre coral ou papel sobre tinta. Nunca atrás de texto pequeno.
- Selo REC: pílula em tinta com ponto coral piscando e tempo em mono ("REC 00:30").
- Cantos: `radius-lg` em cartões, `radius-pill` em botões e selos, nunca zero na interface.
- Ícones: traço de 2 px, pontas redondas. Sem emoji como ícone.
- Movimento de interface: 120 a 200 ms, ease-snap. Hover escurece 6% e sobe 1 px; pressionado reduz para 97%.

## Fotografia

Gente real comprando e gravando no estúdio do shopping, luz do ambiente, enquadramento de celular. Sem banco de imagens, sem modelo posando, sem filtro pesado. Menores só com autorização dos responsáveis.

## Herança MONI

Mantidos: paleta, tipografia, bordas de 2 px, sombra chapada, pílulas, voz direta. Novos: nome, símbolo de visor, palavra em caixa baixa, animação da logo, moldura e padrão de visores, `coral-ink` e tons de sucesso e atenção ajustados para contraste. O design system MONI original, com componentes e templates, continua no repositório Levva, na pasta `Design System`.

## Arquivos

- `SKILL.md`: skill levva-design, para gerar telas e peças com a marca.
- `brand-guide.html`: Brand Guide completo, com essência, público, mensagem, voz, kit de vídeo, estúdios, parceiros e governança (abra no navegador).
- `brandbook.html`: brand book visual resumido.
- `logos/`: 12 versões em SVG, ver `logos/README.md`.
- `animacao/`: vídeos MP4 1920 x 1080, SVG animado e página HTML da animação.
- `tokens.json` e `tokens.css`: cores (claro e escuro), tipografia, espaço, raios, sombras, bordas, durações.
- `exploracao/`: comparativos de fontes, do "a" e de botões usados para decidir a marca.
