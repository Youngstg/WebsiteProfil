export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 max-w-[100vw] ambient-glow-bg" aria-hidden="true">
      {/* Top right gold subtle aura */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold-600/8 blur-[120px]" />
      
      {/* Mid-screen warm gold aura */}
      <div className="absolute top-[40%] -left-40 w-[500px] h-[500px] rounded-full bg-amber-600/6 blur-[140px]" />
      
      {/* Bottom screen gold aura */}
      <div className="absolute bottom-0 right-[20%] w-[600px] h-[600px] rounded-full bg-gold-500/6 blur-[130px]" />

      {/* Subtle fine dot matrix pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />
    </div>
  );
}
