import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

 const Cbutton = (props) => {  
    
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={{alignSelf:'center', width: props.bwith, height: props.bheight, borderWidth:1, borderColor: props.bordercolor, borderRadius:25, backgroundColor: props.bcolor}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color: props.textcolor, fontSize:15, textTransform: 'uppercase'}}>{props.children}</Text>
        </View>
    </TouchableOpacity>
  );
}

export default Cbutton;