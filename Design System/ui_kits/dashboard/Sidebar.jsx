function Sidebar({ active, onNav }) {
  const items = [
    { key: 'campaigns', label: 'Campanhas' },
    { key: 'review', label: 'Fila de revisão' },
    { key: 'analytics', label: 'Análises' },
    { key: 'settings', label: 'Configurações' },
  ];
  return (
    <div style={{ width: 220, minWidth: 220, background: 'var(--ink-900)', height: '100%', display: 'flex', flexDirection: 'column', padding: '24px 16px', gap: 4, fontFamily: 'var(--font-body)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--paper-0)', marginBottom: 24, letterSpacing: '-0.02em' }}>MONI</div>
      {items.map((it) => (
        <div key={it.key} onClick={() => onNav(it.key)} style={{
          padding: '10px 14px', borderRadius: 10, cursor: 'pointer', fontSize: 14, fontWeight: 600,
          color: active === it.key ? 'var(--ink-900)' : 'var(--paper-100)',
          background: active === it.key ? 'var(--brand-coral)' : 'transparent',
        }}>{it.label}</div>
      ))}
      <div style={{ marginTop: 'auto', fontSize: 12, color: 'var(--ink-300)' }}>Shopping Riverside</div>
    </div>
  );
}
window.Sidebar = Sidebar;
