import React, {useState, useEffect, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import Cbutton from '../component/Cbutton';
import FlatProduct from '../component/FlatProduct';
import BackgroundImage from '../component/BackgroundImage';
import Card from '../component/Card';
import * as services from '../services/services_hendler';
import * as StaticData from '../constant/StaticData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StorageKeys from '../constant/StorageKeys';

const Search = (props) => {
  const [search, setSearch] = useState('');
  const theme = useTheme();

  // useEffect (() => {
  //   services.onCollectionsApi().then(data => {
  //   console.log('data',data);
  //   })  
  // },[])


const retriveData = async () => {
  const value = await AsyncStorage.getItem(StorageKeys.AUTH_TOKEN);
  return JSON.parse(value)
}


var p = Promise.resolve(retriveData());
p.then(function(v) {
  console.log(v); // 1
});

console.log('geter', p);

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
          <Htext color={theme['text-basic-color']} fontsize={35} fontfamily='CHESTER-Basic'>CAPACITYX PRODUCTS</Htext>
        </View>

        <FlatProduct onPress={(item) => props.navigation.navigate("ProductDetails",{ Producthandel: item.id })} productdata={StaticData.Product_List} showlayout={true}/>

        <View style={{ alignSelf:'flex-start',marginTop:20, marginLeft:10, marginRight:10 }}>
          <Htext color={theme['text-basic-color']} fontsize={20} >SHOP BY</Htext>
        </View>

        <FlatList
          horizontal={true}
          data={StaticData.Shop_by} 
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => 
          { 
          return (
           <Card cardwidth={140} cardheight={140}>
             {
              <BackgroundImage height={"100%"} url={item.url} bradius={10}>
                <View style={styles.textcontent}>
                  <Htext style={{ fontSize:18, fontWeight:"bold", color:Colors.normaltext}}>{item.title}</Htext>  
                </View>
             </BackgroundImage>
             }
           </Card>
          )}}
        />

        <View style={{flex:1,justifyContent:'flex-end', alignItems:'flex-end', margin:20}}>
         <Cbutton textcolor={Colors.mainText} bcolor="transparent" bwidth={120} bheight={42} bordercolor={Colors.mainText}>SEE ALL</Cbutton>
        </View>

      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 textcontent:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.3)'
},
});

export default Search;