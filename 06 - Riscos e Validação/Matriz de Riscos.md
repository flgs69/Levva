---
tags:
  - livehub
  - risco
  - discovery
tipo: nota
estágio: discovery
atualizado: 2026-07-02
---

# ⚠️ Matriz de Riscos

> [!warning] Sobre os percentuais
> Não existe dado medido ainda — estamos em **discovery**. Os percentuais abaixo são **estimativas de trabalho** (probabilidade e impacto subjetivos, atribuídos com base no material do projeto), servindo para **priorizar atenção e mitigação**, não como previsão estatística real. Devem ser revisados conforme o MVP gerar dados de verdade (ver [[Hipóteses e Validação]]).
>
> **Severidade** = (Probabilidade × Impacto) / 100 — usada só para ordenar a tabela. Riscos **irreversíveis** (coluna "Reversível") merecem atenção mesmo com score baixo, porque não dá pra "iterar" depois que acontecem.

## Tabela de riscos

| # | Risco | Categoria | Probabilidade | Impacto | Severidade | Prioridade | Reversível |
|---|---|---|---|---|---|---|---|
| 1 | Consumidor não aceita gravar espontaneamente | Validação | 55% | 95% | 52 | 🔴 Crítica | Sim (é o que o MVP existe para descobrir) |
| 2 | CAPEX real estoura a faixa estimada | Financeiro | 55% | 60% | 33 | 🟠 Alta | Sim |
| 3 | Lojista não enxerga ROI e não renova | Comercial | 50% | 65% | 33 | 🟠 Alta | Sim |
| 4 | **Automação de postagem e abertura de lives multiplataforma não funciona como planejado** | Tecnológico | 60% | 55% | 33 | 🟠 Alta | Sim, mas custa tempo e dinheiro descobrir tarde |
| 5 | Incentivo oferecido (desconto) não é atrativo o suficiente | Validação | 45% | 70% | 32 | 🟠 Alta | Sim |
| 6 | Governança indefinida — ninguém assume a operação/CEO | Societário | 40% | 65% | 26 | 🟠 Alta | Sim, mas trava tudo enquanto não resolvida |
| 7 | Complexidade operacional trava a execução | Operacional | 40% | 55% | 22 | 🟡 Média | Sim |
| 8 | **Ideia é apropriada pelo shopping/terceiro durante a negociação** | Comercial | 25% | 85% | 21 | 🟠 Alta* | **Não** |
| 9 | Qualidade do conteúdo fica fraca sem host caro | Operacional | 40% | 45% | 18 | 🟡 Média | Sim |
| 10 | Dependência excessiva de um único shopping | Comercial | 35% | 50% | 18 | 🟡 Média | Sim |
| 11 | Custo de aquisição de audiência muito alto | Financeiro | 45% | 35% | 16 | 🟡 Média | Sim |
| 12 | Saturação — vira "mais uma atração" sem diferenciação percebida | Mercado | 30% | 40% | 12 | 🟢 Baixa | Sim |
| 13 | Diluição societária mal amarrada a marcos de validação | Societário | 30% | 40% | 12 | 🟢 Baixa | Sim |
| 14 | Questão legal de menores de idade não resolvida | Jurídico | 20% | 55% | 11 | 🟢 Baixa* | **Não** |

> [!important] *Sobre os asteriscos (#8 e #14)
> O score de severidade sozinho **subestima** esses dois riscos: são os únicos **irreversíveis** da lista — uma vez que a ideia vaza sem proteção, ou um problema legal com menor ocorre, não tem MVP que conserte depois. Por isso tratamos #8 como prioridade **Alta** na prática (não Média, como o número sugere), e recomendamos que #14 nunca seja adiado para "depois que validar".

---

## 🔴 #1 — Consumidor não aceita gravar espontaneamente

**Por que importa:** é a hipótese central do projeto — se não for verdade, toda a arquitetura do negócio precisa mudar. Detalhe completo em [[Hipóteses e Validação]].

**💡 Solução:** rodar o MVP enxuto (1 estúdio, 1 shopping, 5 lojas, meta 200 vídeos/mês — ver [[Investimento e Projeções Financeiras#MVP enxuto]]) **antes** de qualquer investimento pesado. Medir taxa de aceitação real antes de escalar.

---

## 🟠 #2 — CAPEX real estoura a faixa estimada

**Por que importa:** hoje o CAPEX varia entre R$ 100k, R$ 280–450k e R$ 700k conforme a fonte — isso por si só é sinal de que ninguém fechou o número real. Ver [[Investimento e Projeções Financeiras]].

**💡 Solução:** travar um teto fixo para o MVP (ex.: R$ 100k) e só liberar orçamento maior depois que o piloto provar ROI. Cotar equipamento e reforma com 2–3 fornecedores antes de comprometer capital. Checklist do que falta fechar, por área, em [[Estrutura de Custos por Área#✅ Para fechar de vez os 4 tópicos]].

---

## 🟠 #3 — Lojista não enxerga ROI e não renova

**Por que importa:** o lojista só faz uma pergunta — "isso vende?". Sem resposta clara, o pacote mensal (R$ 800–1.800) não se sustenta. Ver [[Modelo de Negócio e Monetização]].

**💡 Solução:** dashboard por loja com métricas de vendas atribuídas (não só views) desde o primeiro mês, e garantir o piloto de 30 dias grátis com entrega mínima de conteúdo comprovada antes de cobrar.

---

## 🟠 #4 — Automação de postagem e abertura de lives multiplataforma não funciona como planejado

**Por que importa:** o material original trata "postar automaticamente" e "abrir lives" em TikTok, Kwai, Shopee Live, Instagram e YouTube como um recurso de automação relativamente simples. Vale questionar essa premissa: **cada plataforma tem uma API própria, com regras, aprovação e limitações diferentes** — e a parte mais sensível (**iniciar uma live via terceiros**) costuma ser a mais restrita de todas:

- **TikTok** tem uma Content Posting API oficial (para postar vídeo), mas exige aprovação de app e tem cotas; abrir uma **LIVE** via API para terceiros normalmente não é aberto ao público — costuma depender de parceria comercial direta com a plataforma.
- **Kwai** tem documentação pública de API muito limitada fora do mercado asiático.
- **Shopee Live** é, na prática, fechado ao próprio ecossistema Shopee (conta de vendedor/afiliado dentro do app) — não foi desenhado para ser operado por um sistema externo.
- Contornar essas restrições com automação não-oficial (bots, RPA simulando clique, scraping) **viola os termos de uso** das plataformas e pode resultar em **banimento da conta comercial** — o que destruiria o canal de distribuição inteiro, não só a automação.

Ou seja: o risco não é só "é difícil de construir". É que a versão "abrir live automaticamente em 4 plataformas" pode **não ser tecnicamente viável** do jeito que o plano imagina, ao menos não sem acordos comerciais que o LiveHub ainda não tem. Isso conecta com o discurso de "empresa de tecnologia" em [[Estrutura Societária e Investimento#Natureza do negócio]] — vale calibrar essa promessa à realidade das APIs antes de vender a automação como diferencial.

**💡 Solução:**
1. **Não prometer automação total multiplataforma no MVP.** Tratar publicação como processo **semi-manual assistido por IA**: a IA corta, edita e legenda; uma pessoa publica manualmente em cada plataforma nos primeiros meses.
2. **Mapear plataforma por plataforma** o que realmente tem API oficial disponível para o Brasil (Meta Graph API para Instagram, YouTube Data API, TikTok Content Posting API) antes de desenhar qualquer arquitetura — e o que não tem (abertura de live costuma ser o mais restrito).
3. **Priorizar as plataformas com API oficial e documentada** (Instagram, YouTube) e tratar TikTok/Kwai/Shopee Live como publicação manual assistida até (se) houver parceria comercial formal com a plataforma.
4. **Nunca usar automação não-oficial** que viole termos de uso — o risco de banimento da conta é maior que o ganho de produtividade.
5. Reavaliar o roadmap técnico só depois que o MVP provar a hipótese central (ver [[Hipóteses e Validação]]) — não faz sentido resolver automação de live antes de saber se o formato funciona.

---

## 🟠 #5 — Incentivo oferecido não é atrativo o suficiente

**Por que importa:** o desconto pode não ser o gatilho certo para tirar alguém do "comprar e ir embora". Ver [[Hipóteses e Validação#Incentivos a experimentar]].

**💡 Solução:** testar A/B pelo menos 2–3 incentivos diferentes (desconto × cashback × sorteio) já no MVP, em vez de assumir que desconto é a resposta certa.

---

## 🟠 #6 — Governança indefinida (ninguém assume a operação/CEO)

**Por que importa:** o sócio principal já declarou que não vai operar. Sem essa peça resolvida, o projeto não anda — nem o piloto, nem uma eventual rodada. Ver [[Estrutura Societária e Investimento]].

**💡 Solução:** resolver quem opera **antes** de buscar investimento externo ou avançar com negociações de shopping. Não é um problema para "depois que validar" — sem operador, não tem quem valide.

---

## 🟡 #7 — Complexidade operacional trava a execução

**Por que importa:** o negócio envolve tecnologia, estúdio físico, captação de clientes e edição simultaneamente. Ver [[Plano Operacional]].

**💡 Solução:** sequenciar entregas — MVP manual e simples primeiro (host humano, edição básica), automação e IA só depois que o processo estiver validado manualmente.

---

## 🟠 #8 — Ideia é apropriada pelo shopping/terceiro durante a negociação

**Por que importa:** este é um risco real e **irreversível** — depois que o "como" do modelo é entregue numa reunião sem proteção, não tem como reverter. Vale reconhecer o limite: **modelo de negócio não é patenteável no Brasil**. A proteção não vem de manter a ideia em segredo (ela é simples de entender), vem de **como e quando você revela os detalhes**, e de construir algo difícil de copiar rápido.

**💡 Solução (em camadas):**
1. **NDA assinado antes de qualquer reunião** que revele operação, cronograma, contratos-modelo ou financeiro — não antes do primeiro contato de interesse, mas antes de qualquer detalhe.
2. **Divulgação em camadas:** no pitch inicial, mostrar conceito e resultado esperado (tráfego, vendas, mídia) — sem entregar o "como" (roteiro operacional, modelo de contrato, cronograma de 12 semanas, stack de tecnologia). Detalhe operacional só após contrato assinado.
3. **Começar por shoppings menores ou administradoras regionais**, não pelas grandes redes (Allos, Iguatemi etc.) — menor porte tende a ter menos equipe interna de inovação capaz de replicar sozinha, e menos alavancagem para simplesmente "fazer por conta própria" depois do pitch.
4. **Cláusula de exclusividade** territorial/temporal no contrato do piloto (ex.: exclusividade de 12–24 meses naquele shopping ou região).
5. **Registrar a marca "LiveHub" no INPI** o quanto antes — não protege a ideia, mas evita que um terceiro registre o nome e ganhe legitimidade sobre ele.
6. **Documentar anterioridade:** apresentações datadas, e-mails, atas de reunião — não impede o roubo, mas ajuda numa disputa.
7. **O verdadeiro moat não é o conceito — é a execução:** banco de dados de audiência, rede de creators/afiliados e relacionamento com lojas (ver [[Conceito e Proposta de Valor#O ativo real: o banco de dados]]). Isso é o que realmente não dá para copiar em uma reunião.

---

## 🟡 #9 — Qualidade do conteúdo fica fraca sem host caro

**Por que importa:** depoimento mal conduzido não gera compartilhamento nem prova social. Ver [[Plano Operacional#Equipe mínima (por estúdio)]].

**💡 Solução:** testar host júnior com roteiro estruturado + edição rápida com IA antes de assumir que precisa de talento caro. Medir compartilhamentos como proxy direto de qualidade.

---

## 🟡 #10 — Dependência excessiva de um único shopping

**Por que importa:** se o contrato com o shopping piloto cair, o negócio para. Ver [[Análise de Mercado e Concorrência]].

**💡 Solução:** assim que o primeiro piloto validar, abrir um segundo ponto (fixo ou estúdio móvel) rapidamente — não esperar "consolidar" demais em um único parceiro.

---

## 🟡 #11 — Custo de aquisição de audiência muito alto

**Por que importa:** ads no TikTok/Kwai custam R$ 15–25k/mês nas projeções — pode inviabilizar o caixa cedo. Ver [[Investimento e Projeções Financeiras]].

**💡 Solução:** priorizar alcance orgânico (depoimentos reais, programa de afiliados/creators) nos primeiros meses, tratando ads pagos como complemento, não motor principal.

---

## 🟢 #12 — Saturação: vira "mais uma atração" sem diferenciação

**Por que importa:** shoppings têm fadiga de "novidades". Ver [[Análise de Mercado e Concorrência]].

**💡 Solução:** ancorar a comunicação em propósito claro (o cliente vira protagonista/creator, não só "mais uma ativação") e medir engajamento real, não só presença.

---

## 🟢 #13 — Diluição societária mal amarrada a marcos de validação

**Por que importa:** a narrativa de rodadas (seed/VC) está mais desenhada que a validação em si. Ver [[Estrutura Societária e Investimento]].

**💡 Solução:** amarrar contratualmente diluição e novas rodadas a marcos objetivos de validação (ex.: X% de taxa de aceitação, Y lojas renovando), não a prazos de calendário.

---

## 🟢 #14 — Questão legal de menores de idade não resolvida

**Por que importa:** é o outro risco **irreversível** da lista — um problema aqui pode gerar passivo jurídico e dano reputacional imediato. Ver [[Plano Operacional]] e [[Itens de Ação]].

**💡 Solução:** termo de autorização padrão revisado por jurídico **antes** do lançamento (não durante), e política operacional clara: não gravar menor desacompanhado sem autorização assinada dos responsáveis.

---

Relacionado: [[Hipóteses e Validação]] · [[Especificações do Projeto]] · [[Estrutura Societária e Investimento]] · [[Plano Operacional]] · [[Investimento e Projeções Financeiras]] · [[Estrutura de Custos por Área]] · [[Modelo de Negócio e Monetização]] · [[Análise de Mercado e Concorrência]] · [[Itens de Ação]] · [[Perguntas em Aberto]]
