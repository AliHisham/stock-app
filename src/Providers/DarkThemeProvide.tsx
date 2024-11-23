import { createContext, useState, ReactNode, useEffect } from "react";

type ThemeContextType = {
  theme: boolean;
  setTheme: () => void;
};

type DarkThemeProvideProps = {
  children: ReactNode;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: true,
  setTheme: () => {},
});

const DarkLightThemeProvider = ({ children }: DarkThemeProvideProps) => {
  const [isDark, setTheme] = useState<boolean>(true);
  const setThemeMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setTheme((prev) => !prev);
  };
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <ThemeContext.Provider value={{ theme: isDark, setTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default DarkLightThemeProvider;
