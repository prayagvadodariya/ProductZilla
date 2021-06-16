import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Maincontent from '../component/Maincontent';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import Ntext from '../component/Ntext';
import Cbutton from '../component/Cbutton';
import Product_Content from '../component/Product_Content';
import Image_Content from '../component/Image_Content';

const Home = () => {

  const theme = useTheme();
   
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <Maincontent/>

        <View style={{ alignSelf:'center', marginTop:25, marginBottom:25 }}>
          <Htext color={Colors.mainText} fontsize={35} fontfamily='CHESTER-Basic'>FEATURED PRODUCTS</Htext>
        </View>

        <View style={{marginTop:-15}}>
          <Product_Content/>
        </View>

        <View style={{ margin:20 }}>
          <Htext color={Colors.mainText} fontsize={35} fontfamily='DustWest'>WE CREATE PRODUCTS TO HELP YOU REACH THE FITNESS GOALS YOU NEVER KNEW YOU HAD</Htext>
        </View>

        <View style={{ marginLeft:20, marginRight:20, marginBottom:20}}>
          <Ntext color={theme['text-custome-color']} fontsize={18} fontfamily='PTSans-Regular'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</Ntext>
        </View>

        <View style={{alignSelf:'flex-start', marginLeft:20, marginBottom:15}}>
         <Cbutton textcolor={Colors.mainText} bcolor="transparent" bwith={180} bheight={42} bordercolor={Colors.mainText}>LEARN MORE</Cbutton>
        </View>

        <Image_Content/>

      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 contenar: {
  flex:1, 
  justifyContent:'center',
   alignItems:'center',
 }
});

export default Home;