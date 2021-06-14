import React, {useState, Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Cart = () => {
  
    return (
      <View style={styles.contenar}>
          <Text>Cart</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
 contenar: {
  flex:1,
  justifyContent:'center',
  alignItems:'center'
 }
});

export default Cart;