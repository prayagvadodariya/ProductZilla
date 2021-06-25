import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import UserIcon from './src/component/UserIcon';
import CartItem from './src/component/CartIcon';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Wishlist from './src/screens/Wishlist';
import Cart from './src/screens/Cart';
import User from './src/screens/User';
import Address from './src/screens/Address';
import AddEditAddress from './src/screens/AddEditAddress';
import ProductList from './src/screens/ProductList';
import ProductDetails from './src/screens/ProductDetails';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import SideMenu from './src/component/Sidemenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const NavigationDrawerStructure = (props) => {
    const theme = useTheme();
    const toggleDrawer = () => {
      props.navigationProps.toggleDrawer();
      return true
    };
  
    return (
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Entypo name="menu" color={theme['text-basic-color']} size={25} style={{ marginLeft: 15}} />
      </TouchableOpacity>
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
            fontFamily: 'CHESTER-Basic'
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" color={color} size={22} />)
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" color={color} size={22} />)
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ color }) => (
              <AntDesign name="hearto" color={color} size={22} />)
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
                <UserIcon onPress={()=> navigation.navigate('User')}/>
                <CartItem onPress={()=> navigation.navigate('Cart')}/>
              </View>  
            ),
            headerStyle: {
              backgroundColor: theme['background-basic-color-1'],
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: theme['text-basic-color'],
              fontFamily:'CHESTER-Basic',
              fontSize:22,
              textTransform: 'lowercase'
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
             <AntDesign name="left"  color={theme['text-basic-color']} size={22} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'],
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:22,
            textTransform: 'lowercase'
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
             <AntDesign name="left" color={theme['text-basic-color']} size={22} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}}> 
              <UserIcon onPress={()=> navigation.navigate('User')}/>
              <CartItem onPress={()=> navigation.navigate('Cart')}/>
            </View>  
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'],
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:22,
            textTransform: 'lowercase'
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
             <AntDesign name="left" color={theme['text-basic-color']} size={22} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <UserIcon onPress={()=> navigation.navigate('User')}/>
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'],
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:22,
            textTransform: 'lowercase'
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
             <AntDesign name="left" color={theme['text-basic-color']} size={22} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: () => (           
            <CartItem onPress={()=> navigation.navigate('Cart')}/>
           
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'],
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:22,
            textTransform: 'lowercase'
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
             <AntDesign name="left" color={theme['text-basic-color']} size={22} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={()=> navigation.navigate('AddEditAddress',{ active:true })} style={{paddingRight:10}}>
              <AntDesign name="plus" color={theme['text-basic-color']} size={22}/>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'],
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:22,
            textTransform: 'lowercase'
          },
        })}
        />
        <Stack.Screen
        name="AddEditAddress"
        component={AddEditAddress}
        options={({navigation,}) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()}>
             <AntDesign name="left" color={theme['text-basic-color']} size={22} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: theme['background-basic-color-1'],
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: theme['text-basic-color'],
            fontFamily:'CHESTER-Basic',
            fontSize:22,
            textTransform: 'lowercase'
          },
        })}
        />
        <Stack.Screen
        name="Signin"
        component={Signin}
        options={({navigation,}) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()}>
             <AntDesign name="left"  color={theme['text-basic-color']} size={22} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: false,
          headerTitle: false, 
          headerStyle: false, 
          headerTransparent: true
        })}
        />
        <Stack.Screen
        name="Signup"
        component={Signup}
        options={({navigation,}) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()}>
             <AntDesign name="left"  color={theme['text-basic-color']} size={22} style={{ marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: false,
          headerTitle: false, 
          headerStyle: false, 
          headerTransparent: true
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
