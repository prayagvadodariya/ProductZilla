import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

 const Htext = (props) => {  
     
  return (
    <View>
      <Text style={{ fontSize: props.fontsize, color: props.color, textAlign:"center"}}>{props.children}</Text> 
    </View>
  );
}

export default Htext;