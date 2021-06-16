import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Colors from '../constant/Colors';

 const Image_Content = (props) => {  
     
  return (
    <View style={styles.imglayout}>
       <ImageBackground resizeMode='stretch' style={{height: "100%"}} source={{ uri: 'https://static.wixstatic.com/media/84770f_e58156816cbb4505a7a3388d6593def9~mv2.jpg/v1/fill/w_640,h_800,al_c,q_85,usm_0.66_1.00_0.01/84770f_e58156816cbb4505a7a3388d6593def9~mv2.webp' }}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    borderColor: Colors.mainText,
    borderWidth:3,
    margin:15,
    height:430
  },
  imglayout: {
    height:460,
 }
});

export default Image_Content;