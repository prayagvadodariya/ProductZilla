import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, ScrollView, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import Ntext from '../component/Ntext';
import CartButton from '../component/CartButton';
import Hairline from '../component/Hairline';
import AntDesign from "react-native-vector-icons/AntDesign";
import ActionButton from '../component/ActionButton';
import ImageSlider from 'react-native-image-slider';
import * as StaticData from '../constant/StaticData';

const ProductDetails = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  const toggleFunction = () => {
    setIsVisible(!isVisible);
  }; 
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <View style={{ alignSelf:'flex-start', margin:15 }}>
          <Htext color={theme['text-custome-color']} fontsize={20}>SKU: 0001</Htext>
        </View>

        <View style={styles.imgslider}>
          <ImageSlider
              loopBothSides={false}
              images={StaticData.SlideImage}
              customSlide={({ index, item, style, width }) => {
              return(
                <TouchableOpacity key={index} style={styles.top}>  
                  <ImageBackground source={{uri: item.url}} resizeMode='stretch' style={{height: "100%", width:'100%'}}/>    
                </TouchableOpacity>
              )}}
          />
        </View>  

        <View style={{ alignSelf:'flex-start', marginTop:25, marginBottom:5, marginLeft:15 }}>
          <Htext color={theme['text-basic-color']} fontsize={35} fontfamily='DustWest'>BCAA Capsules</Htext>
        </View> 

        <View style={{ alignSelf:'flex-start', marginLeft:15 }}>
          <Htext color={theme['text-custome-color']} fontsize={20}>$15.00</Htext>
        </View> 

        <View style={{margin:20}}>
          <CartButton bwidth={"100%"}/>
        </View>

        <View style={{ margin:15 }}>
          <View style={{flexDirection:'row'}}>
            <Htext color={theme['text-custome-color']} fontsize={20}>Product Details :</Htext>
            <TouchableOpacity onPress={toggleFunction} style={{flex:1, marginTop:8, alignItems:"flex-end"}}>
              <AntDesign name={isVisible===false  ? 'down' : 'up'} color={theme['text-custome-color']} size={15}/>
            </TouchableOpacity>
          </View>
        </View>

        {isVisible ? 
          <View style={{ marginLeft:15, marginRight:15}}>
           <Ntext color={Colors.gray} fontsize={18} fontfamily='PTSans-Regular'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</Ntext>
          </View>
        : null}

        <View style={{flexDirection: 'row', alignItems: 'center',margin:15}}>
          <Hairline/>
          <View style={{marginLeft:10, marginRight:10}}>
            <Htext color={theme['text-basic-color']} fontfamily='PTSans-Regular' fontsize={30}>Share</Htext>
          </View>
          <Hairline/>
        </View>

        <View style={styles.sharing}>
          <View style={styles.shar}><ActionButton icon='whatsapp'/></View>
          <View style={styles.shar}><ActionButton icon='facebook'/></View>
          <View style={styles.shar}><ActionButton icon='twitter'/></View>
          <View style={styles.shar}><ActionButton icon='instagram'/></View>
        </View>

      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 contenar: {
  flex:1, 
  justifyContent:'center',
   alignItems:'center',
 },
 imgslider: {
  marginLeft:15,
  marginRight:15
 },
 top: {
  width: Dimensions.get('screen').width /1 - 20,
  height: 390,
 },
 sharing: {
  justifyContent:'center',
  alignItems:'center',
  flexDirection:"row",
   marginBottom:15
 },
 shar: {
  marginLeft:10,
 }
});

export default ProductDetails;