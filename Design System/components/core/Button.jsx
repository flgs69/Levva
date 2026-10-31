import React from 'react';

const sizes = {
  sm: { padding: '8px 14px', fontSize: 'var(--text-sm)', gap: 6 },
  md: { padding: '11px 20px', fontSize: 'var(--text-base)', gap: 8 },
  lg: { padding: '15px 26px', fontSize: 'var(--text-md)', gap: 10 },
};

const variants = {
  primary: { background: 'var(--brand-coral)', color: 'var(--text-inverse)', border: '2px solid var(--brand-coral)' },
  secondary: { background: 'var(--ink-900)', color: 'var(--text-inverse)', border: '2px solid var(--ink-900)' },
  outline: { background: 'transparent', color: 'var(--ink-900)', border: '2px solid var(--border-strong)' },
  ghost: { background: 'transparent', color: 'var(--ink-900)', border: '2px solid transparent' },
};

export function Button({ variant = 'primary', size = 'md', disabled = false, icon = null, children, onClick, style }) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
        padding: s.padding, fontSize: s.fontSize, fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)',
        borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, transition: `all var(--duration-fast) var(--ease-snap)`,
        transform: hover && !disabled ? 'translateY(-1px)' : 'none',
        filter: hover && !disabled ? 'brightness(0.94)' : 'none',
        ...v, ...style,
      }}
    >
      {icon}
      {children}
    </button>
  );
}
