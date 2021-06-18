import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';

 const ShowImage = (props) => {  
     
  return (
    <TouchableOpacity style={styles.imglayout}>
       <ImageBackground resizeMode='stretch' style={{height: "100%"}} source={{ uri: props.url }}>
         {props.children}
      </ImageBackground> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imglayout: {
    height:360,
 }
});

export default ShowImage;