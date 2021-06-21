import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@ui-kitten/components';

 const CartButton = (props) => {  
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}
      style={[{
        alignSelf:'center',
        width: props.bwidth || 122,
        height: props.bheight || 42,
        borderWidth:1,
        borderColor: props.bordercolor || theme['text-basic-color'],
        borderRadius:25, 
        backgroundColor: props.bcolor || 'transparent'},
        props.style
        ]}>
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color: props.textcolor || theme['text-basic-color'], fontSize:15, textTransform: 'uppercase'}}>ADD TO CART</Text>
          </View>
    </TouchableOpacity>
  );
}

export default CartButton;