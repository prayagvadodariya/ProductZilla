import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';
import AntDesign from "react-native-vector-icons/AntDesign";

 const Flat_Product = (props) => { 
   
  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={props.onPress}> 
          <View style={styles.top}><Image source={{ uri: item.url}} resizeMode='stretch' style={{height: "100%", width:'100%'}}/></View> 
          <Text style={{paddingRight:10, paddingLeft:10, width: Dimensions.get('screen').width / 2 - 20, margin:10, textAlign:"center", color: Colors.mainText, fontSize:15, fontWeight:"bold" }}>{item.title}</Text> 
        </TouchableOpacity>
        <View style={styles.cover}>
          <Text style={{color: Colors.mainText, marginTop:10, fontSize:15, marginBottom:10}}>{item.amount}</Text>
          <TouchableOpacity onPress={props.onPress}>
            <AntDesign style={{ marginLeft:10,marginTop:12}} name='hearto'  color={Colors.mainText} size={15} />
          </TouchableOpacity>  
        </View>
      </View>
    )
  }
    
  return (
    <View>
    {props?.showlayout ? (
    <FlatList
      horizontal={props.showlayout}
      data={props.productdata} 
      keyExtractor={(item, index) => String(index)}
      extraData={Colors}
      renderItem={renderItem}
    />
    ):(
    <FlatList  
      numColumns={2}
      data={props.productdata} 
      keyExtractor={(item, index) => String(index)}
      extraData={Colors}
      renderItem={renderItem}
    />  
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
   position: 'relative',
   width: Dimensions.get('screen').width / 2 - 20,
   height: 250,
   margin: 10,
   borderWidth:1,
   borderColor:Colors.mainText
  },
  titleStyle:{
    fontFamily:'Roboto',
    textAlign:'center',
    color:'gray',
    fontSize:25,
  },
  cover: {
    flexDirection:"row",
    justifyContent:"center",
  },
});

export default Flat_Product;