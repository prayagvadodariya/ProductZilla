import React, {useState, Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { IndexPath, Menu, MenuItem, Toggle, useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../constant/ThemeContext';

const Sidemenu = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [checked, setChecked] = React.useState(false);
  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();

  console.log('checkthem',theme);

  const onCheckedChange = (isChecked) => {
    themeContext.toggleTheme()
    setChecked(isChecked);
  };
  
    return (
      <View style={[styles.drawerContent, { backgroundColor: theme['background-basic-color-1'] }]}>
        {/* <View>
          <Text style={styles.sectionHeadingStyle1}>Test Dev</Text>
          <Text style={styles.sectionHeadingStyle2}>testdev301@gmail.com</Text>
        </View> */}
        <Menu
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          <MenuItem title='Users'/>
          <MenuItem title='Orders'/>
          <MenuItem title='Transactions'/>
          <MenuItem title='Settings'/>
        </Menu>
        {/* <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text category='h1'>HOME</Text>
        <Toggle checked={checked} onChange={onCheckedChange}></Toggle>
      </Layout> */}
      </View>
    );
  }


const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 22,
  },
  sectionHeadingStyle1: {
    marginTop:3,
    marginLeft:15,
    fontSize:23,
    color: 'gray',
    fontWeight: 'bold'
  },
  sectionHeadingStyle2: {
    marginTop:3,
    marginLeft:15,
    fontSize:17,
    marginBottom:10,
    color: 'gray',
  },
});

export default Sidemenu;