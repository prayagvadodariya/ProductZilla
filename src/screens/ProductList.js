import React, {useState, useEffect, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { ScrollView, FlatList, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { CheckBox} from "react-native-elements";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import * as services from '../services/api';
import Loader from '../component/Loader';
import InfiniteScrollIndicator from '../component/InfiniteScrollIndicator';
import * as StaticData from '../constant/StaticData';
import Colors from '../constant/Colors';
import Items from '../component/Items';
import Hairline from '../component/Hairline';
import Htext from '../component/Htext';
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductList = (props) => {
  const theme = useTheme();
  const [orientation, setOrientation] = useState("PORTRAIT");
  const [loading, setLoading] = useState(true);
  const [loadmore, SetLoadMore] = useState(false);
  const [result, setResult] = useState(null);
  const [offset, setOffset] = useState(0);
  const [isFetching, setFetching] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isSelected, setSelection] = useState(0);
  const [isAll, setAll] = useState(1);
  const [isAz, setAz] = useState(false);
  const [isZa, setZa] = useState(false);
  const [isPriceLow, setPriceLow] = useState(false);
  const [isPriceHigh, setPriceHigh] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const Parameter = (offset) => {
    if(props.route.params.Producthandel.name!='All Products'){
      return  {
        "query":{
          "filter":`{\"collections.id\": { \"$hasSome\": ["${props.route.params.Producthandel.id}"]} }`,
          "paging": { 
            "limit": 10, 
            "offset": offset
          }
        }
      }
    }
    return {
        "query":{
          "paging": { 
            "limit": 10, 
            "offset": offset
          }
        }
      }
  }

  useEffect (() => {
    services.onProductsApi(Parameter(offset)).then(data => {
    setResult(data.products)  
    setLoading(false)  
    console.log('check', data.products);
    })  

    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width<height) {
        setOrientation("PORTRAIT")
      } else {
        setOrientation("LANDSCAPE")
    
      }
    })
  },[props.route.params.Producthandel.id])

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={showModal} style={{paddingRight:10}}>
             <AntDesign name="menu-unfold" color={theme['text-basic-color']} size={22}/>
        </TouchableOpacity>
      ),
    });
  },);

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
    services.onProductsApi(Parameter(offset+10)).then(data => {
      setResult([...result, ...data.products]); 
      SetLoadMore(false); 
      setOffset(offset+10);
    })
  }

  const onRefresh = () => {
    setFetching(true); 
    services.onProductsApi(Parameter(0)).then(data => {
      setResult(data.products); 
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
            if (result.length >= 10) {
              SetLoadMore(true)
              lodeMoreData();
            }
          }
        }
  }

  useEffect (() => {
    services.onProductsApi().then(data => {
    // setResult(data.products)  
    console.log("filterdata", data);
    })
  },[]) 


  const onselect = (val) => {
    setSelection(val.id);
  }
  
  if(loading && !result){
    return(
      <Loader/>
    )
  }

    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        {orientation==='LANDSCAPE'?( 
          <FlatList 
          key={'#'} 
          numColumns={4}
          data={result} 
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
          data={result} 
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
          )
        }
        <Dialog
          height="40%"
          width='100%'
          containerStyle={{flex:1,justifyContent:'flex-end', alignItems:'flex-end', marginBottom:-10}}
          dialogStyle={{borderTopLeftRadius:15, borderTopRightRadius:15, backgroundColor: theme['background-basic-color-2']}}
          onTouchOutside={() => {
          setVisible(false)
          }}
          visible={visible} onPress={hideModal}
          dialogAnimation={new SlideAnimation({
          slideFrom: 'bottom',})}>
          <DialogContent>
            <ScrollView>
              <View style={{ marginTop:15, alignSelf:'center'}}>
                <Hairline style={{height:5, width:40, backgroundColor:Colors.gray, borderRadius:30,alignItems:'center'}} />
              </View>

              <Htext style={{color:Colors.gray, fontSize:30, fontFamily:'CHESTER-Basic', textAlign:'left', marginTop:10 }}>SHORT BY :</Htext>
              
              {StaticData.Filter.map(data => (
                <CheckBox
                key={data.id}
                onPress={()=> onselect(data)}
                title={data.label}
                checked={isSelected===data.id}
                iconLeft={true}
                checkedColor={Colors.mainText}
                // uncheckedColor='#848896'
                textStyle={{color:theme['text-custome-color'], fontFamily:'PTSans-Regular'}}
                containerStyle={{backgroundColor:'transparent', borderColor:'transparent', margin:-5, marginLeft:-10}}
              />
              ))}
            </ScrollView>
          </DialogContent>
        </Dialog>  
      </View>
    );
  }


const styles = StyleSheet.create({
 contenar: {
  flex:1, 
  justifyContent:'center',
  alignItems:'center',
 },
 checkboxContainer: {
  flexDirection: "row",
  marginTop:5,
  marginLeft:-5
},
checkbox: {
  alignSelf: 'flex-start',
},
});

export default ProductList;