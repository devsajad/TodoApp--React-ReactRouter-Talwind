import { useEffect, useState } from "react";

export function useLocalStorageState(initialValue, key) {
  const [stateValue, setStateValue] = useState(() => {
    const watchedLocal = JSON.parse(localStorage.getItem(key));
    return watchedLocal || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(stateValue));
  }, [stateValue, key]);

  return [stateValue, setStateValue];
}
