function Manifesto() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink-900)', padding: '80px 64px', fontFamily: 'var(--font-body)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(../../assets/brand/pattern-organic-dark.svg)', backgroundSize: 220, opacity: 0.35 }} />
      <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto', color: 'var(--paper-0)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--brand-coral)', marginBottom: 20 }}>Manifesto</div>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30, lineHeight: 1.4, margin: '0 0 20px' }}>Todo mundo compra. Poucos contam pra alguém.</p>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--paper-100)', margin: '0 0 16px' }}>Um vídeo de 30 segundos de quem realmente comprou vale mais do que qualquer anúncio, porque quem fala ali é cliente, não vendedor.</p>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--paper-100)', margin: '0 0 16px' }}>A MONI existe pra transformar isso em negócio. Sem atores, sem roteiro, sem post patrocinado.</p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: 0 }}>Não vendemos anúncio. Vendemos gente contando pra gente o que vale a pena comprar.</p>
      </div>
    </div>
  );
}
window.Manifesto = Manifesto;
