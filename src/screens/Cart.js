import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Card from '../component/Card';
import Ntext from '../component/Ntext';
import Colors from '../constant/Colors';
import Cbutton from '../component/Cbutton';
import BackgroundImage from '../component/BackgroundImage';
import AntDesign from "react-native-vector-icons/AntDesign";
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
              <View style={styles.layout}>
                <Card cardwidth={95} cardheight={100}>
                  {
                    <BackgroundImage url={item.url} bradius={10}/>
                  }
                </Card>
                <View style={{ flexDirection:"column" }}>
                  <View style={{ marginTop:15, flexWrap: 'wrap'}}>
                   <Ntext color={theme['text-custome-color']} fontsize={18} fontfamily='PTSans-Regular'>{item.title}</Ntext>
                   <Ntext color={Colors.gray} fontsize={15} >{item.amount}</Ntext>
                    {/* <Text style={styles.itemtitle}>{item.title}</Text> */}
                  </View>  
                </View>
                <View style={{ flex:1, alignItems:"flex-end", flexDirection:'column' }}>
                  <TouchableOpacity style={styles.icon}>
                    <AntDesign  name="delete" color='red' size={21}/>
                  </TouchableOpacity>

                  <View style={{alignItems:'center', flexDirection:'column', marginRight:15, width:25, height:75, margin:5, borderRadius:21, backgroundColor:'#fff' }}>
                    <TouchableOpacity  style={{flex:1, alignItems:'flex-start' }}>
                      <AntDesign style={{marginTop:5}} name="plus" color='gray' size={18}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:15, marginBottom:5, color:Colors.gray}}>2</Text>
                    <TouchableOpacity style={{alignItems:'flex-end'}}>
                      <AntDesign style={{marginBottom:0}} name="minus" color='gray' size={18}/>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            )
          }}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
 layout: {
  flex:1,
  flexDirection:"row",
  margin:10,
  marginTop: 10,
  backgroundColor: 'transparent',
 },
 icon:{
  flex:1,
  alignItems:"flex-end",
  marginRight:17,
  marginTop:10
},
});

export default Cart;