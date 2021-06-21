import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from '@ui-kitten/components';

 const Htext = (props) => {  
  const theme = useTheme();  
  return (
    <View>
      <Text style={[{ fontSize: props.fontsize || 15, color: props.color || theme['text-basic-color'], fontFamily: props.fontfamily },props.style]}>{props.children}</Text> 
    </View>
  );
}

export default Htext;