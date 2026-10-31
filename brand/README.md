> Design system completo no Claude Design: https://claude.ai/artifact/RLSjCpm9DYKYEz2cofLRq1

# Levva

Levva vem de três palavras que cabem no nome: **levar**, **leve** e **elevar**. A marca promete que o próximo passo é mais leve do que parece e que a Levva vai junto. A referência de espírito é a MONI: nome curto e sonoro, visual limpo de fintech, tom próximo, sem cara de banco.

Assinatura: **Mais leve, mais alto.**

## A ideia do símbolo

O "vv" do meio do nome, virado para cima, vira dois chevrons: o sinal de subir de nível. O chevron de cima é âmbar (`lift`, o impulso); o de baixo é branco (a base). Os dois ficam num quadrado verde de cantos generosos (`radius-lg`, 16 em 64). A palavra "levva" é desenhada em traço único, de pontas redondas, com a mesma espessura dos chevrons, para que símbolo e nome pareçam a mesma mão.

## Voz

- Fala como gente: frases curtas, segunda pessoa ("você"), verbos de movimento (levar, subir, avançar).
- Mostra o número real antes do adjetivo: "Você guardou R$ 320 este mês", não "Resultados incríveis!".
- Faça: ser direto, comemorar progresso pequeno, explicar termos financeiros em uma linha.
- Não faça: urgência falsa, jargão de banco, letras maiúsculas para gritar, mais de um ponto de exclamação por tela, emoji como enfeite.

## Cores

A marca vive em três cores: o verde `levva`, o âmbar `lift` e o quase-preto `ink`. O resto é neutro de apoio.

- `levva` é a cor que as pessoas reconhecem: botão principal, links, o símbolo. Texto sobre ele é `on-levva`.
- `lift` aparece pouco e sempre como impulso: o chevron de cima, uma conquista, um destaque numa tela. Nunca serve de texto sobre fundo claro; texto sobre `lift` é `ink`.
- `ink` é o texto e também o fundo escuro da marca (capas, rodapés, telas de celebração).
- `surface` é o fundo padrão, um verde quase branco; `surface-raised` (branco) separa cartões.
- `levva-soft` tinge chips e estados selecionados atrás de texto `levva` ou `ink`.
- `danger` só para erro e valor negativo.

Proporção sugerida numa peça: 60% `surface`, 25% `levva` ou `ink`, 10% `levva-soft`, 5% `lift`.

## Tipografia

Duas famílias do Google Fonts: **Bricolage Grotesque** (`display`) para títulos curtos, com personalidade, e **Instrument Sans** (`sans`) para todo o resto. Valores usam o estilo `figure` com algarismos tabulares, para que colunas de dinheiro alinhem. Carregue assim:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..800&family=Instrument+Sans:wght@400..700&display=swap">
```

## Forma e espaço

- Grade de 8px (`space-2` a `space-8`), margem lateral de `space-4` no celular.
- Cantos generosos: `radius-lg` em cartões, `radius-full` em botões de ação e pílulas, `radius-sm` em campos.
- Profundidade por cor, não por sombra: um cartão `surface-raised` sobre `surface` já se separa.

## Iconografia

Ícones em traço único, pontas e junções redondas, espessura proporcional à do logo (cerca de 1/9 da altura do ícone), cor `ink` ou `levva`. O chevron para cima é o motivo gráfico da marca: pode repetir em padrões (subindo em diagonal), em indicadores de progresso e em estados de conquista. Não usar ilustrações com rostos nem mascotes.

## Logo

Use `levva-lockup.svg` como assinatura principal, `levva-mark.svg` quando o espaço for quadrado (app, avatar, favicon) e `levva-wordmark.svg` / `levva-wordmark-reverse.svg` quando o símbolo já aparece por perto. Regras e tamanhos mínimos em Logos.

## Status desta versão

Primeira versão, criada do zero com a MONI como referência de conceito (não há arquivos da MONI no repositório). O segmento exato da Levva ainda não foi definido; a voz e as cores partem de uma fintech de uso pessoal. Próximos passos: tema escuro, componentes (botão, campo, cartão de saldo) e peças de aplicação.
