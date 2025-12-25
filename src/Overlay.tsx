import { boxPosition } from "./types";

type Props = {
  winningPositions: boxPosition[] | null;
};

function posToPercent(pos: boxPosition) {
  const arr = Array.isArray(pos)
    ? pos.map(Number)
    : pos.toString().split(",").map(Number);
  const i = arr[0] || 1;
  const j = arr[1] || 1;
  const centerOffset = 100 / 6; // ~16.6667
  const step = 100 / 3; // 33.3333
  const x = centerOffset + (j - 1) * step;
  const y = centerOffset + (i - 1) * step;
  return { x, y };
}

export default function Overlay({ winningPositions }: Props) {
  if (!winningPositions || winningPositions.length < 2) return null;

  const start = winningPositions[0];
  const end = winningPositions[2] || winningPositions[1];
  const a = posToPercent(start);
  const b = posToPercent(end);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke="var(--accent)"
          strokeWidth={6}
          strokeLinecap="round"
          filter="url(#glow)"
        />

        <line
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke="rgba(3,10,20,0.9)"
          strokeWidth={2}
          strokeLinecap="round"
          opacity={0.18}
        />

        <circle
          cx={a.x}
          cy={a.y}
          r={2.4}
          fill="var(--accent)"
          filter="url(#glow)"
        />
        <circle
          cx={b.x}
          cy={b.y}
          r={2.4}
          fill="var(--accent)"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}
