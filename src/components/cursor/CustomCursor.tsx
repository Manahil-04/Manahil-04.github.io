import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useIsFinePointer } from '../../hooks/useIsFinePointer';
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe';

type CursorVariant = 'default' | 'link' | 'button' | 'project' | 'text';

export function CustomCursor() {
  const isFinePointer = useIsFinePointer();
  const prefersReducedMotion = useReducedMotionSafe();
  const { x, y } = useMousePosition();
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [label, setLabel] = useState<string | null>(null);

  const springConfig = prefersReducedMotion
    ? { damping: 100, stiffness: 1000 }
    : { damping: 25, stiffness: 300 };
  const ringX = useSpring(x, springConfig);
  const ringY = useSpring(y, springConfig);

  useEffect(() => {
    document.body.classList.toggle('cursor-none', isFinePointer);
    return () => document.body.classList.remove('cursor-none');
  }, [isFinePointer]);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>('[data-cursor]');
      if (!target) return;
      setVariant((target.dataset.cursor as CursorVariant) ?? 'default');
      setLabel(target.dataset.cursorLabel ?? null);
    };
    const handleOut = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>('[data-cursor]');
      if (!target) return;
      setVariant('default');
      setLabel(null);
    };

    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    return () => {
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  const ringSize = variant === 'project' ? 72 : variant === 'button' || variant === 'link' ? 48 : 32;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-ink"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center
          rounded-full border-2 border-ink bg-transparent mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
        }}
        animate={{ width: ringSize, height: ringSize }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {label && (
          <span className="font-mono text-[10px] uppercase tracking-wide text-ink whitespace-nowrap">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
