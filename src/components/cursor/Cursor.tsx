import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useIsFinePointer } from '../../hooks/useIsFinePointer';
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe';

type Variant = 'default' | 'link' | 'button';

// Critically damped — settles fast with no overshoot, per the "precision instrument,
// not a bouncy toy" brief. Governs every size change (hover, press, release).
const SCALE_SPRING = { type: 'spring' as const, stiffness: 520, damping: 42, mass: 0.4 };

// Slightly looser than the scale spring — just enough give for the ring to feel
// like it's catching up to the point, without being slow enough to distract.
const TRAIL_SPRING = { type: 'spring' as const, stiffness: 450, damping: 40, mass: 0.3 };

// Near-instant: keeps the ring glued to the point when motion should be reduced.
const SNAP_SPRING = { type: 'spring' as const, stiffness: 1000, damping: 80, mass: 0.4 };

const RING_SIZE = 28;
const DOT_SIZE = 6;

export function Cursor() {
  const isFinePointer = useIsFinePointer();
  const prefersReducedMotion = useReducedMotionSafe();
  const { x, y } = useMousePosition();
  const [variant, setVariant] = useState<Variant>('default');
  const [pressed, setPressed] = useState(false);
  const pressTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // The point sits exactly on the raw pointer position — always precise.
  // The ring follows a softer spring, so it drifts a beat behind on fast
  // moves and settles back around the point when it stops.
  const trailConfig = prefersReducedMotion ? SNAP_SPRING : TRAIL_SPRING;
  const ringX = useSpring(x, trailConfig);
  const ringY = useSpring(y, trailConfig);

  const ringScale = useSpring(1, SCALE_SPRING);
  const dotScale = useSpring(1, SCALE_SPRING);

  useEffect(() => {
    if (prefersReducedMotion) return;
    ringScale.set(pressed ? 0.65 : 1);
    dotScale.set(pressed ? 2 : variant === 'default' ? 1 : 1.5);
  }, [variant, pressed, ringScale, dotScale, prefersReducedMotion]);

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

  return (
    <>
      {/* Ring — trails a beat behind the point, contracts on press. */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border"
          style={{
            width: RING_SIZE,
            height: RING_SIZE,
            borderColor: 'rgb(var(--color-text) / 0.5)',
            borderWidth: variant === 'button' ? 1.5 : 1.25,
            scale: ringScale,
          }}
        />
      </motion.div>

      {/* Point — locked exactly to the pointer, the one spot of color. Uses the
          --color-primary token (dark slate in light mode, a soft blue in dark
          mode) rather than the accent red, so it never fights the accent. */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full"
          style={{
            width: DOT_SIZE,
            height: DOT_SIZE,
            background: 'rgb(var(--color-primary))',
            scale: dotScale,
          }}
        />
      </motion.div>
    </>
  );
}
