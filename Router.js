import React, { useState } from 'react';
import { Button, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import CartItem from './src/component/CartIcon';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Wishlist from './src/screens/Wishlist';
import Cart from './src/screens/Cart';
import User from './src/screens/User';
import Address from './src/screens/Address';
import ProductList from './src/screens/ProductList';
import ProductDetails from './src/screens/ProductDetails';
import SideMenu from './src/component/Sidemenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const theme = useTheme();
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
      return true
    };
  
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Entypo name="menu" color={theme['text-basic-color']} size={26} style={{ marginLeft: 15}} />
        </TouchableOpacity>
      </View>
    );
  };


  const BottomTabStack = () => {
    const theme = useTheme();
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: theme['text-basic-color'],
          style: {
            backgroundColor: theme['background-basic-color-1'],
            borderTopWidth: 0
          },
          labelStyle: {
            textAlign: 'center',
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" color={color} size={26} />)
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" color={color} size={26} />)
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ color }) => (
              <AntDesign name="hearto" color={color} size={26} />)
          }}
        />
      </Tab.Navigator>
    );
  };
  
  const HomeScreenStack = ({navigation}) => {
    const theme = useTheme();
  
    return (
      <Stack.Navigator initialRouteName='BottomTabtack'>
        <Stack.Screen
          name="BottomTabtack"
          component={BottomTabStack}
          options={({route, navigation,}) => ({
            headerTitle: 'CapacityX',
            headerLeft: () => (
              <NavigationDrawerStructure
                navigationProps={navigation}
              />
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row'}}> 
                <TouchableOpacity onPress={()=> navigation.navigate('User')} style={{paddingRight:18}}>
                    <AntDesign name="user" color={theme['text-basic-color']} size={25}/>
                </TouchableOpacity>
                <CartItem onPress={()=> navigation.navigate('Cart')}/>
              </View>  
            ),
            headerStyle: {
              backgroundColor: theme['background-basic-color-1'], //Set Header color
            },
            headerTitleStyle: {
              color: theme['text-basic-color'],
              fontFamily:'CHESTER-Basic',
              fontSize:25,
              textTransform: 'lowercase',
              textAlign:"center" //Set Header text style
            },
          })}
        />
        <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={({navigation,}) => ({
          headerTitle: 'Product List',
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()}>
             <AntDesign name="left"  color={theme['text-basic-color']} size={25} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'], //Set Header color
          },
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:25,
            textTransform: 'lowercase',
            textAlign:"center" //Set Header text style
          },
        })}
        />
        <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({navigation,}) => ({
          headerTitle: 'Product Details',
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()}>
             <AntDesign name="left" color={theme['text-basic-color']} size={25} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}}> 
              <TouchableOpacity onPress={()=> navigation.navigate('User')} style={{paddingRight:18}}>
                <AntDesign name="user" color={theme['text-basic-color']} size={25}/>
              </TouchableOpacity>
              <CartItem onPress={()=> navigation.navigate('Cart')}/>
            </View>  
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'], //Set Header color
          },
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:25,
            textTransform: 'lowercase',
            textAlign:"center" //Set Header text style
          },
        })}
        />
        <Stack.Screen
        name="Cart"
        component={Cart}
        options={({navigation,}) => ({
          headerTitle: 'Cart',
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()}>
             <AntDesign name="left" color={theme['text-basic-color']} size={25} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={()=> navigation.navigate('User')} style={{paddingRight:18}}>
              <AntDesign name="user" color={theme['text-basic-color']} size={25}/>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'], //Set Header color
          },
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:25,
            textTransform: 'lowercase',
            textAlign:"center" //Set Header text style
          },
        })}
        />
        <Stack.Screen
        name="User"
        component={User}
        options={({navigation,}) => ({
          headerTitle: 'Account',
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()}>
             <AntDesign name="left" color={theme['text-basic-color']} size={25} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: () => (           
            <CartItem onPress={()=> navigation.navigate('Cart')}/>
           
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'], //Set Header color
          },
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:25,
            textTransform: 'lowercase',
            textAlign:"center" //Set Header text style
          },
        })}
        />
        <Stack.Screen
        name="Address"
        component={Address}
        options={({navigation,}) => ({
          headerTitle: 'Your Addresses',
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()}>
             <AntDesign name="left" color={theme['text-basic-color']} size={25} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}}> 
              <TouchableOpacity style={{paddingRight:10}}>
                <AntDesign name="plus" color={theme['text-basic-color']} size={25}/>
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'], //Set Header color
          },
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:25,
            textTransform: 'lowercase',
            textAlign:"center" //Set Header text style
          },
        })}
        />
      </Stack.Navigator>
    );
  };

  const Router = () => {
    return (
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="HomeScreenStack"
          drawerContent={(props) => <SideMenu {...props}/>}>

          <Drawer.Screen
            name="HomeScreenStack"
            options={{drawerLabel: 'Home'}}
            component={HomeScreenStack}
          /> 
          {/* <Drawer.Screen
          name="ProductStack"
          options={{drawerLabel: 'ProductStack'}}
          component={ProductStack}
         />  */}
        </Drawer.Navigator>
    </NavigationContainer>
    );
  };
export default Router;
