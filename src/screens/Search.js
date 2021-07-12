import React, {useState, useEffect, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Loader from '../component/Loader';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import Cbutton from '../component/Cbutton';
import Items from '../component/Items';
import BackgroundImage from '../component/BackgroundImage';
import Card from '../component/Card';
import * as services from '../services/api';

const Search = (props) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState();
  const [mainproduct, setMainProduct] = useState();
  const [product, setProduct] = useState();
  const theme = useTheme();

  const Parameter = (id) => {
      return  {
        "query":{
          "filter":`{\"collections.id\": { \"$hasSome\": ["${id}"]} }`,
        }
      }
    }

  useEffect (() => {

    services.onCollectionsApi().then(data => {
      setResult(data)
      let val = data.collections.find(item => item.name === 'Protein Powder');
      setMainProduct(val)
    services.onProductsApi(Parameter(val.id)).then(data => {
      setProduct(data.products)
      setLoading(false)    
      })      
    // console.log('data',data);
    })  
  },[])

  const updateSearch = (search) => {
    setSearch(search);
  }

  console.log('data1',mainproduct);
  
  if(loading===true  && !product){
    return(
      <Loader/>
    )
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

        {/* <FlatProduct onPress={(item) => props.navigation.navigate("ProductDetails",{ Producthandel: item.id })} productdata={StaticData.Product_List} showlayout={true}/> */}

        <View style={{ alignSelf:'flex-start',marginTop:20, marginLeft:10, marginRight:10 }}>
          <Htext color={theme['text-basic-color']} fontsize={20} >SHOP BY</Htext>
        </View>

        <FlatList
          horizontal={true}
          data={result.collections} 
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => 
          { 
          return (
           <Card key={index} cardwidth={140} cardheight={140} onPress={() => props.navigation.navigate("ProductList",{ Producthandel: item })}>
             {
              <BackgroundImage height={"100%"} url={item.media.mainMedia.image.url} bradius={10}>
                <View style={styles.textcontent}>
                  <Htext style={{ fontSize:18, fontWeight:"bold", color:Colors.normaltext}}>{item.name}</Htext>  
                </View>
             </BackgroundImage>
             }
           </Card>
          )}}
        />

        <View style={{ alignSelf:'center', marginTop:25, marginBottom:15 }}>
          <Htext color={theme['text-basic-color']} fontsize={35} fontfamily='CHESTER-Basic'>{mainproduct.name}</Htext>
        </View>

        <FlatList
          horizontal={true}
          data={product} 
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => 
          { 
            return(
              <Items onPress={() => props.navigation.navigate("ProductDetails",{ Producthandel: item.id })} item={item}/>
            )
          }}
        />

        <View style={{flex:1,justifyContent:'flex-end', alignItems:'flex-end', margin:20}}>
         <Cbutton onPress={() => props.navigation.navigate("ProductList",{ Producthandel: mainproduct })} textcolor={Colors.mainText} bcolor="transparent" bwidth={120} bheight={42} bordercolor={Colors.mainText}>SEE ALL</Cbutton>
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