import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Htext from '../component/Htext';
import Colors from '../constant/Colors';

 const Addtocart = (props) => { 
   let buttonStyle = styles.content   
  if(props.style){
    buttonStyle = props.style
  }  
    
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={{ flex:1,alignSelf:'center', width: props.bwith, height: props.bheight, backgroundColor: props.bcolor}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Htext color={Colors.darktext} fontsize={32} fontfamily='DustWest'>ADD TO CART</Htext>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    width:"100%",
    height:45,
    margin:15
  }
});  

export default Addtocart;