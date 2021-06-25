import React, {useState, useEffect} from 'react';
import { useTheme } from '@ui-kitten/components';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import CartItem from '../component/CartIcon';
import Ntext from '../component/Ntext';
import Colors from '../constant/Colors';
import * as StaticData from '../constant/StaticData';

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
              <TouchableOpacity onPress={()=> navigation.navigate('User')} style={{paddingRight:18}}>
                <AntDesign name="user" color={theme['text-basic-color']} size={22}/>
              </TouchableOpacity>
              <CartItem onPress={()=> navigation.navigate('Cart')}/>
            </View>  
          ),
        }); 
    }
  }, [props.navigation, props.route]);
   
    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
      </View>
    );
  }


const styles = StyleSheet.create({
 cover: {
}
});

export default AddEditAddress;