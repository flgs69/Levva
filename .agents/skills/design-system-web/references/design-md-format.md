# Formato de DESIGN.md

Referência adaptada do formato aberto `google-labs-code/design.md`, versão alpha, licenciado sob Apache 2.0.

## Frontmatter

Use YAML opcional com tokens tipados:

```yaml
---
version: alpha
name: Nome do sistema
description: Descrição curta
colors:
  surface: "#FFFFFF"
  on-surface: "#111111"
typography:
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
spacing:
  sm: 8px
  md: 16px
rounded:
  none: 0px
components:
  button-primary:
    backgroundColor: "{colors.surface}"
---
```

Valores de dimensão aceitam `px`, `em` ou `rem`. Referências usam `{caminho.do.token}`.

Se uma família inteira não existir, use `omitted` com motivo:

```yaml
omitted:
  - section: rounded
    reason: "A linguagem observada usa apenas cantos retos"
```

## Ordem das seções

1. `## Overview`
2. `## Colors`
3. `## Typography`
4. `## Layout`
5. `## Elevation & Depth`
6. `## Shapes`
7. `## Components`
8. `## Do's and Don'ts`

Seções adicionais são permitidas quando aumentam a precisão. Não duplique títulos normativos.

## Conteúdo mínimo útil

- papéis semânticos das cores e combinações permitidas;
- tipografia com função, tamanho, peso, altura de linha e tracking;
- grid, largura máxima, gutters, ritmo e comportamento por breakpoint;
- bordas, cantos, sombras e método de hierarquia;
- componentes com estados normal, hover, foco, ativo, desabilitado e erro quando aplicável;
- regras práticas que evitem descaracterização;
- origem e nível de confiança quando o documento foi extraído de uma implementação.

## Limites

O frontmatter fornece valores normativos. A prosa explica intenção e aplicação. Um token extraído de código legado não se torna automaticamente recomendação: marque dívida, inconsistência ou proposta separadamente.
