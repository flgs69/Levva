import React from 'react';

export function Tooltip({ label, children }) {
  const [show, setShow] = React.useState(false);
  return (
    <span style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span style={{
          position: 'absolute', bottom: '120%', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--ink-900)', color: 'var(--text-inverse)', padding: '6px 10px', borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--text-xs)', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap', zIndex: 10,
        }}>{label}</span>
      )}
    </span>
  );
}
