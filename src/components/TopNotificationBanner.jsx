export default function TopNotificationBanner() {
  return (
    <div className="w-full bg-obsidian-850/90 border-b border-gold-600/20 text-xs py-2 px-4 text-center text-slate-300 relative z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-medium text-[11px] sm:text-xs text-slate-300">
          Available for Software Engineer &amp; AI Engineering roles • <span className="text-gold-300 font-semibold">GPA 3.77</span> ITERA Fresh Graduate
        </span>
      </div>
    </div>
  );
}

