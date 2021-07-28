import React, {useState, useEffect, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { ScrollView, FlatList, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { CheckBox} from "react-native-elements";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import * as services from '../services/api';
import Loader from '../component/Loader';
import Empty_Show from '../component/Empty_Show';
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
  const [isSelected, setSelection] = useState('All');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // const Parameter = (offset) => {
  //   if(props.route.params.Producthandel.name!='All Products'){
  //     return  {
  //       "query":{
  //         "filter":`{\"collections.id\": { \"$hasSome\": ["${props.route.params.Producthandel._id}"]} }`,
  //         "paging": { 
  //           "limit": 10, 
  //           "offset": offset
  //         },
  //       }
  //     }
  //   }
  //   return {
  //       "query":{
  //         "paging": { 
  //           "limit": 10, 
  //           "offset": offset
  //         }
  //       }
  //     }
  // }

  const Parameter = (_id) => {
    if(props.route.params.Producthandel.name!='All Products'){
      return {
        id: _id
      }
    }else{
      return {
        "query":{}
      }
    }
  }

  console.log("checkprops",props.route.params.Producthandel);

  const UpdateParam = (val,offset) => {
    if(val==='All'){
      return Parameter(offset);
    }else if(val==='A-Z'){
      return {"query": Object.assign({}, Parameter(offset).query, {"sort":"[{\"name\": \"asc\"}]"})} 
    }else if(val==='Z-A'){
      return {"query": Object.assign({}, Parameter(offset).query, {"sort":"[{\"name\": \"desc\"}]"})}
    }else if(val==='Price - Low To High'){
      return {"query": Object.assign({}, Parameter(offset).query, {"sort":"[{\"price\": \"asc\"}]"})}
    }else if(val==='Price - High To Low'){
      return {"query": Object.assign({}, Parameter(offset).query, {"sort":"[{\"price\": \"desc\"}]"})}
    }
  }

  useEffect (() => { 
    services.getProductList(Parameter(props.route.params.Producthandel._id)).then(data => {
    setResult(data.items)  
    setLoading(false) 
    console.log("productlist",data.items)
    })

    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width<height) {
        setOrientation("PORTRAIT")
      } else {
        setOrientation("LANDSCAPE")
      }
    })
  },[props.route.params.Producthandel._id])

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={showModal} style={{paddingRight:10}}>
          <AntDesign name="menu-unfold" color={theme['text-basic-color']} size={22}/>
        </TouchableOpacity>
      ),
    });
  },);

  const renderItem = ({ item,index }) => {
    return(
      <Items onPress={() => props.navigation.navigate("ProductDetails",{ Producthandel: item })} item={item}/>
    )
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
    var param = ''
    if(isSelected==='All'){
     param = Parameter(offset+10)
    }else{
     param = UpdateParam(isSelected, offset+10)  
    }
    services.onProductsApi(param).then(data => {
      setResult([...result, ...data.products]); 
      SetLoadMore(false); 
      setOffset(offset+10);
    })
  }

  const onRefresh = () => {
    setFetching(true); 
    var param = ''
    if(isSelected==='All'){
     param = Parameter(0)
    }else{
     param = UpdateParam(isSelected, 0)  
    }
    services.onProductsApi(param).then(data => {
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

  const onselect = (val) => {
    setSelection(val.label); 
    setOffset(0);
    services.onProductsApi(UpdateParam(val.label, 0)).then(data => {
      setResult(data.products)
    });
  }
  
  if(loading && !result){
    return(
      <Loader/>
    )
  }

    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        {result.length!=0 ?
        <>
        {orientation==='LANDSCAPE'?( 
          <FlatList 
          key={'#'} 
          numColumns={4}
          data={result} 
          keyExtractor={(item, index) => String(index)}
          renderItem={renderItem}
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
          renderItem={renderItem}
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
                key={data.label}
                onPress={()=> onselect(data)}
                title={data.label}
                checked={isSelected===data.label}
                iconLeft={true}
                checkedColor={Colors.mainText}
                textStyle={{color:theme['text-custome-color'], fontFamily:'PTSans-Regular'}}
                containerStyle={{backgroundColor:'transparent', borderColor:'transparent', margin:-5, marginLeft:-10}}
              />
              ))}
            </ScrollView>
          </DialogContent>
        </Dialog>
        </>
        : null
        }

        <View style={{flex:1}}>
          {result.length===0 ?
            <Empty_Show>NO PRODUCT FOUND !!!</Empty_Show>: null
          }
        </View>  
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