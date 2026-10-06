export default function Bike({ variant = 0, label }) {
  const tank = ["M150 80 Q195 56 246 76 L238 102 Q192 110 146 102Z", "M140 84 Q190 70 240 82 L232 104 Q190 100 144 104Z", "M155 76 Q200 52 250 78 L240 104 Q195 112 150 102Z"][variant % 3];
  return (
    <svg className="block w-full px-6 pt-8 pb-4" viewBox="0 0 400 220" role="img" aria-label={label || "Motorcycle illustration"} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {[80, 320].map((x) => (
        <g key={x}><circle cx={x} cy="150" r="52" />
          <g className="wheel" style={{ transformOrigin: `${x}px 150px` }}>
            <circle cx={x} cy="150" r="38" strokeWidth="1" />
            <path strokeWidth="1" d={`M${x} 112V188M${x - 38} 150H${x + 38}M${x - 27} 123L${x + 27} 177M${x + 27} 123L${x - 27} 177`} />
          </g><circle cx={x} cy="150" r="6" /></g>
      ))}
      <path d={tank} className="tank" /><path d="M92 94 Q122 82 150 92 L146 102 L96 106Z" />
      <path d="M268 70 L320 150M256 66 L288 56M80 150 L126 104 L166 124 L212 150M80 150 L174 142" />
      <rect x="150" y="108" width="72" height="40" rx="4" /><path d="M172 150 Q120 170 62 160" />
    </svg>
  );
}
