import React, {useState, useEffect} from 'react';
import { useTheme } from '@ui-kitten/components';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import UserIcon from '../component/UserIcon';
import CartItem from '../component/CartIcon';
import InputField from '../component/InputField';
import Cbutton from '../component/Cbutton';

const AddEditAddress = (props) => {
  const theme = useTheme();

  console.log('ckeckprops', props.route.params);

  useEffect(() => {
    if (props.route.params.active===true) {
        props.navigation.setOptions({
          headerTitle: 'Add New Address',
        });   
    }else{
        props.navigation.setOptions({
          headerTitle: 'Edit Address',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}> 
              <UserIcon onPress={()=> props.navigation.navigate('User')}/>
              <CartItem onPress={()=> props.navigation.navigate('Cart')}/>
            </View>  
          ),
        }); 
    }
  }, [props.navigation, props.route]);
   
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <InputField
        label='First Name'
        placeholder= 'First Name'
        />
        <InputField
        label='Last Name'
        placeholder='Last Name'
        />
        <InputField
        label='Company'
        placeholder='Company'
        />
        <InputField
        label='Address 1'
        placeholder='Address 1'
        />
        <InputField
        label='Address 2'
        placeholder='Address 2'
        />
        <InputField
        label='City'
        placeholder='City'
        />
        <InputField
        label='Zip'
        placeholder='Zip'
        />
        <View style={{ marginTop:20, marginBottom:20}}>
         <Cbutton textcolor={theme['text-basic-color']} bcolor="transparent" bwidth={180} bheight={42} bordercolor={theme['text-basic-color']}>SAVE</Cbutton>
        </View>
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 
});

export default AddEditAddress;