import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { removeFromWishlist } from '../actions/wishlistItemAction'
import Card from '../component/Card';
import Ntext from '../component/Ntext';
import Colors from '../constant/Colors';
import Currency from '../component/Currency';
import Empty_Show from '../component/Empty_Show';
import BackgroundImage from '../component/BackgroundImage';
import * as StaticData from '../constant/StaticData';
import AntDesign from "react-native-vector-icons/AntDesign";

const Wishlist = (props) => {
  const theme = useTheme();

  const onRemoveItem = (index) =>{
    props.removeFromWishlist(index);
  }
  
    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        {props.wishlist.data.length!=0 ? 
        <FlatList  horizontal={false}
          data={props.wishlist.data}  
          keyExtractor={(item, index) => String(index)}
          renderItem={({item ,index}) =>   {
            return( 
              <Card disabled={true} style={{ height:120, backgroundColor: theme['background-basic-color-2'], margin:10, borderRadius: 10, shadowColor: 'black', shadowOpacity: 0.5, elevation: 5}}>
              {
                <View style={{flexDirection:'row'}}>
                  <Card cardwidth={80} cardheight={100}>
                  {
                    <BackgroundImage url={item.Image} bradius={10}/>
                  }
                  </Card>

                  <View style={{ flex:1,justifyContent:'center',alignContent:'center' }}>
                    <Ntext color={theme['text-custome-color']} lineheight={18} fontsize={15} fontfamily='PTSans-Regular'>{item.title}</Ntext>
                    <Currency color={Colors.gray} fontsize={15} currencyCode={item.currencyCode} amount={item.amount}/>
                  </View>

                  <TouchableOpacity onPress={() => onRemoveItem(index)} style={{justifyContent:'center', marginRight:20}}>
                    <AntDesign  name="delete" color='red' size={21}/>
                  </TouchableOpacity>
                </View>
              }
              </Card>
            )}}
        /> : null
        }

        <View style={{flex:1}}>
          {props.wishlist.data.length===0 ?
            <Empty_Show>YOUR WISHLIST IS EMPTY !!!</Empty_Show>: null
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
 }
});

const mapStateToProps = (state) => ({
  wishlist: state.wishlistItemReducer,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromWishlist: (Id) => dispatch(removeFromWishlist(Id)),
});

export default connect(mapStateToProps, mapDispatchToProps) (Wishlist);