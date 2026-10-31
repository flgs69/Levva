function HowItWorks() {
  const steps = [
    { n: '1', t: 'Compre', d: 'Faça uma compra em qualquer loja participante do shopping.' },
    { n: '2', t: 'Grave', d: 'Grave um vídeo de até 30 segundos mostrando o que comprou.' },
    { n: '3', t: 'Receba', d: 'Envie no app e receba a recompensa em até 24 horas.' },
  ];
  return (
    <div style={{ padding: '80px 64px', background: 'var(--surface-page)', fontFamily: 'var(--font-body)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--ink-900)', textAlign: 'center', marginBottom: 48 }}>Como funciona</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, maxWidth: 900, margin: '0 auto' }}>
        {steps.map((s) => (
          <div key={s.n} style={{ textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--ink-900)', color: 'var(--paper-0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, margin: '0 auto 16px' }}>{s.n}</div>
            <div style={{ fontWeight: 700, fontSize: 17, color: 'var(--ink-900)', marginBottom: 8 }}>{s.t}</div>
            <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{s.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.HowItWorks = HowItWorks;
