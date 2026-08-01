import { useReducedMotion } from 'framer-motion';

/** Thin wrapper kept as a single import site in case the reduced-motion strategy changes later. */
export function useReducedMotionSafe() {
  return useReducedMotion() ?? false;
}
