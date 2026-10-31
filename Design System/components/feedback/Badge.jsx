import React from 'react';

const tones = {
  neutral: { background: 'var(--ink-900)', color: 'var(--text-inverse)' },
  coral: { background: 'var(--brand-coral)', color: 'var(--text-inverse)' },
  success: { background: 'var(--success-100)', color: 'var(--success-600)' },
  warning: { background: 'var(--warning-100)', color: 'var(--warning-600)' },
  danger: { background: 'var(--danger-100)', color: 'var(--danger-600)' },
  info: { background: 'var(--info-100)', color: 'var(--info-600)' },
};

export function Badge({ tone = 'neutral', children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '4px 10px',
      borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
      ...(tones[tone] || tones.neutral),
    }}>{children}</span>
  );
}
