import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import AntDesign from "react-native-vector-icons/AntDesign";

const CartIcon = (props) =>{
    const theme = useTheme();
  return(
    <TouchableOpacity onPress={props.onPress} style={{paddingRight:18}}>
      <AntDesign name="user" color={theme['text-basic-color']} size={22}/>
    </TouchableOpacity>
  )
}

export default CartIcon;