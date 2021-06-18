import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet } from 'react-native';
import Flat_Product from '../component/Flat_Product';
import * as StaticData from '../constant/StaticData';

const ProductList = (props) => {

  const theme = useTheme();
   
    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <View>
          <Flat_Product onPress={() => props.navigation.navigate("ProductStack",{ screen: 'ProductDetails'})} productdata={StaticData.Product_List}/>
        </View>  
      </View>
    );
  }


const styles = StyleSheet.create({
 contenar: {
  flex:1, 
  justifyContent:'center',
  alignItems:'center',
 }
});

export default ProductList;