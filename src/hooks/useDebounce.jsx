import { useEffect, useState } from 'react';

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);

      return () => clearTimeout(id);
    }, delay);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
