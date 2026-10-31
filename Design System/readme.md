# MONI — Sistema de Design

## O que é a MONI

MONI é uma plataforma de mídia de varejo e aquisição de clientes dentro de shopping centers. Consumidores recebem incentivos para gravar depoimentos curtos ou conteúdo ao vivo sobre compras recentes, ajudando lojas e shoppings a gerar prova social, alcance local, tráfego de pessoas e vendas rastreáveis.

Dois públicos, dois produtos:
- **Lojistas e operadores de shopping** — um painel web para lançar campanhas de incentivo, revisar vídeos enviados, aprovar pagamentos e acompanhar o impacto em alcance e vendas.
- **Consumidores** — um fluxo leve no celular para resgatar uma oferta após a compra, gravar um vídeo e receber o pagamento.

## Fontes

- Pasta local "Design System" (montada via File System Access API): não continha material específico da MONI — era um moodboard genérico de trabalhos de marca de terceiros sem relação (Carhartt WIP, um flyer de evento "ATL Crew", um card de citação "Second Society", uma peça de tipografia "Chunko Bold", fotos de banco de imagens). Nada disso é marca própria da MONI, então nada foi copiado como ativo. Foi usado apenas como referência solta de energia visual (tipografia robusta e marcante, blocos de cor chapados, motivos de adesivo/selo) na escolha da direção original abaixo.
- Repositório GitHub `flgs69/MONI-design-Systen` — anexado como fonte, mas atualmente sem nenhum commit (leituras de árvore/README retornam 409/não encontrado). Nada pôde ser lido dele. Se o conteúdo for enviado depois, rode uma nova sincronização para trazê-lo.

Como não havia logotipo, copy de produto, telas ou código específicos da MONI, **este sistema de design é uma identidade visual original construída a partir da descrição da empresa**, não uma recriação de uma marca existente. Sinalizado claramente abaixo onde algo foi inventado em vez de extraído de uma fonte.

## Adições intencionais

Não havia fonte de componentes, então o conjunto completo de primitivos (Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Tabs, Dialog, Badge, Tag, Toast, Tooltip) foi criado do zero, dimensionado para o que os dois produtos acima precisam.

## Componentes

`components/core/` — `Button`, `IconButton`
`components/forms/` — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
`components/feedback/` — `Badge`, `Tag`, `Toast`, `Tooltip`
`components/surfaces/` — `Card`, `Tabs`, `Dialog`

(Nomes de componentes, props e código permanecem em inglês, como é convenção em design systems para código — a tradução para português cobre toda a documentação e todo o texto visível nas telas.)

## Kits de UI

`ui_kits/dashboard/` — o painel web do lojista/operador de shopping: campanhas, fila de revisão de envios, análises.
`ui_kits/creator-app/` — o fluxo mobile do consumidor: resgatar oferta, gravar, enviar, receber o pagamento.
`ui_kits/site/` — site institucional: hero, manifesto, como funciona, seção para lojistas.

## Fundamentos de conteúdo

Voz inventada (nenhuma copy real da MONI foi fornecida) — direta, simples, enérgica, nunca corporativa.

- **Tratamento:** "você" tanto para o consumidor ("Grave um vídeo de 30 segundos, ganhe R$ 5 de volta") quanto para o lojista ("Veja quais vídeos trouxeram mais gente pra loja essa semana").
- **Caixa:** texto normal (frase) em toda a copy corrida e nos títulos. CAIXA ALTA reservada a rótulos curtos e selos ("AO VIVO", "DESTAQUE", "EM ANÁLISE").
- **Tamanho das frases:** curtas, voz ativa, uma ideia por frase. "Aprove o vídeo. Nós cuidamos do pagamento." em vez de "Assim que você tiver revisado o conteúdo enviado, poderá prosseguir com a aprovação."
- **Números em vez de adjetivos:** "1.204 vídeos este mês" em vez de "muito conteúdo bacana".
- **Emoji:** não é usado na interface do produto, nem para o lojista nem para o consumidor — mantém um tom único em vez de dividir "descontraído pro cliente, sério pro negócio".
- **Exemplo de título (painel):** "Transforme o cupom fiscal de hoje no movimento de amanhã."
- **Exemplo de microcopy (app do consumidor):** "Tem 30 segundos? Mostra sua compra e ganha R$ 5 de volta."

## Fundamentos visuais

- **Cor:** uma única cor forte — coral (`--brand-coral`) — usada com moderação para a única ação primária de cada tela e para estados "ao vivo"/destaque. A paleta base é papel quente (`--paper-0/50/100`) em vez de branco puro, com tinta quase preta (`--ink-900`) para texto e bordas — nunca `#000`/`#fff` puros. Um pequeno conjunto de acentos (verde-azulado, dourado) existe para dados/ilustração secundários, mantido fora dos CTAs principais para o coral continuar significativo.
- **Tipografia:** Bricolage Grotesque (display, robusta/marcante) para títulos e números; Inter (texto) para interface e textos longos. Substituição via Google Fonts — ver nota de Fontes abaixo.
- **Espaçamento:** escala base de 4px (`--space-1` … `--space-24`), bastante espaço em branco; a densidade do painel permanece confortável mesmo em tabelas com muito dado.
- **Fundos:** cor de papel chapada, sem gradientes. Blocos coral chapados ocasionais para dar ênfase (banners de oferta, estados vazios); heróis fotográficos full-bleed usam as fotos reais do estúdio (ver Fotografia abaixo).
- **Animação:** rápida e direta, nunca com bounce — 120–200ms com curva ease-out (`--ease-snap`). Usada em hover, deslize do toggle, aparição de modal. Sem easing de mola/bounce.
- **Estado de hover:** leve escurecimento (`brightness(0.94)`) mais um deslocamento de 1px para cima nos botões — não uma troca de cor.
- **Estado de pressionado:** ainda sem tratamento próprio além do padrão do navegador; recomenda-se `scale(0.97)` no `:active` se um componente precisar de mais feedback tátil.
- **Bordas:** uma borda de tinta sólida de 2px como assinatura em cartões, botões (outline/ghost), inputs e modais — estilo pôster/impresso, não uma linha fina de 1px.
- **Sombras:** sombras "chapadas" deslocadas (`--shadow-flat-*`, ex.: `4px 4px 0 tinta`) em cartões e modais em vez de sombras suaves com blur — reforça o clima de pôster impresso. Existe uma sombra suave com blur (`--shadow-soft-*`) para superfícies densas e de menor destaque, como tabelas.
- **Raios de canto:** 8–16px em cartões/inputs/modais (`--radius-sm/md/lg`); pílula total (`--radius-pill`) em botões, tags e selos. Sem cantos 0px na interface, exceto em blocos de marketing propositalmente "estilo flyer".
- **Transparência/blur:** usada uma vez — o scrim do modal (`rgba(tinta,0.5)`), sem blur. Sem painéis em vidro fosco.
- **Clima de imagem:** quente, espontâneo, gente real comprando e gravando no estúdio MONI dentro do shopping — nunca still de banco de imagens corporativo, luz de estúdio ou modelo posando. Fotos em `assets/brand/photo-*.png`; ver card "Fotografia" na aba de Marca.
- **Regras de layout:** o painel usa navegação fixa à esquerda + área de conteúdo rolável; o app do consumidor é de coluna única, alcançável com o polegar, com uma ação primária fixa na parte inferior.

## Iconografia

Nenhuma fonte de ícones, sprite SVG ou biblioteca de ícones foi encontrada nas fontes fornecidas. Os poucos glifos usados nos kits de UI (seta de voltar, triângulo de play) são desenhados à mão, simples, com o mesmo peso de traço de 2px das bordas do sistema — não há uma biblioteca de ícones adotada ainda. Nenhum emoji ou glifo Unicode é usado como ícone. Se o produto crescer e precisar de um conjunto maior, recomenda-se um set outline aberto como Lucide ou Heroicons via CDN, mantendo o mesmo peso de traço.

## Fontes — substituição sinalizada

Nenhum arquivo de fonte foi fornecido. As fontes de display e texto são substitutas do Google Fonts escolhidas para combinar com a energia "robusta e marcante" do moodboard: **Bricolage Grotesque** (display) e **Inter** (texto), carregadas via `tokens/fonts.css`. Se a MONI tiver fontes de marca licenciadas, envie os arquivos (ou os nomes) para que este sistema seja atualizado.

## Logotipo e patterns

Como nenhum logotipo real foi fornecido, o "logomark" abaixo é uma marca gráfica **original**, criada para este sistema a pedido do usuário — um ponto cheio ("ao vivo") com dois arcos concêntricos abrindo-se como ondas de transmissão, remetendo a "sinal ao vivo" e conexão. Formas moduladas e arredondadas, coerentes com a linguagem de bordas de 2px e cantos suaves do sistema.

- **Arquivos:** `assets/brand/logomark-coral.svg` (uso principal, sobre papel), `logomark-ink.svg` (monocromático escuro), `logomark-paper.svg` (monocromático claro, para fundos escuros/coral), mais as versões de acento `logomark-teal.svg`, `logomark-gold.svg`, `logomark-info.svg` e `logomark-outline.svg` (uso pontual, só quando a peça inteira já usa aquele acento). As 5 direções exploradas antes de fechar este símbolo ficam em `logomark-variant-*.svg`, documentadas no manual de marca.
- **Clearspace:** deixe ao redor do símbolo um espaço livre igual à altura do ponto ("ao vivo").
- **Tamanho mínimo:** 24px em telas, 8mm em impressos.
- **Uso correto:** símbolo + "MONI" em Bricolage Grotesque 800, lado a lado, alinhados ao centro vertical. Sobre fundo escuro ou coral, use a versão `paper`; sobre papel/branco, use `coral` ou `ink`.
- **Evite:** esticar/distorcer o símbolo, recolorir fora da paleta da marca, aplicar sobre fundos de baixo contraste (ex.: coral sobre coral-claro), girar ou espelhar.

**Patterns proprietários**, derivados do logomark, em duas versões:
- **Geométrico** (`pattern-geometric.svg` / `pattern-geometric-paper.svg`) — grade modular e regular do símbolo, uso em fundos claros, escuros e coral (arquivo com a cor do motivo trocada conforme o fundo). Ideal para capas, fundos de cards e apresentações.
- **Orgânico** (`pattern-organic.svg` / `pattern-organic-dark.svg`) — o mesmo motivo em escalas, rotações e opacidades variadas, misturando os acentos teal e dourado — mais expressivo, para stories e peças de estúdio.
- **Textura granulada** (`texture-grain.svg`) — ruído sutil via `feTurbulence`, aplicado como overlay (`mix-blend-mode: overlay`, opacidade 0.3–0.5) sobre blocos de cor para tirar o aspecto "chapado" perfeito demais.
- **Patterns alternativos** (`pattern-variant-1-ondas.svg`, `-2-wifi.svg`, `-4-espelhado.svg`, `-5-burst.svg`) — derivados das direções de logomark não escolhidas, para peças que pedem uma textura diferente da grade padrão.

## Onde ver tudo isso

- **Aba "Design System"** do projeto: mostra todos os cards de fundamentos (cores, tipografia, espaçamento, marca) e os componentes, agrupados como aparecem aqui.
- **Aba "Templates"**: mostra as 8 peças prontas (`templates/`) — cada uma abre como um arquivo ao vivo, com texto e imagens editáveis diretamente.
- **Aba "UI Kits"** (ou os arquivos em `ui_kits/`): as 3 recriações de produto (painel do lojista, app do consumidor, site institucional).

## Templates de aplicação

`templates/` reúne peças prontas construídas com esses fundamentos — ver a aba de Templates do sistema:
- `post-social/` — post quadrado para redes sociais
- `story/` — story vertical (9:16)
- `capa-video/` — capa/thumbnail de vídeo (16:9)
- `card-depoimento/` — card de depoimento de cliente
- `cta-banner/` — banner de CTA reutilizável para telas de produto
- `sinalizacao-estudio/` — pôster de sinalização para o estúdio de gravação no shopping
- `apresentacao/` — slide de abertura para apresentações
- `manual-marca/` — manual de marca completo (manifesto, logotipo, cores, tipografia, patterns), com exportação em PDF

## Índice

- `styles.css` — stylesheet raiz, importa tudo em `tokens/`
- `tokens/` — cores, tipografia, espaçamento, raio/sombra, fontes
- `components/` — ver acima
- `ui_kits/` — ver acima
- `guidelines/` — cards de especificação de fundamentos que alimentam a aba de Sistema de Design
- `assets/` — nenhum logotipo foi fornecido; ver seção de Iconografia
- `thumbnail.html` — miniatura da página inicial
- `SKILL.md` — versão portátil desta skill para o Claude Code
