function OfferScreen({ onNext }) {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const { Button, Badge } = DS;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--surface-page)', fontFamily: 'var(--font-body)' }}>
      <div style={{ background: 'var(--brand-coral)', padding: '28px 20px 40px', color: 'var(--paper-0)' }}>
        <Badge tone="neutral">Shopping Riverside</Badge>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, marginTop: 14, lineHeight: 1.05 }}>Tem 30 segundos?</div>
        <div style={{ fontSize: 15, marginTop: 8, opacity: 0.9 }}>Mostra sua compra na Zara e ganha R$ 3 de volta.</div>
      </div>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div style={{ background: 'var(--surface-card)', border: '2px solid var(--border-strong)', borderRadius: 16, boxShadow: 'var(--shadow-flat-md)', padding: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>O que fazer</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 6 }}>Grave um vídeo curto sobre o que você acabou de comprar. Seja natural, sem roteiro.</div>
        </div>
        <div style={{ background: 'var(--surface-card)', border: '2px solid var(--border-strong)', borderRadius: 16, boxShadow: 'var(--shadow-flat-md)', padding: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>O que você ganha</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 6 }}>R$ 3,00 de crédito na loja, enviado em até 24 horas após a aprovação.</div>
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <Button variant="primary" size="lg" style={{ width: '100%' }} onClick={onNext}>Começar a gravar</Button>
      </div>
    </div>
  );
}
window.OfferScreen = OfferScreen;
