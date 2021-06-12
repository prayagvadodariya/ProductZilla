import React from 'react';
import { Layout, Text, Button, Toggle } from '@ui-kitten/components';
import { ThemeContext } from '../constant/ThemeContext';

const Home = () => {
    const [checked, setChecked] = React.useState(false);
    const themeContext = React.useContext(ThemeContext);
  
    const onCheckedChange = (isChecked) => {
      themeContext.toggleTheme()
      setChecked(isChecked);
    };
  
     return(
     <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>HOME</Text>
      <Toggle checked={checked} onChange={onCheckedChange}></Toggle>
    </Layout>
     )
  }

export default Home  