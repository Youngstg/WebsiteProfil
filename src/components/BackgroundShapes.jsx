export default function BackgroundShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Tall wavy line (snake) flowing from top to bottom */}
      <svg
        className="absolute top-0 w-full"
        style={{ height: '6000px' }}
        viewBox="0 0 1000 6000"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 500 0 
             C 1200 500, -200 1000, 500 1500
             C 1200 2000, -200 2500, 500 3000
             C 1200 3500, -200 4000, 500 4500
             C 1200 5000, -200 5500, 500 6000"
          stroke="rgba(30, 75, 100, 0.15)"
          strokeWidth="40"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
