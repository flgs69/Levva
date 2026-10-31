---
name: design-system-web
description: Extrai, cria ou atualiza um DESIGN.md a partir de uma interface web existente, combinando screenshots, DOM, CSS, tokens e estados responsivos. Use quando o usuário quiser documentar a linguagem visual real de um site ou manter consistência entre sessões e IAs. Não use para inventar estratégia de marca do zero.
---

# Design System Web

Produza um `DESIGN.md` que represente a interface real e diferencie observação, regra normativa e proposta.

## Fonte de verdade

Use esta ordem de autoridade:

1. guia de marca ou briefing explicitamente aprovado;
2. `DESIGN.md`, tokens ou tema já adotados pelo projeto;
3. CSS, componentes, assets e estilos computados;
4. screenshots, DOM e comportamento responsivo atual;
5. convenções do setor e bancos de referência, apenas como hipótese.

Uma recomendação genérica nunca substitui uma identidade coerente já observada. Se as fontes divergirem, registre a divergência e o nível de confiança.

## Fluxo

1. Leia o contexto do projeto e preserve o original. Para experimentar mudanças, crie uma variante isolada.
2. Capture a interface em pelo menos um viewport desktop e um mobile. Para interfaces interativas, capture também estados relevantes.
3. Inspecione DOM, CSS, fontes, imagens e tokens. Extração apenas textual não basta.
4. Documente cores por função, tipografia por papel, espaçamento, grid, formas, profundidade, componentes e estados.
5. Separe claramente:
   - **observado:** existe na implementação;
   - **normativo:** deve orientar novas telas;
   - **proposto:** correção ou evolução ainda não aprovada.
6. Valide o documento e a interface conforme os critérios abaixo.

## Formato do DESIGN.md

Leia [references/design-md-format.md](references/design-md-format.md) antes de escrever ou revisar o arquivo.

O documento deve ser autocontido. Se uma seção não se aplicar, omita com justificativa no frontmatter. Não transforme um retrato técnico em manual oficial sem evidência.

## Critérios de validação

- Compare os tokens normativos com a implementação candidata. Cor, fonte, espaçamento ou estado que divergir do CSS e dos componentes deve ser corrigido no documento ou marcado explicitamente como proposta. Um `DESIGN.md` desatualizado não passa na validação.
- Verifique contraste conforme a função e o tamanho do texto: 4.5:1 para texto normal e 3:1 para texto grande. Para uma cor de marca que funciona em títulos, mas falha em texto corrido, crie um token de texto mais escuro em vez de eliminar a cor principal.
- Verifique largura do `body` e elementos internos que podem ficar cortados, inclusive grids, abas e trilhos roláveis.
- Confirme imagens carregadas, erros de JavaScript, foco por teclado, relação entre abas e painéis, e `prefers-reduced-motion`.
- Trate texto funcional abaixo de 11px como suspeito. Preserve exceções apenas quando forem decorativas e dispensáveis.
- Não aceite automaticamente sugestões de fonte, paleta ou estilo vindas de geradores. Compare cada sugestão com o briefing e a interface observada.

## Linter

Quando houver Node e rede disponíveis, tente:

```text
pnpm dlx @google/design.md lint DESIGN.md
```

Faça no máximo uma nova tentativa após falha técnica. Se o processo travar ou não produzir diagnóstico, registre que o linter não concluiu. Nunca apresente ausência de saída como validação bem-sucedida.

## Entrega

Informe o caminho do `DESIGN.md`, as evidências usadas, as decisões de alta confiança e as pendências que dependem de marca, conteúdo ou negócio. Se houver variante visual, mantenha o original intacto e entregue também o comparativo de QA.
