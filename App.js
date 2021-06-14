import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { ThemeContext } from './src/constant/ThemeContext';
import Router from './Router';
import { default as lightTheme  } from './src/constant/light_theme.json';
import { default as darkTheme } from './src/constant/dark_theme.json';

export default () => {

  const [theme, setTheme] = React.useState('light');
  const [iscustomTheme,setCustomeTheme] = React.useState(lightTheme);
 
  

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if(nextTheme==='light'){
      setCustomeTheme(lightTheme);
    }else{
      setCustomeTheme(darkTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ApplicationProvider {...eva} theme={{ ...eva[theme], ...iscustomTheme }}>
        <Router/>
      </ApplicationProvider>
    </ThemeContext.Provider>  
    
  );
};