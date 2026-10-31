function RewardScreen({ onRestart }) {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const { Button, Badge } = DS;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--surface-page)', fontFamily: 'var(--font-body)', alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16, textAlign: 'center' }}>
      <Badge tone="success">Enviado</Badge>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, lineHeight: 1.1 }}>Você está na fila.</div>
      <div style={{ color: 'var(--text-secondary)', fontSize: 14, maxWidth: 260 }}>A loja revisa os vídeos em até 24 horas. R$ 3,00 caem na sua conta assim que for aprovado.</div>
      <Button variant="outline" onClick={onRestart}>Voltar às ofertas</Button>
    </div>
  );
}
window.RewardScreen = RewardScreen;
