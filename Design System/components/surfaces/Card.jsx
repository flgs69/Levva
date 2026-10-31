import React from 'react';

export function Card({ children, flat = true, padding = 'var(--space-6)', style }) {
  return (
    <div style={{
      background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
      border: '2px solid var(--border-strong)',
      boxShadow: flat ? 'var(--shadow-flat-md)' : 'var(--shadow-soft-md)',
      padding, ...style,
    }}>
      {children}
    </div>
  );
}
