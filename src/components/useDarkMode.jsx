import { useLayoutEffect, useState } from 'react';

export const useDarkMode = () => {
const [theme, setTheme] = useState('dark');
const [mountedComponent, setMountedComponent] = useState(false)

const setMode = mode => {
  window.localStorage.setItem('theme', mode)
  setTheme(mode)
};

const toggleTheme = () => {
  theme === 'light' ? setMode('dark') : setMode('light') 
};

useLayoutEffect(() => {
  const localTheme = window.localStorage.getItem('theme');
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
      setMode('dark') :
      localTheme ? 
        setTheme(localTheme) : 
        setMode('light')
  setMountedComponent(true)
}, []);

return [theme, toggleTheme, mountedComponent]
};
