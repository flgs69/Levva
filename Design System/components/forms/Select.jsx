import React from 'react';

export function Select({ label, options = [], value, onChange }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', width: '100%' }}>
      {label && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>{label}</span>}
      <select
        value={value} onChange={onChange}
        style={{
          padding: '11px 14px', fontSize: 'var(--text-base)', fontFamily: 'var(--font-body)',
          border: '2px solid var(--border-strong)', borderRadius: 'var(--radius-md)',
          background: 'var(--surface-card)', color: 'var(--text-primary)', outline: 'none',
        }}
      >
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}
