---
tags:
  - livehub
  - operação
  - compliance
  - tiktok
  - plataforma
tipo: nota
estágio: discovery
atualizado: 2026-07-11
---

# 📱 Regras de Plataforma — TikTok LIVE

> [!abstract] Por que este documento existe
> O TikTok é um dos canais de distribuição naturais para o live commerce do LiveHub. Antes de desenhar a operação de lives, é preciso mapear **o que a plataforma exige e o que ela proíbe** — porque cada regra é um potencial impedimento operacional (quem pode transmitir, o que pode aparecer, o que derruba a live). Fonte-base: [Guia de segurança em LIVEs do TikTok][guia] e as [Diretrizes da Comunidade][dc].

> [!warning] Leitura crítica antes de usar
> Os números abaixo (idade, seguidores) são os **oficialmente comunicados pelo TikTok**, mas a própria plataforma afirma que o critério de seguidores **"varia de acordo com cada mercado"** e pode mudar sem aviso. Alguns valores circulam em fontes de terceiros com divergências (ex.: "16 anos", "sem seguidores"). **Antes de fechar qualquer premissa de operação, confirmar o requisito vigente na conta real, dentro do app.** Tratar tudo aqui como hipótese a validar — ver [[Hipóteses e Validação]].

---

## 1. Requisitos para poder transmitir (elegibilidade)

| Requisito | Regra oficial | Observação |
|---|---|---|
| **Idade mínima** | **18 anos ou mais** para iniciar uma LIVE[^idade] | Terceiros às vezes citam 16; o oficial do TikTok é 18 |
| **Seguidores** | Conta precisa ter um nº mínimo de seguidores — **comumente 1.000** no Brasil[^seguidores] | O TikTok afirma que "varia por mercado"; **confirmar no app** |
| **Verificação de idade** | Pode ser exigida verificação para liberar o recurso | Impacta o fluxo de onboarding de creators/lojistas |
| **Conta em conformidade** | Sem restrições ativas por violação de diretrizes | Violações anteriores podem bloquear o acesso à LIVE |

> [!info] Acesso progressivo aos recursos
> Ao começar a transmitir, o creator **não tem acesso imediato a todos os recursos** da LIVE. Com o tempo — e desde que siga as políticas de segurança — a experiência completa vai sendo liberada.[^guia] Isso significa que uma conta nova de loja/creator pode não ter, no dia 1, recursos como presentes, co-host ou comércio.

## 2. Presentes e monetização (LIVE Gifts)

- Para **enviar ou receber Presentes de LIVE** é preciso ter **18 anos ou mais**[^idade] (exceção: **19 anos na Coreia do Sul**).
- Monetização via LIVE (Presentes/Diamantes) tem requisitos próprios que se somam aos de elegibilidade — relevante para o [[Modelo de Negócio e Monetização]] se o LiveHub pretender receita direta da plataforma, e não só vendas do lojista.

## 3. Regras de conteúdo (o que **não pode** aparecer na LIVE)

As [Diretrizes da Comunidade][dc] e o **Código de Conduta do Criador** valem integralmente durante a transmissão ao vivo. Principais vedações relevantes para o contexto de varejo/shopping:

- **Nudez e conteúdo sexual** explícito ou sugestivo — proibido (exceções educacionais/artísticas não se aplicam a live commerce).
- **Tabaco, vaping e nicotina** — exibir ou promover é proibido.[^dc]
- **Álcool** — permitido com restrições; **na LIVE o tratamento pode ser mais rígido** e varia por região.[^dc]
- **Drogas** e consumo/posse por menores (álcool, tabaco, drogas) — proibido.
- **Fraudes e golpes financeiros** — qualquer tentativa de enganar ou fraudar é proibida (atenção redobrada em live commerce com pagamento).
- **Conteúdo com restrição de idade**: se detectado, a LIVE **deixa de ser recomendada para pessoas de 13 a 17 anos**, reduzindo alcance.

> [!danger] Impacto direto no LiveHub
> Produtos regulados (bebidas, cosméticos com apelo, suplementos, tabaco) exigem checagem **antes** de entrar no roteiro da live. Um item proibido em cena pode **derrubar a transmissão inteira** e gerar penalidade na conta — risco a mapear na [[Matriz de Riscos]].

## 4. Moderação e segurança durante a LIVE

- **Moderadores da comunidade**: o creator pode nomear **até 30 moderadores por LIVE**, que podem **silenciar espectadores, bloquear comentários** e aplicar as diretrizes em seu nome.
- **Equipe de segurança do TikTok**: revisa e modera transmissões ativamente para manter a comunidade segura.
- **Ferramentas de segurança nativas**: filtros de comentários, palavras-chave bloqueadas, restrição de quem comenta — parte do kit que o operador da live deve configurar antes de ir ao ar.

## 5. Consequências de violar as regras

Se uma sessão de LIVE incluir conteúdo que viole as políticas:

1. A transmissão pode ser **interrompida / a sala encerrada** em tempo real.
2. O creator pode sofrer **restrições temporárias** do recurso de LIVE.
3. Em reincidência/gravidade, **restrições permanentes** de recursos ou da conta.

---

## 6. TikTok Shop / LIVE Shopping — venda ao vivo

> [!important] Isto é o que mais importa para o LiveHub
> A venda direta na live acontece via **TikTok Shop**, que tem regras **diferentes** das da LIVE comum. A principal: **não há exigência de nº de seguidores para vender** — o mínimo de ~1.000 seguidores vale para LIVE comum e presentes, **não** para venda de produtos.[^shop] Isso remove um dos maiores impedimentos para uma operação B2B nova.

**Elegibilidade do vendedor (Brasil):**

| Requisito | Regra |
|---|---|
| **Tipo de conta** | No Brasil, apenas **vendedores empresariais (CNPJ)** podem se cadastrar[^shopbr] |
| **Seguidores** | **Nenhum mínimo** para vender produtos[^shop] |
| **Documentação** | Docs da empresa (válidos, coloridos, legíveis) + dados bancários e fiscais compatíveis com a entidade |
| **Análise do cadastro** | Aprovação leva tipicamente **2 a 6 dias**[^shopbr] |

**Requisitos para vender ao vivo (LIVE Shopping):**

- **Conta ativa** — recomendado **mais de 30 dias** (regras podem variar por categoria de produto).[^shop]
- **Saúde da conta** — **sem violações graves nos últimos 90 dias**.
- **2FA obrigatório** — sem verificação em duas etapas, a funcionalidade é restringida.
- **Transmissão real e interativa** — **proibido** usar imagem estática como feed principal ou repetir vídeo gravado em loop.
- **Avatares/IA** — humanos digitais por IA são permitidos, mas exigem **rótulo visível de conteúdo gerado por IA**.

**Produtos proibidos no TikTok Shop** (submeter um item proibido pode sinalizar a **conta inteira**, não só o anúncio): armas, tabaco/vaping, álcool, produtos adultos/sexuais, medicamentos com prescrição, drogas, falsificados, cosméticos com ingredientes proibidos e suplementos sem certificação adequada.[^shopprod]

> [!danger] Impacto no modelo LiveHub
> Como o LiveHub é B2B (opera com CNPJ do lojista/shopping), a barreira de seguidores **some** — mas surge a exigência de **conta madura (30+ dias), 2FA e histórico limpo (90 dias)**. Isso afeta o **timing de onboarding**: uma conta recém-criada de lojista pode não estar apta a vender ao vivo no dia 1. Mapear no [[Plano Operacional]] e na [[Matriz de Riscos]].

## 7. Implicações operacionais para o LiveHub

> [!tip] Checklist de compliance antes de cada LIVE
> - [ ] Conta usada é elegível (idade + seguidores p/ LIVE comum + sem restrições ativas)
> - [ ] **Se for vender:** vendedor CNPJ cadastrado, conta 30+ dias, 2FA ativo, sem violação nos 90 dias
> - [ ] Recursos necessários já liberados na conta (presentes/co-host/comércio)
> - [ ] Roteiro sem produtos/temas proibidos ou regulados sem tratamento (checar lista do TikTok Shop)
> - [ ] Transmissão será ao vivo e interativa (nada de imagem estática ou vídeo em loop)
> - [ ] Moderador(es) designado(s) e ferramentas de filtro configuradas
> - [ ] Equipe ciente de que a sala pode ser encerrada por violação

Pontos em aberto que viram tarefa de discovery (ver [[Perguntas em Aberto]] e [[Itens de Ação]]):
- Qual conta transmite — **do lojista, do shopping ou do LiveHub**? Cada uma tem elegibilidade e histórico próprios.
- Requisitos adicionais de **TikTok Shop / live commerce** (venda direta na live) além dos de LIVE — mapear separadamente.
- Como o **incentivo/depoimento do cliente** (modelo central do LiveHub) se enquadra nas regras de conteúdo autêntico vs. conteúdo comercial.

Relacionado: [[Como Confirmar no TikTok Seller Center BR]] · [[Plano Operacional]] · [[Modelo de Negócio e Monetização]] · [[Matriz de Riscos]] · [[Hipóteses e Validação]] · [[Especificações do Projeto]]

---

[^guia]: [Guia de segurança em LIVEs — TikTok](https://www.tiktok.com/safety/pt-BR/tools-and-guides/live-safety-guide) (versão [en](https://www.tiktok.com/safety/en/tools-and-guides/live-safety-guide))
[^idade]: [Age requirements for TikTok LIVE — TikTok Support](https://support.tiktok.com/en/safety-hc/account-and-user-safety/age-requirements-for-tiktok-live) · [versão pt-BR](https://support.tiktok.com/pt_BR/safety-hc/account-and-user-safety/age-requirements-for-tiktok-live)
[^seguidores]: Comunicações do TikTok Brasil citam "mais de 18 anos e 1.000 seguidores" para liberar a LIVE; o texto oficial do guia afirma que o número "varia de acordo com cada mercado". Confirmar no app.
[^dc]: [Diretrizes da Comunidade — TikTok](https://www.tiktok.com/community-guidelines/pt/) · [Temas sensíveis e para adultos](https://www.tiktok.com/community-guidelines/pt-BR/sensitive-mature-themes)
[^shop]: Requisitos de venda ao vivo no TikTok Shop (conta 30+ dias, 90 dias sem violação, 2FA, transmissão interativa, sem mínimo de seguidores para vender). Consolidado de documentação de vendedor do TikTok Shop — confirmar na versão BR: [Seller Center BR](https://seller-br.tiktok.com/)
[^shopbr]: [Requisitos para se cadastrar como vendedor no TikTok Shop — TikTok for Business](https://ads.tiktok.com/help/article/requirements-to-register-as-a-seller-on-tiktok-shop?lang=pt) · [Cadastro de vendedor BR](https://seller-br.tiktok.com/account/register) · [TikTok Shop chega ao Brasil — Newsroom](https://newsroom.tiktok.com/tiktok-shop-chega-ao-brasil?lang=pt-BR)
[^shopprod]: [Política de Produtos Proibidos do TikTok Shop](https://seller-br.tiktok.com/university/essay?knowledge_id=6483182812481296&lang=pt-BR)

[guia]: https://www.tiktok.com/safety/pt-BR/tools-and-guides/live-safety-guide
[dc]: https://www.tiktok.com/community-guidelines/pt/
