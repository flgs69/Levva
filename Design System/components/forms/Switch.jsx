import React from 'react';

export function Switch({ checked, onChange, label }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
      <span
        onClick={onChange}
        style={{
          width: 44, height: 26, borderRadius: 'var(--radius-pill)', border: '2px solid var(--border-strong)',
          background: checked ? 'var(--brand-coral)' : 'var(--paper-100)', position: 'relative', transition: `all var(--duration-fast) var(--ease-snap)`,
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: checked ? 20 : 2, width: 18, height: 18, borderRadius: '50%',
          background: 'var(--ink-900)', transition: `all var(--duration-fast) var(--ease-snap)`,
        }} />
      </span>
      {label && <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
