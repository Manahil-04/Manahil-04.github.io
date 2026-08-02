interface CompassMarkProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function CompassMark({ size = 32, className }: CompassMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="20" cy="20" r="18" stroke="rgb(var(--color-secondary))" strokeWidth="1" opacity="0.55" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
      {[0, 90, 180, 270].map((angle) => (
        <line
          key={angle}
          x1="20"
          y1="20"
          x2="20"
          y2="4"
          stroke="rgb(var(--color-secondary))"
          strokeWidth="1"
          opacity="0.6"
          transform={`rotate(${angle} 20 20)`}
        />
      ))}
      <path d="M20 7 L23 20 L20 33 L17 20 Z" fill="rgb(var(--color-accent))" opacity="0.9" />
    </svg>
  );
}
