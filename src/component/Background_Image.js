import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

 const Background_Image = (props) => {  
     
  return (
    <ImageBackground style={{ height: props.height}} source={{ uri: props.url }}>
        {props.children}
    </ImageBackground>
  );
}

export default Background_Image;