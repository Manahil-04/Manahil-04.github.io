import { useEffect, useState } from 'react';

export function useIsFinePointer() {
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)');
    setIsFinePointer(query.matches);

    const handleChange = (event: MediaQueryListEvent) => setIsFinePointer(event.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return isFinePointer;
}
