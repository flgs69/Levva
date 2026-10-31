function RecordScreen({ onNext, onBack }) {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const { IconButton } = DS;
  const Back = () => <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M15 18l-6-6 6-6"/></svg>;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#1a1210', fontFamily: 'var(--font-body)', color: '#fff' }}>
      <div style={{ padding: '16px 16px 0' }}>
        <IconButton icon={<Back />} label="Voltar" variant="outline" style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }} onClick={onBack} />
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>pré-visualização da câmera</div>
      <div style={{ padding: '0 0 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Toque para gravar, até 30s</div>
        <div onClick={onNext} style={{ width: 74, height: 74, borderRadius: '50%', border: '4px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <div style={{ width: 58, height: 58, borderRadius: '50%', background: 'var(--brand-coral)' }} />
        </div>
      </div>
    </div>
  );
}
window.RecordScreen = RecordScreen;
