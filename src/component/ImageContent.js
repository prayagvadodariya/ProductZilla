import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';

 const ImageContent = (props) => {  
     
  return (
    <TouchableOpacity style={styles.imglayout}>
       <ImageBackground resizeMode='stretch' style={{height: "100%"}} source={{ uri: 'https://static.wixstatic.com/media/84770f_e58156816cbb4505a7a3388d6593def9~mv2.jpg/v1/fill/w_640,h_800,al_c,q_85,usm_0.66_1.00_0.01/84770f_e58156816cbb4505a7a3388d6593def9~mv2.webp' }}>
         <View style={styles.content}></View>
       </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    borderColor: Colors.mainText,
    borderWidth:2,
    marginTop:-35,
    marginLeft:20,
    marginRight:35,
    marginBottom:35,
    height:460
  },
  imglayout: {
    height:460,
 }
});

export default ImageContent;