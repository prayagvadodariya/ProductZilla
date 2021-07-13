import React, {useState, useEffect, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { View, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';
import InfiniteScrollIndicator from '../component/InfiniteScrollIndicator';
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
  const [orientation, setOrientation] = useState("PORTRAIT");
  const [loading, setLoading] = useState(true);
  const [loadmore, SetLoadMore] = useState(false);
  const [search, setSearch] = useState('');
  const [searchProduct, setSearchProduct] = useState();
  const [result, setResult] = useState();
  const [mainproduct, setMainProduct] = useState();
  const [product, setProduct] = useState();
  const [offset, setOffset] = useState(0);
  const [isFetching, setFetching] = useState(false);
  const theme = useTheme();

  const Parameter = (id) => {
      return  {
        "query":{
          "filter":`{\"collections.id\": { \"$hasSome\": ["${id}"]} }`,
        }
      }
    }

   const newParam = (offset, search) =>{
    return {
      "query":{
        "filter":`{\"name\": { \"$contains\": ["${search}"]} }`,
        "paging": { 
          "limit": 10, 
          "offset": offset
        }
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
    })  
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width<height) {
        setOrientation("PORTRAIT")
      } else {
        setOrientation("LANDSCAPE")
    
      }
    })
  },[])

  const onSearch = (search) => {
    setSearch(search);
    services.onProductsApi(newParam(0, search)).then(data => {
      setSearchProduct(data.products)
      setLoading(false)    
    })  

  }

  const renderFooter = () => {
    return(
      <View>
        {loadmore && (
          <InfiniteScrollIndicator/>
        )}
      </View>
    )
  }

  const lodeMoreData = () => { 
    services.onProductsApi(newParam(offset+10, search)).then(data => {
      setSearchProduct([...searchProduct, ...data.products]); 
      SetLoadMore(false); 
      setOffset(offset+10);
    })
  }

  const onRefresh = () => {
    setFetching(true); 
    services.onProductsApi(newParam(0, search)).then(data => {
      setSearchProduct(data.products); 
      setFetching(false); 
      setOffset(0);
    })
  }

  const renderOnScroll = (e) => {
    let paddingToBottom = 10;
        paddingToBottom +=
        e.nativeEvent.layoutMeasurement.height;
        var currentOffset = e.nativeEvent.contentOffset.y;

        var direction = currentOffset > offset ? 'down' : 'up';

        if (direction === 'down') {
          if ( e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom ) {
            if (searchProduct.length >= 10) {
              SetLoadMore(true)
              lodeMoreData();
            }
          }
        }
  }
  
  if(loading===true  && !product){
    return(
      <Loader/>
    )
  }

    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <SearchBar
          containerStyle={{backgroundColor: 'transparent', borderTopColor:'transparent', borderBottomColor:'transparent'}}
          inputContainerStyle= {{backgroundColor:"white", borderRadius:6, margin:4, height:40}}
          inputStyle={{backgroundColor: 'white', fontSize:15}}
          placeholder="Type Here..."
          onChangeText={onSearch}
          value={search}
        />
        {search!=''?
        <>
        {orientation==='LANDSCAPE'?( 
          <FlatList 
          key={'#'} 
          numColumns={4}
          data={searchProduct} 
          keyExtractor={(item, index) => String(index)}
          // extraData={Colors, orientation}
          renderItem={({item, index}) => 
          { 
            return(
              <Items onPress={() => props.navigation.navigate("ProductDetails",{ Producthandel: item.id })} item={item}/>
            )
          }}
          ListFooterComponent={renderFooter}
          onScroll={e => renderOnScroll(e)}
          onRefresh={() => onRefresh()}
          refreshing={isFetching}
          />
        ):(
          <FlatList  
          numColumns={2}
          data={searchProduct} 
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => 
          { 
            return(
              <Items onPress={() => props.navigation.navigate("ProductDetails",{ Producthandel: item.id })} item={item}/>
            )
          }}
          ListFooterComponent={renderFooter}
          onScroll={e => renderOnScroll(e)}
          onRefresh={() => onRefresh()}
          refreshing={isFetching}
          />
          )
        }
        </>
      :null}
        {search==='' ?
        <ScrollView>
          <View style={{ alignSelf:'center', marginTop:25, marginBottom:15 }}>
            <Htext color={theme['text-basic-color']} fontsize={35} fontfamily='CHESTER-Basic'>CAPACITYX PRODUCTS</Htext>
          </View>

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
        :null}
      </View>
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