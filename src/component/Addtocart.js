import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Htext from '../component/Htext';
import Colors from '../constant/Colors';

 const Addtocart = (props) => { 
       
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled} 
      style={[{ 
        flex:1,
        alignSelf:'center',
        width: props.bwidth,
        height: props.bheight,
        backgroundColor: props.bcolor},props.style
        ]}
        {...props}
        >
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Htext color={Colors.darktext} fontsize={32} fontfamily='DustWest'>ADD TO CART</Htext>
          </View>
    </TouchableOpacity>
  );
}

export default Addtocart;