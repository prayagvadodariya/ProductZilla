import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';

 const ShowImage = (props) => {  
     
  return (
    <TouchableOpacity style={{ height: props.height}}>
       <ImageBackground resizeMode='stretch' style={{height: "100%"}} source={{ uri: props.url }}>
         {props.children}
      </ImageBackground> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
 
});

export default ShowImage;