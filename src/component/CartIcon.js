import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Badge, Icon } from 'react-native-elements';

const CartIcon = (props) =>{
    const theme = useTheme();
  return(
    <TouchableOpacity onPress={props.onPress} style={{paddingRight:10}}>
      <AntDesign name="shoppingcart" color={theme['text-basic-color']} size={25}/>
      <Badge value={0} status="error"  containerStyle={{ position: 'absolute', top: -8, right: 4 }}/>
    </TouchableOpacity>
  )
}

export default CartIcon;