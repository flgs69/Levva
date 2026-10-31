function SubmitScreen({ onNext, onBack }) {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const { Input, Button } = DS;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--surface-page)', fontFamily: 'var(--font-body)', padding: 20, gap: 16 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>Adicione uma legenda</div>
      <div style={{ width: '100%', aspectRatio: '9/12', background: 'var(--ink-900)', borderRadius: 16, flexShrink: 0 }} />
      <Input placeholder="O que você comprou? Marque a loja!" />
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button variant="primary" size="lg" style={{ width: '100%' }} onClick={onNext}>Enviar por R$ 3,00</Button>
        <Button variant="ghost" size="md" style={{ width: '100%' }} onClick={onBack}>Gravar de novo</Button>
      </div>
    </div>
  );
}
window.SubmitScreen = SubmitScreen;
