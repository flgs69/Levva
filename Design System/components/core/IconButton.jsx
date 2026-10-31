import React from 'react';

const sizeMap = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon, size = 'md', variant = 'outline', label = '', onClick, style }) {
  const px = sizeMap[size] || 40;
  const [hover, setHover] = React.useState(false);
  const styles = {
    solid: { background: 'var(--ink-900)', color: 'var(--text-inverse)', border: '2px solid var(--ink-900)' },
    outline: { background: 'var(--surface-card)', color: 'var(--ink-900)', border: '2px solid var(--border-strong)' },
  };
  return (
    <button
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: px, height: px, borderRadius: 'var(--radius-md)', display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        transition: `all var(--duration-fast) var(--ease-snap)`,
        filter: hover ? 'brightness(0.94)' : 'none',
        ...(styles[variant] || styles.outline), ...style,
      }}
    >
      {icon}
    </button>
  );
}
