function Hero() {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const { Button } = DS;
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-page)', padding: '80px 64px', display: 'flex', flexDirection: 'column', gap: 28, fontFamily: 'var(--font-body)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(../../assets/brand/pattern-geometric.svg)', backgroundSize: 90, opacity: 0.25 }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="../../assets/brand/logomark-coral.svg" style={{ width: 36, height: 36 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--ink-900)' }}>MONI</span>
      </div>
      <div style={{ position: 'relative', maxWidth: 720 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, lineHeight: 1.05, color: 'var(--ink-900)', letterSpacing: '-0.02em' }}>Transformando compradores em criadores.</div>
        <div style={{ fontSize: 18, color: 'var(--text-secondary)', marginTop: 20 }}>MONI paga clientes reais para gravar vídeos sobre o que compraram e transforma isso em alcance, tráfego e vendas para lojas de shopping.</div>
      </div>
      <div style={{ position: 'relative', display: 'flex', gap: 12 }}>
        <Button variant="primary" size="lg">Baixar o app</Button>
        <Button variant="outline" size="lg">Sou lojista</Button>
      </div>
    </div>
  );
}
window.Hero = Hero;
