function CampaignsScreen() {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const { Card, Button, Badge } = DS;
  const campaigns = [
    { name: 'Desafio da Compra do Fim de Semana', store: 'Todas as lojas', reward: 'R$ 5', status: 'Ativa', tone: 'success', videos: 214 },
    { name: 'Provando as Novidades', store: 'Zara, Piso 1', reward: 'R$ 3', status: 'Ativa', tone: 'success', videos: 88 },
    { name: 'Volta às Aulas', store: 'Todas as lojas', reward: 'R$ 10', status: 'Agendada', tone: 'info', videos: 0 },
    { name: 'Buzz da Inauguração', store: 'Sephora, Piso 2', reward: 'R$ 8', status: 'Encerrada', tone: 'neutral', videos: 341 },
  ];
  return (
    <div style={{ padding: '0 32px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="primary">+ Nova campanha</Button>
      </div>
      <Card padding="0" style={{ overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.3fr 0.8fr 1fr 0.8fr', gap: 12, padding: '12px 20px', background: 'var(--surface-sunken)', fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          <div>Campanha</div><div>Escopo</div><div>Recompensa</div><div>Status</div><div>Vídeos</div>
        </div>
        {campaigns.map((c) => (
          <div key={c.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1.3fr 0.8fr 1fr 0.8fr', gap: 12, padding: '16px 20px', borderTop: '1px solid var(--border-default)', alignItems: 'center', fontSize: 14 }}>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{c.name}</div>
            <div style={{ color: 'var(--text-secondary)' }}>{c.store}</div>
            <div style={{ color: 'var(--text-secondary)' }}>{c.reward}</div>
            <div><Badge tone={c.tone}>{c.status}</Badge></div>
            <div style={{ color: 'var(--text-secondary)' }}>{c.videos}</div>
          </div>
        ))}
      </Card>
    </div>
  );
}
window.CampaignsScreen = CampaignsScreen;
