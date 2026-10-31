import React from 'react';

export function Tag({ children, onRemove, selected = false, onClick }) {
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px',
        borderRadius: 'var(--radius-pill)', border: `2px solid ${selected ? 'var(--ink-900)' : 'var(--border-default)'}`,
        background: selected ? 'var(--ink-900)' : 'var(--surface-card)', color: selected ? 'var(--text-inverse)' : 'var(--text-primary)',
        fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)',
        cursor: onClick ? 'pointer' : 'default', transition: `all var(--duration-fast) var(--ease-snap)`,
      }}
    >
      {children}
      {onRemove && (
        <span onClick={(e) => { e.stopPropagation(); onRemove(); }} style={{ opacity: 0.6, fontWeight: 700 }}>×</span>
      )}
    </span>
  );
}
