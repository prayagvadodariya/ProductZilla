import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import * as StaticData from '../constant/StaticData';

const Cart = (props) => {

  const theme = useTheme();
   
    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <FlatList  horizontal={false}
          data={StaticData.Product_List}  
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={{flexGrow:1}}
          renderItem={({item ,index}) =>   {
            return(
              <View>

              </View>
            )
          }}
        />
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

export default Cart;