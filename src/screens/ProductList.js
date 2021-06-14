import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet } from 'react-native';

const ProductList = () => {

  const theme = useTheme();
   
    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <View style={styles.contenar}>
          <Text style={{color: theme['text-basic-color']}}>ProductList</Text>
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