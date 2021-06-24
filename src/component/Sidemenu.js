import React, {useState, Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Toggle, useTheme , Drawer, DrawerGroup, DrawerItem, IndexPath, Icon  } from '@ui-kitten/components';
import { ThemeContext } from '../constant/ThemeContext';
import AntDesign from "react-native-vector-icons/AntDesign";

const Sidemenu = (props) => {
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

  const onSelect = (index) =>{
    setSelectedIndex(index)
    if(index.row===0){
      props.navigation.navigate("Home")
    }else if(index.row===1){
      props.navigation.navigate("Search")
    }else if(index.row===2){
      props.navigation.navigate("Wishlist")
    }else if(index.row===3){
      props.navigation.navigate("Cart")
    }else if(index.row===4){
      props.navigation.navigate("User")
    }  
    // console.log('drawer select', index);
  }

    return (
      <View style={[styles.drawerContent, { backgroundColor: theme['background-basic-color-1'] }]}>
        <View>
          <Text style={styles.sectionHeadingStyle1}>Test Dev</Text>
          <Text style={styles.sectionHeadingStyle2}>testdev301@gmail.com</Text>
        </View> 

        <Drawer style={{paddingLeft:10, paddingRight:10}}
          selectedIndex={selectedIndex}
          onSelect={(index) => onSelect(index)}>
            <DrawerItem title='Home' selectedIndex={selectedIndex} accessoryLeft={props => <Icon {...props} name='home-outline'/>}/>
            <DrawerItem title='Search' accessoryLeft={props => <Icon {...props} name='search-outline'/>}/>
            <DrawerItem title='Wishlist' accessoryLeft={props => <Icon {...props} name='heart-outline'/>}/>
            <DrawerItem title='Cart' accessoryLeft={props => <Icon {...props} name='shopping-cart-outline'/>}/>
            <DrawerItem title='Account' accessoryLeft={props => <Icon {...props} name='person-outline'/>}/>
            <DrawerItem title='Log in' accessoryLeft={props => <Icon {...props} name='log-in-outline'/>}/>
            <DrawerGroup  title='Theme' accessoryLeft={props => <Icon {...props} name='color-palette-outline'/>} accessoryRight={renderToggle}/>
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