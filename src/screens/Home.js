import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Maincontent from '../component/Maincontent';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import Product_Content from '../component/Product_Content';

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