import React from 'react';

export function Radio({ label, checked, onChange, name }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', cursor: 'pointer' }}>
      <span style={{
        width: 20, height: 20, borderRadius: '50%', border: '2px solid var(--border-strong)',
        background: 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {checked && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--brand-coral)' }} />}
      </span>
      <input type="radio" name={name} checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{label}</span>
    </label>
  );
}
