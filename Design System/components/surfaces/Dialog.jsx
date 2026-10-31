import React from 'react';

export function Dialog({ open, title, children, onClose, footer }) {
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,18,16,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <div style={{
        width: 420, background: 'var(--surface-card)', border: '2px solid var(--border-strong)',
        borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-flat-lg)', padding: 'var(--space-6)',
        fontFamily: 'var(--font-body)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>{title}</h3>
          <span onClick={onClose} style={{ cursor: 'pointer', fontSize: 20, color: 'var(--text-secondary)' }}>×</span>
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{children}</div>
        {footer && <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 20 }}>{footer}</div>}
      </div>
    </div>
  );
}
