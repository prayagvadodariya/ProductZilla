import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

 const Htext = (props) => {  
    
  return (
      <Text style={[
        { fontSize: props.fontsize, color: props.color, fontFamily: props.fontfamily, fontWeight: props.fontweight, textAlign: props.textalign, lineHeight: props.lineheight},
        props.style,
        ]}>
          {props.children}
        </Text> 
  );
}

export default Htext;