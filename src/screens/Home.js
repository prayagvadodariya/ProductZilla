import React from 'react';
import { Layout, Text, Button, Toggle, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../constant/ThemeContext';

const Home = () => {
    const [checked, setChecked] = React.useState(false);
    const themeContext = React.useContext(ThemeContext);
    const theme = useTheme();

    console.log('checkthem',theme);
  
    const onCheckedChange = (isChecked) => {
      themeContext.toggleTheme()
      setChecked(isChecked);
    };
  
     return(
     <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>Home screen </Text>
      <Toggle checked={checked} onChange={onCheckedChange}></Toggle>
    </Layout>
     )
  }

export default Home;