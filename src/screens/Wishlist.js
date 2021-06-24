import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import Card from '../component/Card';
import Ntext from '../component/Ntext';
import Colors from '../constant/Colors';
import BackgroundImage from '../component/BackgroundImage';
import * as StaticData from '../constant/StaticData';
import AntDesign from "react-native-vector-icons/AntDesign";

const Wishlist = () => {

  const theme = useTheme();
   
    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <FlatList  horizontal={false}
          data={StaticData.Product_List}  
          keyExtractor={(item, index) => String(index)}
          renderItem={({item ,index}) =>   {
            return( 
              <Card disabled={true} style={{ height:120, backgroundColor: Colors.normaltext, margin:10, borderRadius: 10, shadowColor: 'black', shadowOpacity: 0.5, elevation: 5}}>
              {
                <View style={{flexDirection:'row'}}>
                  <Card cardwidth={80} cardheight={100}>
                  {
                    <BackgroundImage url={item.url} bradius={10}/>
                  }
                  </Card>

                  <View style={{ flex:1,justifyContent:'center',alignContent:'center' }}>
                    <Ntext color={theme['text-custome-color']} lineheight={18} fontsize={15} fontfamily='PTSans-Regular'>{item.title}</Ntext>
                    <Ntext color={Colors.gray} fontsize={15} >{item.amount}</Ntext>
                  </View>

                  <TouchableOpacity style={{justifyContent:'center', marginRight:20}}>
                    <AntDesign  name="delete" color='red' size={21}/>
                  </TouchableOpacity>
                </View>
              }
              </Card>
            )}}
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

export default Wishlist;