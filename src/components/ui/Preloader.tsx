import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CompassMark } from './CompassMark';
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe';

const SESSION_KEY = 'portfolio-loaded';

export function Preloader() {
  const prefersReducedMotion = useReducedMotionSafe();
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(SESSION_KEY));

  useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem(SESSION_KEY, '1');
    const timer = setTimeout(() => setVisible(false), prefersReducedMotion ? 300 : 1400);
    return () => clearTimeout(timer);
  }, [visible, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { rotate: -75, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-primary"
          >
            <CompassMark size={56} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
