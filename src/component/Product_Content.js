import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import * as StaticData from '../constant/StaticData';

 const Product_Content = (props) => {  
     
  return (
    <FlatList
      data={StaticData.Product_one} 
      style={{flex:1}} 
      keyExtractor={(item, index) => String(index)}
      renderItem={({item, index}) => 
      { 
      return (
        <View style={styles.content}>
        <TouchableOpacity style={styles.imglayout}>
          <ImageBackground resizeMode='stretch' style={{height: "100%"}} source={{ uri: item.url }}>
             {item?.seller!=null && item?.seller!='' ?
             <View style={{width:100, height:35, backgroundColor: Colors.sellcolor}}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
                  <Text>Best Seller</Text>
                </View>
            </View>
            :null} 
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
      )}}  
    />
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