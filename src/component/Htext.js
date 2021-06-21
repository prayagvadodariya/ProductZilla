import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constant/Colors';
import { useTheme } from '@ui-kitten/components';

 const Htext = (props) => {  
  const theme = useTheme();
  return (
    <Text 
      style={[{ fontSize: props.fontsize || 18, color: props.color || theme['text-basic-color'], fontFamily: props.fontfamily, textAlign: props.textalign || 'center', lineHeight: props.lineheight},props.style]}>
        {props.children}
    </Text> 
  );
}

export default Htext;