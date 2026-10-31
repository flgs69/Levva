function ForBusiness() {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const { Button, Card } = DS;
  const stats = [{ v: '1.204', l: 'vídeos por mês' }, { v: '+18%', l: 'fluxo estimado' }, { v: '640', l: 'visualizações por vídeo' }];
  return (
    <div style={{ padding: '80px 64px', background: 'var(--paper-100)', fontFamily: 'var(--font-body)', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: 280 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--ink-900)', marginBottom: 16 }}>Prova social de quem realmente compra.</div>
        <div style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 24 }}>Lance campanhas de incentivo, revise os vídeos antes de publicar, e acompanhe o impacto direto em tráfego e vendas.</div>
        <Button variant="primary">Falar com vendas</Button>
      </div>
      <div style={{ flex: 1, minWidth: 280, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
        {stats.map((s) => (
          <Card key={s.l}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--ink-900)' }}>{s.v}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>{s.l}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
window.ForBusiness = ForBusiness;
