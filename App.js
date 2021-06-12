import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Toggle } from '@ui-kitten/components';
import { ThemeContext } from './src/constant/ThemeContext';
import HomeScreen from './src/screens/Home';
import * as theme  from './theme.json';

export default () => {

  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    //   <ApplicationProvider {...eva} theme={eva[theme]}>
    //     <HomeScreen/>
    //   </ApplicationProvider>
    // </ThemeContext.Provider>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme.light }}>
        <HomeScreen/>
      </ApplicationProvider>
      
  );
};