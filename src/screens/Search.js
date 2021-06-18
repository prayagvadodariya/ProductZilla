import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import Cbutton from '../component/Cbutton';
import Flat_Product from '../component/Flat_Product';
import Card from '../component/Card';
import * as StaticData from '../constant/StaticData';

const Search = () => {
  const [search, setSearch] = useState('');
  const theme = useTheme();

  const updateSearch = (search) => {
    setSearch(search);
  }
   
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <SearchBar
          containerStyle={{backgroundColor: 'transparent', borderTopColor:'transparent', borderBottomColor:'transparent'}}
          inputContainerStyle= {{backgroundColor:"white", borderRadius:6, margin:4, height:40}}
          inputStyle={{backgroundColor: 'white', fontSize:15}}
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />

        <View style={{ alignSelf:'center', marginTop:25, marginBottom:15 }}>
          <Htext color={Colors.mainText} fontsize={35} fontfamily='CHESTER-Basic'>CAPACITYX PRODUCTS</Htext>
        </View>

        <View>
          <Flat_Product productdata={StaticData.Product_List} showlayout={true}/>
        </View>

        <View style={{ marginTop:20, marginLeft:20, marginRight:20 }}>
          <Htext color={Colors.mainText} fontsize={20} >SHOP BY</Htext>
        </View>

        <View style={{ marginBottom:20 }}>
          <Card productdata={StaticData.Shop_by} cardwidth={140} cardheight={140} showlayout={true}/>
        </View>

        <View style={{flex:1,justifyContent:'flex-end', alignItems:'flex-end', marginBottom:20}}>
         <Cbutton textcolor={Colors.mainText} bcolor="transparent" bwith={120} bheight={42} bordercolor={Colors.mainText}>SEE ALL</Cbutton>
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

export default Search;