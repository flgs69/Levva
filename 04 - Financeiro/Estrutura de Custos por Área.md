---
tags:
  - livehub
  - financeiro
  - custos
tipo: nota
estágio: discovery
atualizado: 2026-07-02
---

# 💸 Estrutura de Custos por Área — Gastos e Variáveis

> [!info] Objetivo desta nota
> Reorganizar os números que já existem em [[Investimento e Projeções Financeiras]] e [[Plano Operacional]] em **4 áreas de estrutura** — Tecnológica, Física, Comercial e Marketing — separando, em cada uma, **Gastos** (investimento de setup, pago uma vez ou nos primeiros meses) de **Variáveis** (custo recorrente, mensal, ligado a volume/operação). Nenhum número novo — é o mesmo material, cortado de um jeito que dá pra decidir e fechar.

> [!warning] Achado ao reorganizar: o "headline" de custo mensal não bate com a tabela detalhada
> O material original diz, num resumo solto: *"custo mensal operacional estimado: R$ 28.000–45.000"*. Mas a própria planilha financeira detalhada do mesmo documento soma **R$ 43.500–50.500/mês** (linha "Total Custos", meses 1 a 12). São números diferentes no mesmo documento — o headline provavelmente ficou desatualizado quando a planilha foi refinada. A reconstrução por área abaixo bate com a **tabela detalhada**, não com o headline. Recomendação: usar R$ 44.000–55.000/mês como referência de trabalho, não R$ 28.000–45.000.

## Visão geral

| Área | Gasto (setup) | Variável (mensal) | Status |
|---|---|---|---|
| 🖥️ Tecnológica | R$ 78.000 – 112.000 | R$ 3.650 – 3.980 + comissões % | 🟡 Falta fechar fornecedor e ferramenta de afiliados |
| 🏢 Física | R$ 95.000 – 140.000 | R$ 14.000 | 🟡 Falta fechar metragem e local exatos |
| 🤝 Comercial | R$ 20.000 – 30.000 | ~R$ 12.000 + comissões % | 🔴 Falta fechar quem faz e quanto custa de fato |
| 📣 Marketing | R$ 50.000 – 85.000 | R$ 15.000 – 25.000 | 🟡 Falta fechar orçamento de sorteios e mídia paga |
| **Total (4 áreas)** | **R$ 243.000 – 367.000** | **R$ 44.650 – 54.980** | — |
| + Capital de giro (buffer, não estrutural) | R$ 37.000 – 60.000 | — | — |
| **Total geral** | **R$ 280.000 – 427.000** | — | ✅ bate com o CAPEX já conhecido (R$ 280–450 mil) |

> [!note] Sobre a divisão do item "Móveis, branding e identidade visual" (R$ 25.000–35.000 no material original)
> Esse item mistura Física (móveis) e Marketing (branding/identidade visual). Dividi estimando ~R$ 15.000–20.000 para Física e ~R$ 10.000–15.000 para Marketing — **essa divisão é uma estimativa minha, não do material original**, e é o principal motivo do total geral (até R$ 427k) ficar um pouco abaixo do teto original (R$ 450k). Vale confirmar essa divisão com quem orçar a reforma.

---

## 🖥️ 1. Estrutura Tecnológica

**O que cobre:** equipamentos de captação, software de streaming/edição, internet, ferramentas de rastreamento e afiliados, e a parte de equipe que opera essa tecnologia (operador de câmera/edição).

### 💰 Gastos (setup)
| Item | Valor |
|---|---|
| Equipamentos AV (2 câmeras 4K, 4 microfones, luzes, mixer, computador) | R$ 65.000 – 95.000 |
| Internet dedicada (instalação + 1º ano) | R$ 8.000 – 12.000 |
| Software e ferramentas (OBS/StreamYard, CapCut Pro, licenças) | R$ 5.000 |
| **Subtotal** | **R$ 78.000 – 112.000** |

### 📉 Variáveis (mensal)
| Item | Valor |
|---|---|
| Manutenção / internet / software recorrente | R$ 3.500 |
| Ferramenta de afiliados (Tapfiliate/Rewardful) | R$ 150 – 400 |
| Links personalizados (Bitly/Rebrandly) | R$ 0 – 80 |
| Pagamentos automáticos (Hotmart/Eduzz) | 8–12% **por transação** (não é fixo) |
| **Subtotal fixo** | **R$ 3.650 – 3.980/mês** + variável por transação |

### ❓ Pendências para fechar
- Comprar ou alugar equipamento? (impacta gasto de setup vs. variável mensal)
- Qual ferramenta de afiliados será usada de fato (impacta o valor exato)
- Ver risco de automação de postagem/live nas plataformas em [[Matriz de Riscos]] (risco #4) — pode mudar o escopo de "quanto tecnologia" é realmente necessário no MVP.

---

## 🏢 2. Estrutura Física

**O que cobre:** o espaço dentro do shopping — reforma, mobiliário, aluguel do ponto, manutenção do local.

### 💰 Gastos (setup)
| Item | Valor |
|---|---|
| Reforma e montagem (acústica, piso, pintura, cenários, projeto de arquiteto) | R$ 80.000 – 120.000 |
| Móveis (parte do item "móveis, branding e identidade visual") | R$ 15.000 – 20.000 |
| **Subtotal** | **R$ 95.000 – 140.000** |

### 📉 Variáveis (mensal)
| Item | Valor |
|---|---|
| Aluguel do ponto no shopping | R$ 12.000 |
| Energia, limpeza, manutenção do espaço | R$ 2.000 |
| **Subtotal** | **R$ 14.000/mês** |

### ❓ Pendências para fechar
- Metragem final: o material varia entre 15–30 m² — isso muda diretamente o custo de reforma.
- Localização exata (praça de alimentação × corredor × próximo a âncora).
- O aluguel é fixo ou tem componente de % sobre vendas? O material menciona os dois modelos em pontos diferentes.

---

## 🤝 3. Estrutura Comercial

**O que cobre:** parcerias com lojas e shopping, equipe que faz a "venda" da experiência (host/produtor + atendente que convertem fluxo em gravação), comissões sobre vendas geradas.

> [!warning] Essa é a área com **menos números fechados** de todas
> O material não separa claramente "equipe comercial" de "equipe técnica" dentro do bloco genérico "Equipe (3 pessoas): R$ 18.000/mês". A divisão abaixo (~R$ 12.000/mês para host + atendente, o resto na Tecnológica) é uma **estimativa minha** para dar uma referência de trabalho — não é um número que veio do material original.

### 💰 Gastos (setup)
| Item | Valor |
|---|---|
| Parceria com site de notícias + legal/contabilidade | R$ 20.000 – 30.000 |
| Recrutamento/treinamento do host e atendente | Sem valor à parte no material — incluído no cronograma de 12 semanas |
| **Subtotal** | **R$ 20.000 – 30.000** |

### 📉 Variáveis (mensal)
| Item | Valor |
|---|---|
| Equipe comercial (host/produtor + atendente, estimativa de ~2/3 dos R$ 18.000 de equipe) | ~R$ 12.000/mês |
| Comissões de afiliados (internos 8–15%, creators 10–20%, marcas 5–18%) | % sobre vendas geradas, não fixo |
| Comissão sobre vendas repassada ao shopping | % a negociar |
| **Subtotal fixo** | **~R$ 12.000/mês** + comissões variáveis |

### ❓ Pendências para fechar
- Quanto custa, de fato, cada papel (host, atendente)? O material observa que o valor de equipe pode estar **superestimado** (referência a padrões de TikTok) — ver [[Investimento e Projeções Financeiras]].
- % de comissão real a negociar com cada shopping.
- Quem faz a negociação comercial em si — ligado à governança indefinida, ver [[Matriz de Riscos]] (risco #6) e [[Estrutura Societária e Investimento]].

---

## 📣 4. Estrutura de Marketing

**O que cobre:** aquisição de audiência (ads pagos), identidade visual/branding, amplificação via mídia regional, incentivos de engajamento (sorteios).

### 💰 Gastos (setup)
| Item | Valor |
|---|---|
| Marketing inicial — anúncios TikTok/Kwai/Instagram (3 primeiros meses) | R$ 40.000 – 70.000 |
| Branding e identidade visual (parte do item "móveis, branding...") | R$ 10.000 – 15.000 |
| **Subtotal** | **R$ 50.000 – 85.000** |

### 📉 Variáveis (mensal)
| Item | Valor |
|---|---|
| Ads pagos recorrentes (TikTok/Kwai mais baratos que Instagram) | R$ 15.000 – 25.000 |
| Sorteios semanais / prêmios patrocinados por lojistas | Não quantificado no material |
| Parceria com veículo regional (ex.: Metrópolis) | Não quantificado — pode ser permuta |
| **Subtotal** | **R$ 15.000 – 25.000/mês** (piso conhecido) |

### ❓ Pendências para fechar
- Valor real de sorteios/prêmios (hoje é conceito, não orçamento).
- Se a parceria com veículo regional tem custo em dinheiro ou é permuta de mídia.
- Ver risco de custo de aquisição de audiência alto em [[Matriz de Riscos]] (risco #11).

---

## ✅ Para fechar de vez os 4 tópicos

O que falta, especificamente, para cada área deixar de ser faixa e virar número fechado:

1. **Tecnológica** → decidir comprar vs. alugar equipamento e escolher a ferramenta de afiliados. Sem isso, a faixa de R$ 78k–112k não fecha.
2. **Física** → fechar metragem (15 ou 30 m²?) e localização com o shopping-piloto. Isso sozinho explica boa parte da variação de R$ 95k–140k.
3. **Comercial** → é a área menos madura: falta separar o custo real de equipe comercial do técnico, e negociar % de comissão com o shopping-piloto. Prioridade alta porque também é o gargalo de governança (ver [[Matriz de Riscos]] risco #6).
4. **Marketing** → orçar sorteios de verdade e confirmar se a parceria de mídia regional tem custo.

> [!tip] Esses quatro pontos também aparecem em [[Perguntas em Aberto]] e [[Itens de Ação]] — essa nota é a referência numérica para respondê-los.

Relacionado: [[Investimento e Projeções Financeiras]] · [[Plano Operacional]] · [[Modelo de Negócio e Monetização]] · [[Matriz de Riscos]] · [[Perguntas em Aberto]] · [[Itens de Ação]] · [[Estrutura Societária e Investimento]]
