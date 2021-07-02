import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [open, setOpen] = useState(initialValue);

  const toggle = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  return { open, toggle };
};

export default useToggle;
