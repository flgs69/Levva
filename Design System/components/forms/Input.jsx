import React from 'react';

export function Input({ label, placeholder, value, onChange, type = 'text', error, helper }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-body)', width: '100%' }}>
      {label && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>{label}</span>}
      <input
        type={type} placeholder={placeholder} value={value} onChange={onChange}
        style={{
          padding: '11px 14px', fontSize: 'var(--text-base)', fontFamily: 'var(--font-body)',
          border: `2px solid ${error ? 'var(--danger-600)' : 'var(--border-strong)'}`, borderRadius: 'var(--radius-md)',
          background: 'var(--surface-card)', color: 'var(--text-primary)', outline: 'none',
        }}
      />
      {(error || helper) && (
        <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--danger-600)' : 'var(--text-secondary)' }}>{error || helper}</span>
      )}
    </label>
  );
}
