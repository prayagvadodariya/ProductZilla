import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constant/Colors';

 const Htext = (props) => {  
  let textColor = Colors.mainText;
  if(props.color){
    textColor = props.color
  }
  return (
    <Text 
      style={[{ fontSize: props.fontsize, color: textColor, fontFamily: props.fontfamily, fontWeight: props.fontweight, textAlign: props.textalign, lineHeight: props.lineheight},props.style]}>
        {props.children}
    </Text> 
  );
}

export default Htext;