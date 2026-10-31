import React from 'react';

export function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', cursor: 'pointer' }}>
      <span style={{
        width: 20, height: 20, borderRadius: 6, border: '2px solid var(--border-strong)',
        background: checked ? 'var(--ink-900)' : 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: `all var(--duration-fast) var(--ease-snap)`,
      }}>
        {checked && <span style={{ width: 8, height: 8, background: 'var(--brand-coral)', borderRadius: 2 }} />}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{label}</span>
    </label>
  );
}
