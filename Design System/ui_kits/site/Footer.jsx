function SiteFooter() {
  return (
    <div style={{ padding: '32px 64px', background: 'var(--ink-900)', color: 'var(--paper-300, var(--ink-300))', fontFamily: 'var(--font-body)', fontSize: 13, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src="../../assets/brand/logomark-paper.svg" style={{ width: 20, height: 20 }} />
        <span style={{ color: 'var(--paper-0)', fontWeight: 700 }}>MONI</span>
      </div>
      <div>© 2026 MONI Shopping</div>
    </div>
  );
}
window.SiteFooter = SiteFooter;
