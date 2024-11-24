import { useState, useEffect } from "react";

const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(storedValue);
    } else {
      setValue("");
    }
  }, [key]);

  const setLocalStorageValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return { value, setLocalStorageValue };
};

export default useLocalStorage;
