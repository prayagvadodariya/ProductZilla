import React, {useState, Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, Text, Button, Toggle, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../constant/ThemeContext';

const Sidemenu = () => {
  const [checked, setChecked] = React.useState(false);
  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();

  console.log('checkthem',theme);

  const onCheckedChange = (isChecked) => {
    themeContext.toggleTheme()
    setChecked(isChecked);
  };
  
    return (
      <View style={styles.drawerContent}>
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text category='h1'>HOME</Text>
        <Toggle checked={checked} onChange={onCheckedChange}></Toggle>
      </Layout>
      </View>
    );
  }


const styles = StyleSheet.create({
  drawerContent: {
  flex: 1,
  paddingTop: Platform.OS === 'android' ? 25 : 22,
 }
});

export default Sidemenu;