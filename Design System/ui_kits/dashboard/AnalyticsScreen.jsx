function AnalyticsScreen() {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const { Card } = DS;
  const stats = [
    { label: 'Vídeos este mês', value: '1.204' },
    { label: 'Aumento estimado de fluxo', value: '+18%' },
    { label: 'Recompensas pagas', value: 'R$ 4.820' },
    { label: 'Média de visualizações/vídeo', value: '640' },
  ];
  const bars = [40, 65, 52, 80, 70, 95, 60];
  return (
    <div style={{ padding: '0 32px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {stats.map((s) => (
          <Card key={s.label}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--ink-900)' }}>{s.value}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 4 }}>{s.label}</div>
          </Card>
        ))}
      </div>
      <Card>
        <div style={{ fontWeight: 700, marginBottom: 16 }}>Vídeos enviados nos últimos 7 dias</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 140 }}>
          {bars.map((b, i) => (
            <div key={i} style={{ flex: 1, height: `${b}%`, background: i === 5 ? 'var(--brand-coral)' : 'var(--paper-200)', borderRadius: '6px 6px 0 0' }} />
          ))}
        </div>
      </Card>
    </div>
  );
}
window.AnalyticsScreen = AnalyticsScreen;
