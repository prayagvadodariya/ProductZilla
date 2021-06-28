import React, {useState, Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Toggle, useTheme , Drawer, DrawerGroup, DrawerItem, IndexPath, Icon  } from '@ui-kitten/components';
import { ThemeContext } from '../constant/ThemeContext';
import Htext from '../component/Htext';

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
    }else if(index.row===5){
      props.navigation.navigate("Signin")
    }  
    // console.log('drawer select', index);
  }

    return (
      <View style={[styles.drawerContent, { backgroundColor: theme['background-basic-color-1'] }]}>
        
        <View style={styles.container}>
           <Avatar style={{margin: 8, width:80, height:80}} source={{ uri: 'https://www.lemonlight.com/app/uploads/2019/04/Your-Guide-to-the-18-Most-Important-Camera-Shots.jpg' }}/>
           <Htext style={{color:theme['text-custome-color'], fontSize:23, marginLeft:5, marginTop:5, fontFamily:'PTSans-Regular'}}>Test Dev</Htext>
           <Htext style={{color:theme['text-custome-color'], fontSize:17, marginLeft:8, marginBottom:10, fontFamily:'PTSans-Regular'}}>testdev301@gmail.com</Htext>
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
  container: {
    alignItems: 'flex-start',
    marginTop:9,
    marginLeft:20,
    flexWrap: 'wrap',
  }
});

export default Sidemenu;