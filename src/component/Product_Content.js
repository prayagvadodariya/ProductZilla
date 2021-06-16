import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
 const Product_Content = (props) => {  
     
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.imglayout}>
        <ImageBackground resizeMode='stretch' style={{height: "100%"}} source={{ uri: 'https://static.wixstatic.com/media/913019_6d1d377f525b4b568168926a657dd13b~mv2_d_3227_3116_s_4_2.jpg/v1/fill/w_588,h_588,al_c,q_80,usm_0.66_1.00_0.01/913019_6d1d377f525b4b568168926a657dd13b~mv2_d_3227_3116_s_4_2.webp' }}>
           <View style={{width:100, height:35, backgroundColor: Colors.sellcolor}}>
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
                <Text>Best Seller</Text>
              </View>
          </View> 
        </ImageBackground>
      </TouchableOpacity>
      
      <View style={{flex:1,backgroundColor: Colors.gray}}>
        <TouchableOpacity style={styles.contentbottom}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Htext color={Colors.darktext} fontsize={32} fontfamily='DustWest'>ADD TO CART</Htext>
        </View>
        </TouchableOpacity>
      </View>  
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
    height:360,
  },
  contentbottom: {
    flex:1,
    backgroundColor: Colors.mainText,
    marginLeft:1,
    marginBottom:1,
    marginRight:1, 
  }
 

});

export default Product_Content;