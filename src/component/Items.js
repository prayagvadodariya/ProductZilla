import React,{useEffect, useState} from 'react';
import { StyleSheet, ScrollView, View, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import Colors from '../constant/Colors';
import Currency from '../component/Currency';
import Htext from '../component/Htext';
import AntDesign from "react-native-vector-icons/AntDesign";

 const Items = (props) => { 
  const theme = useTheme();

    return (
      <View>
        <TouchableOpacity onPress={props.onPress}> 
          <View style={styles.top}>
            <Image source={{ uri: props.item.media.items[0].image.url}} resizeMode='stretch' style={{height: "100%", width:'100%'}}/>
          </View>
          <View style={{width: 160, margin:10}}>
            <Htext style={{textAlign:"center", paddingLeft:10, paddingRight:10, color: theme['text-basic-color'], fontFamily:'PTSans-Regular', fontSize:15, fontWeight:'800' }}>{props.item.name}</Htext>
          </View>
        </TouchableOpacity>
        <View style={styles.cover}>
          <Currency style={{color: theme['text-basic-color'],textAlign:"center", margin:5, fontSize:15}} currencyCode={props.item.price.currency} amount={props.item.price.price}/>
          <TouchableOpacity onPress={props.onPress1}>
            <AntDesign style={{ marginLeft:10,marginTop:8}} name='hearto'  color={theme['text-basic-color']} size={15} />
          </TouchableOpacity>  
        </View>
      </View>
    )
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

export default Items;