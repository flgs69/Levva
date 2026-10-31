function ReviewScreen() {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const { Card, Button, Tabs } = DS;
  const [tab, setTab] = React.useState('pending');
  const queue = [
    { shopper: 'Jordan M.', store: 'Zara', caption: 'Provando as novidades que chegaram', amount: 'R$ 3,00' },
    { shopper: 'Priya K.', store: 'Sephora', caption: 'Testando o novo fixador de maquiagem o dia todo no shopping', amount: 'R$ 8,00' },
    { shopper: 'Diego R.', store: 'Todas as lojas', caption: 'O que comprei por R$ 50 no Riverside este fim de semana', amount: 'R$ 5,00' },
  ];
  const Play = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>;
  return (
    <div style={{ padding: '0 32px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Tabs items={[{ label: 'Pendentes (3)', value: 'pending' }, { label: 'Aprovados', value: 'approved' }, { label: 'Rejeitados', value: 'rejected' }]} active={tab} onChange={setTab} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {queue.map((q) => (
          <Card key={q.shopper} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 64, height: 88, background: 'var(--ink-900)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--paper-0)', flexShrink: 0 }}><Play /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{q.shopper} <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>· {q.store}</span></div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 4, maxWidth: 420 }}>{q.caption}</div>
            </div>
            <div style={{ fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{q.amount}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button variant="outline" size="sm">Rejeitar</Button>
              <Button variant="primary" size="sm">Aprovar</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
window.ReviewScreen = ReviewScreen;
