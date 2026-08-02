import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useIsFinePointer } from '../../hooks/useIsFinePointer';
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe';

type Variant = 'default' | 'link' | 'button';

// Critically damped — settles fast with no overshoot, per the "precision instrument,
// not a bouncy toy" brief. This governs every state change (hover, press, release).
const INSTRUMENT_SPRING = { type: 'spring' as const, stiffness: 520, damping: 42, mass: 0.4 };

const STAR_ANGLES = [0, 90, 180, 270];

interface StarPointProps {
  angle: number;
  length: number;
  halfWidth: number;
}

function starPath(length: number, halfWidth: number) {
  const hipY = -length * 0.4;
  return `M 0 ${-length} L ${halfWidth} ${hipY} L 0 0 L ${-halfWidth} ${hipY} Z`;
}

function StarPoint({ angle, length, halfWidth, shadow }: StarPointProps & { shadow?: boolean }) {
  return (
    <path
      d={starPath(length, halfWidth)}
      fill={shadow ? 'rgb(0 0 0 / 0.45)' : 'rgb(var(--color-text))'}
      stroke={shadow ? 'none' : 'rgb(var(--color-bg) / 0.45)'}
      strokeWidth="0.4"
      transform={`rotate(${angle})`}
    />
  );
}

export function Cursor() {
  const isFinePointer = useIsFinePointer();
  const prefersReducedMotion = useReducedMotionSafe();
  const { x, y } = useMousePosition();
  const [variant, setVariant] = useState<Variant>('default');
  const [pressed, setPressed] = useState(false);
  const pressTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const scale = useSpring(1, INSTRUMENT_SPRING);
  const rotate = useSpring(0, INSTRUMENT_SPRING);
  // Rests at a permanent tilt (like a coin sitting at an angle) so the cursor always reads as
  // a dimensional object, not just a flat icon that briefly tilts on hover. State changes shift
  // the tilt further — never tied to movement velocity, so it stays rigid while traveling.
  const rotateX = useSpring(22, INSTRUMENT_SPRING);
  const rotateY = useSpring(-16, INSTRUMENT_SPRING);

  useEffect(() => {
    if (prefersReducedMotion) return;
    scale.set(pressed ? 0.95 : variant === 'link' ? 1.12 : variant === 'button' ? 1.08 : 1);
    rotate.set(!pressed && variant === 'link' ? 4 : 0);
    if (pressed) {
      rotateX.set(34);
      rotateY.set(-16);
    } else if (variant === 'link') {
      rotateX.set(6);
      rotateY.set(14);
    } else if (variant === 'button') {
      rotateX.set(-13);
      rotateY.set(-6);
    } else {
      rotateX.set(22);
      rotateY.set(-16);
    }
  }, [variant, pressed, scale, rotate, rotateX, rotateY, prefersReducedMotion]);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleOver = (event: MouseEvent) => {
      const el = (event.target as HTMLElement).closest<HTMLElement>('[data-cursor]');
      if (!el) return;
      setVariant((el.dataset.cursor as Variant) ?? 'default');
    };
    const handleOut = (event: MouseEvent) => {
      const el = (event.target as HTMLElement).closest<HTMLElement>('[data-cursor]');
      if (!el) return;
      setVariant('default');
    };
    const handleDown = () => {
      setPressed(true);
      clearTimeout(pressTimeout.current);
      pressTimeout.current = setTimeout(() => setPressed(false), 80);
    };

    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    document.addEventListener('mousedown', handleDown);
    return () => {
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      document.removeEventListener('mousedown', handleDown);
      clearTimeout(pressTimeout.current);
    };
  }, [isFinePointer]);

  useEffect(() => {
    document.body.classList.toggle('cursor-none', isFinePointer);
    return () => document.body.classList.remove('cursor-none');
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  const isButtonHover = variant === 'button' && !pressed;
  const isAnyHover = variant !== 'default' && !pressed;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      {/* Tiny halo — any clickable hover (link or button), kept subtle (no neon). */}
      <div
        className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ease-out"
        style={{
          background: 'radial-gradient(circle, rgb(var(--color-bg) / 0.65) 0%, transparent 72%)',
          opacity: isAnyHover ? 1 : 0,
        }}
      />
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        style={{
          scale,
          rotate,
          rotateX,
          rotateY,
          transformPerspective: 220,
          filter: isButtonHover
            ? 'drop-shadow(1.5px 3px 2.2px rgba(0, 0, 0, 0.55)) brightness(1.1)'
            : 'drop-shadow(1.5px 2.6px 2px rgba(0, 0, 0, 0.48))',
        }}
        className="block transition-[filter] duration-150 ease-out"
      >
        <defs>
          {/* Fixed upper-left light source so the bevel reads as real lighting rather than a
              flat cutout — this is what actually sells "3D" at a glance, more than the tilt does. */}
          <linearGradient id="starBevel" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0.55" />
            <stop offset="42%" stopColor="white" stopOpacity="0" />
            <stop offset="58%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        <g transform="translate(12 12)">
          {/* Extruded depth face — a darker offset echo of the star peeking out from behind
              the main shape, so the tilt reads as a solid 3D object instead of a flat cutout. */}
          <g transform="translate(2 2.6)">
            {STAR_ANGLES.map((angle) => (
              <StarPoint key={`shadow-${angle}`} angle={angle} length={11.5} halfWidth={2.1} shadow />
            ))}
          </g>
          {STAR_ANGLES.map((angle) => (
            <StarPoint key={angle} angle={angle} length={11.5} halfWidth={2.1} />
          ))}
          {/* Bevel overlay: same silhouette, lit from the upper-left, shaded at the lower-right. */}
          <g style={{ mixBlendMode: 'overlay' }}>
            {STAR_ANGLES.map((angle) => (
              <path key={`bevel-${angle}`} d={starPath(11.5, 2.1)} fill="url(#starBevel)" transform={`rotate(${angle})`} />
            ))}
          </g>
          {/* Tiny accent — the only spot of color, kept under 5% of the silhouette. */}
          <circle cx="0" cy="0" r="1.4" fill="rgb(var(--color-accent))" stroke="rgb(var(--color-bg) / 0.45)" strokeWidth="0.4" />
        </g>
      </motion.svg>
    </motion.div>
  );
}
