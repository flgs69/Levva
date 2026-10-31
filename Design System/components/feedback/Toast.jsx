import React from 'react';

export function Toast({ tone = 'neutral', title, description, onClose }) {
  const accents = { neutral: 'var(--ink-900)', success: 'var(--success-600)', warning: 'var(--warning-600)', danger: 'var(--danger-600)' };
  return (
    <div style={{
      display: 'flex', gap: 12, alignItems: 'flex-start', width: 340, padding: '14px 16px',
      background: 'var(--surface-card)', border: '2px solid var(--border-strong)', borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-flat-md)',
    }}>
      <div style={{ width: 4, alignSelf: 'stretch', borderRadius: 2, background: accents[tone] || accents.neutral }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{title}</div>
        {description && <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 4 }}>{description}</div>}
      </div>
      {onClose && <span onClick={onClose} style={{ cursor: 'pointer', color: 'var(--text-secondary)', fontWeight: 700 }}>×</span>}
    </div>
  );
}
