import React, {useState, Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Wishlist = () => {
    
    return (
      <View style={styles.contenar}>
          <Text>Wishlist</Text>
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

export default Wishlist;