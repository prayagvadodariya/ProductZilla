import React, {useState, Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Search = () => {
     
    return (
      <View style={styles.contenar}>
          <Text>Search</Text>
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

export default Search;