import React, { createContext, useContext, useState } from 'react';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    terciary: string;
    white: string;
    black: string;
    gray: string;
    success: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const storagedTheme = localStorage.getItem('@minha-carteira:theme');
    if (storagedTheme) {
      return JSON.parse(storagedTheme);
    }
    return dark;
  });
  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('@minha-carteira:theme', JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem('@minha-carteira:theme', JSON.stringify(dark));
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
