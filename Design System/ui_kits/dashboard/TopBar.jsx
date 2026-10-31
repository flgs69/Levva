function TopBar({ title, subtitle, action }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '28px 32px 20px', fontFamily: 'var(--font-body)' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--ink-900)', letterSpacing: '-0.02em' }}>{title}</div>
        {subtitle && <div style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 4 }}>{subtitle}</div>}
      </div>
      {action}
    </div>
  );
}

window.TopBar = TopBar;
