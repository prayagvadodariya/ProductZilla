import React from 'react';
import { StyleSheet, Text, View,ImageBackground,  FlatList, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';
import AntDesign from "react-native-vector-icons/AntDesign";

 const Card = (props) => {  
    
  return (
    <FlatList
      horizontal={props.showlayout}
      data={props.productdata} 
      keyExtractor={(item, index) => String(index)}
      renderItem={({item, index}) => 
      { 
      return (
        <TouchableOpacity onPress={props.onPress} style={{ width: props.cardwidth, height: props.cardheight, marginLeft:10, marginRight:5, marginTop:10, borderRadius:10 }}> 
          <ImageBackground source={{ uri: item.url}} resizeMode='stretch' style={{height: "100%", width:'100%', borderRadius:10, overflow:'hidden'}}>
            <View style={styles.textcontent}>
              <Text style={styles.t1}>{item.title}</Text>
            </View>
          </ImageBackground>         
        </TouchableOpacity>)}}
    />
  );
}

const styles = StyleSheet.create({
  textcontent:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  t1: {
    fontSize:18,
    fontWeight:"bold",
    color:Colors.normaltext,
  },
});

export default Card;