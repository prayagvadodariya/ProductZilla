import React,{useEffect, useState} from 'react';
import { StyleSheet, ScrollView, View, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../actions/wishlistItemAction'
import Colors from '../constant/Colors';
import Currency from '../component/Currency';
import Htext from '../component/Htext';
import AntDesign from "react-native-vector-icons/AntDesign";

 const Items = (props) => { 
  const theme = useTheme();
  const [isfavorite, setIsFavorite] = useState([]);

  useEffect(() => {
    if(props.wishlist.data.length!=0){
      setIsFavorite(props.wishlist.data.map((item) => {return item.id}))
    }else{
      setIsFavorite([])
    }
  }, [props.wishlist]);

  const addWishlistItem = (item) => {
    let id = props.wishlist.data.findIndex((em) => em.id=== item.id);
    if(isfavorite.indexOf(item.id)>-1){    
      props.removeFromWishlist(id);
      console.log('inactivenot', id);
    }else{
      setIsFavorite([...isfavorite, item.id])
      const wishlistItem = {
        id: item.id,
        Image: item.media.items[0].image.url,
        title: item.name,
        currencyCode: item.price.currency,
        amount: item.price.price,
       }
      props.addToWishlist(wishlistItem);
      console.log('checkactive',wishlistItem);
    }
   }

  console.log('checkondexof', props.wishlist);
  if(!props.item){
    <Text>loading</Text>
  }

    return (
      <View>
        <TouchableOpacity onPress={props.onPress}> 
          <View style={styles.top}>
            <Image source={props.item.media?.items[0]?.image?.url!=null ? {uri: props.item.media?.items[0]?.image?.url } : require('../assets/images/default_image.png')} resizeMode='stretch' style={{height: "100%", width:'100%'}}/>
          </View>
          <View style={{width: 160, margin:10}}>
            <Htext style={{textAlign:"center", paddingLeft:10, paddingRight:10, color: theme['text-basic-color'], fontFamily:'PTSans-Regular', fontSize:15, fontWeight:'800' }}>{props.item.name}</Htext>
          </View>
        </TouchableOpacity>
        <View style={styles.cover}>
          <Currency style={{color: theme['text-basic-color'],textAlign:"center", margin:5, fontSize:15}} currencyCode={props.item.price.currency} amount={props.item.price.price}/>
          <TouchableOpacity onPress={() => addWishlistItem(props.item)}>
            <AntDesign style={{ marginLeft:10,marginTop:8}} name={isfavorite.indexOf(props.item.id)>-1  ? 'heart' : 'hearto'} color={theme['text-basic-color']} size={15} />
          </TouchableOpacity>  
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
  top: {
   position: 'relative',
   width: Dimensions.get('screen').width / 2 - 20,
   height: 250,
   margin: 10,
   borderWidth:1,
   borderColor:Colors.mainText
  },
  titleStyle:{
    fontFamily:'Roboto',
    textAlign:'center',
    color:'gray',
    fontSize:25,
  },
  cover: {
    flexDirection:"row",
    justifyContent:"center",
  },
});

const mapStateToProps = (state) => ({
  wishlist: state.wishlistItemReducer,
});


const mapDispatchToProps = (dispatch) => ({
  addToWishlist: (wishlistItem) => dispatch(addToWishlist(wishlistItem)),
  removeFromWishlist: (Id) => dispatch(removeFromWishlist(Id)),
});

export default connect(mapStateToProps,mapDispatchToProps) (Items);