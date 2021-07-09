import React, {useState, useEffect, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { ScrollView, FlatList, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import * as services from '../services/api';
import Loader from '../component/Loader';
import InfiniteScrollIndicator from '../component/InfiniteScrollIndicator';
import CkeckBoxs from '../component/CheckBoxs';
import Colors from '../constant/Colors';
import Items from '../component/Items';
import FlatProduct from '../component/FlatProduct';
import Hairline from '../component/Hairline';
import Htext from '../component/Htext';
import * as StaticData from '../constant/StaticData';
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductList = (props) => {
  const theme = useTheme();
  const [orientation, setOrientation] = useState("PORTRAIT");
  const [loading, setLoading] = useState(true);
  const [loadmore, SetLoadMore] = useState(false);
  const [result, setResult] = useState(null);
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isAll, setAll] = useState(true);
  const [isPreWorkout, setPreWorkout] = useState(false);
  const [isCapsules, setCapsules] = useState(false);
  const [isProteinPowder, setProteinPowder] = useState(false);
  const [isPriceLow, setPriceLow] = useState(false);
  const [isPriceHigh, setPriceHigh] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  console.log('props', props);

  useEffect (() => {
    if(props.route.params.Producthandel.name!='All Products'){
      var Parameter = {
        "query":{
          "filter":`{\"collections.id\": { \"$hasSome\": ["${props.route.params.Producthandel.id}"]} }`,
          "paging": { 
            "limit": 10, 
            "offset": offset
          }
        }
      }
      console.log('query', Parameter);
    }
    else{
      var Parameter = {
        "query":{
        "paging": { 
          "limit": 10, 
          "offset": offset
        }
      }
    }
    }
    services.onProductsApi(Parameter).then(data => {
    setResult(data)  
    setLoading(false)  
    console.log('data',data);
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
    
    if(props.route.params.Producthandel.name!='All Products'){
      var Parameter = {
        "query":{
          "filter":`{\"collections.id\": { \"$hasSome\": ["${props.route.params.Producthandel.id}"]} }`,
          "paging": { 
            "limit": 10, 
            "offset": offset + 10 
          }
        }
      }
    }
    else{
      var Parameter = {
        "query":{
          "paging": { 
            "limit": 10, 
            "offset": offset + 10 
          }
        }
      }
    }
    services.onProductsApi(Parameter).then(data => {
      setResult([...result, ...data]); 
      SetLoadMore(false); 
      setOffset(offset+10);
      // console.log('data',data);
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
            if (result.products.length >= 10) {
              console.log('nextpage');
              SetLoadMore(true)
              lodeMoreData();
            }
          }
        }
  }
  
  console.log("cpmbin", result);
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
          data={result.products} 
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
          />
        ):(
          <FlatList  
          numColumns={2}
          data={result.products} 
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
        />
        )
        }
        <Dialog
          height="45%"
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
              
              <CkeckBoxs
                label='All'
                value={isAll}
                onValueChange={setAll}
                tintColors={{ true: Colors.mainText }}
                tintColor={{ true: Colors.mainText }}
                textColor={theme['text-custome-color']}
              />

              <CkeckBoxs
                label='Pre Workout'
                value={isPreWorkout}
                onValueChange={setPreWorkout}
                tintColors={{ true: Colors.mainText }}
                tintColor={{ true: Colors.mainText }}
                textColor={theme['text-custome-color']}
              />

              <CkeckBoxs
                label='Capsules'
                value={isCapsules}
                onValueChange={setCapsules}
                tintColors={{ true: Colors.mainText }}
                tintColor={{ true: Colors.mainText }}
                textColor={theme['text-custome-color']}
              />

              <CkeckBoxs
                label='Protein Powder'
                value={isProteinPowder}
                onValueChange={setProteinPowder}
                tintColors={{ true: Colors.mainText }}
                tintColor={{ true: Colors.mainText }}
                textColor={theme['text-custome-color']}
              />

              <CkeckBoxs
                label='Price - Low To High'
                value={isPriceLow}
                onValueChange={setPriceLow}
                tintColors={{ true: Colors.mainText }}
                tintColor={{ true: Colors.mainText }}
                textColor={theme['text-custome-color']}
              />      

              <CkeckBoxs
                label='Price - High To Low'
                value={isPriceHigh}
                onValueChange={setPriceHigh}
                tintColors={{ true: Colors.mainText }}
                tintColor={{ true: Colors.mainText }}
                textColor={theme['text-custome-color']}
              />  
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