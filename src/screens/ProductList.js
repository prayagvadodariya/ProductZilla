import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet } from 'react-native';
import FlatProduct from '../component/FlatProduct';
import * as StaticData from '../constant/StaticData';

const ProductList = (props) => {

  const theme = useTheme();

   
    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <FlatProduct onPress={(item) => props.navigation.navigate("HomeScreenStack",{ screen: 'ProductDetails',params: { Producthandel: item.id }})} productdata={StaticData.Product_List}/>
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