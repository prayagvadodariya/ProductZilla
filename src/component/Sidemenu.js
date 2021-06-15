import React, {useState, Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Toggle, useTheme , Drawer, DrawerGroup, DrawerItem, IndexPath, Icon  } from '@ui-kitten/components';
import { ThemeContext } from '../constant/ThemeContext';
import AntDesign from "react-native-vector-icons/AntDesign";

const Sidemenu = () => {
  const [checked, setChecked] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();

  const onCheckedChange = (isChecked) => {
    themeContext.toggleTheme()
    setChecked(isChecked); 
  };
  
  const renderToggle = () => {
    return(
      <Toggle checked={checked} size="small"  onChange={onCheckedChange}></Toggle>
    )
  }

    return (
      <View style={[styles.drawerContent, { backgroundColor: theme['background-basic-color-1'] }]}>
        <View>
          <Text style={styles.sectionHeadingStyle1}>Test Dev</Text>
          <Text style={styles.sectionHeadingStyle2}>testdev301@gmail.com</Text>
        </View> 

        <Drawer style={{paddingLeft:10, paddingRight:10}}
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
            <DrawerItem title='Home' accessoryLeft={props => <Icon {...props} name='home-outline'/>}/>
            <DrawerItem title='Search' accessoryLeft={props => <Icon {...props} name='search-outline'/>}/>
            <DrawerItem title='Wishlist' accessoryLeft={props => <Icon {...props} name='heart-outline'/>}/>
            <DrawerItem title='Theme' accessoryLeft={props => <Icon {...props} name='color-palette-outline'/>} accessoryRight={renderToggle}/>
        </Drawer>
      </View>
    )
  }


const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 8 : 5,
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