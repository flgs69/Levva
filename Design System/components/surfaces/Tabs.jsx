import React from 'react';

export function Tabs({ items = [], active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 4, borderBottom: '2px solid var(--border-default)', fontFamily: 'var(--font-body)' }}>
      {items.map((it) => (
        <div
          key={it.value} onClick={() => onChange && onChange(it.value)}
          style={{
            padding: '10px 16px', cursor: 'pointer', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)',
            color: active === it.value ? 'var(--ink-900)' : 'var(--text-secondary)',
            borderBottom: `3px solid ${active === it.value ? 'var(--brand-coral)' : 'transparent'}`,
            marginBottom: -2,
          }}
        >{it.label}</div>
      ))}
    </div>
  );
}
