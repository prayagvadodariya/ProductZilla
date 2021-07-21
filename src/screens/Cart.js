import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { editFromCart, removeFromCart } from '../actions/cartItemAction';
import Card from '../component/Card';
import Htext from '../component/Htext';
import Ntext from '../component/Ntext';
import Currency from '../component/Currency';
import Colors from '../constant/Colors';
import Cbutton from '../component/Cbutton';
import Empty_Show from '../component/Empty_Show';
import BackgroundImage from '../component/BackgroundImage';
import Hairline from '../component/Hairline';
import AntDesign from "react-native-vector-icons/AntDesign";
import * as StaticData from '../constant/StaticData';

const Cart = (props) => {
  const theme = useTheme();
  let arr = props.cartlist.data
  let sum = arr.reduce(function(a,b){return parseFloat(a) + parseFloat(b.quantity) * b.amount},0)

  const deleteItem = (index) =>{
    props.removeFromCart(index);
  }

  const plusItem = (item,index) => {
      var count = parseInt(item.quantity) + 1;
        const updateItem = {
          id: item.id,
          Image: item.Image,
          title:  item.title,
          amount: item.amount,
          currencyCode: item.currencyCode,
          quantity: count.toString()
        }
        props.editFromCart(updateItem,index);
  }

  const minusItem = (item,index) => {
    if((parseInt(item.quantity))==1){
      const updateItem = {
        id: item.id,
        Image: item.Image,
        title:  item.title,
        amount: item.amount,
        currencyCode: item.currencyCode,
        quantity: item.quantity
      }
      props.editFromCart(updateItem,index);
    }else{
      var count = parseInt(item.quantity) - 1;
      const updateItem = {
        id: item.id,
        Image: item.Image,
        title:  item.title,
        amount: item.amount,
        currencyCode: item.currencyCode,
        quantity: count.toString()
      }
      props.editFromCart(updateItem,index);
    }

  }

   
    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        {props.cartlist.data.length!=0 ?
        <ScrollView>
          <FlatList  horizontal={false}
            data={props.cartlist.data}  
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={{flexGrow:1}}
            renderItem={({item ,index}) =>   {
              return(
                <>
                <View style={styles.layout}>
                  <Card cardwidth={95} cardheight={100}>
                    {
                      <BackgroundImage url={item.Image} bradius={10}/>
                    }
                  </Card>
                  <View style={{ flex:1,marginTop:15,marginRight:5 }}>
                    <Ntext color={theme['text-custome-color']} lineheight={18} fontsize={15} fontfamily='PTSans-Regular'>{item.title}</Ntext>
                    <Currency color={Colors.gray} fontsize={15} currencyCode={item.currencyCode} amount={item.amount}/>
                  </View>

                  <View style={{  alignItems:"flex-end", flexDirection:'column' }}>
                    <TouchableOpacity onPress={() => deleteItem(index)} style={styles.icon}>
                      <AntDesign  name="delete" color='red' size={21}/>
                    </TouchableOpacity>

                    <View style={{alignItems:'center', flexDirection:'column', marginRight:15, width:25, height:75, margin:5, borderRadius:21, backgroundColor:'#fff' }}>
                      <TouchableOpacity onPress={() => plusItem(item,index)} style={{flex:1, alignItems:'flex-start' }}>
                        <AntDesign style={{marginTop:5}} name="plus" color='gray' size={18}/>
                      </TouchableOpacity>
                      <Text style={{fontSize:15, marginBottom:5, color:Colors.gray}}>{item.quantity}</Text>
                      <TouchableOpacity onPress={() => minusItem(item,index)} style={{alignItems:'flex-end'}}>
                        <AntDesign style={{marginBottom:0}} name="minus" color='gray' size={18}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <Hairline height={0.5} mleftright={15} bcolor={Colors.gray}/>
                </>
              )
            }}
          />
       
          <View style={{ flexDirection:'row',margin:15 }}>
          <Htext color={theme['text-custome-color']} fontfamily='PTSans-Regular' fontsize={18}>Sub Total :</Htext> 
            <Currency  style={{flex:1, textAlign:'right', fontSize:18, color:theme['text-custome-color']}} currencyCode='INR' fontsize={18} amount={sum}/>
          </View>

          <Htext color={theme['text-custome-color']} fontfamily='PTSans-Regular' fontsize={18}>Shipping, textes, and discounts will be calculated at checkout.</Htext>
          
          <View style={{margin:18}}>
            <Cbutton textcolor={Colors.mainText} bcolor="transparent" bwidth='100%' bheight={42} bordercolor={Colors.mainText}>CHECKOUT</Cbutton> 
          </View>
        </ScrollView>
        :null}

        <View style={{flex:1}}>
          {props.cartlist.data.length===0 ?
            <Empty_Show>YOUR CART IS EMPTY !!!</Empty_Show>
          : null}
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
 layout: {
  flex:1,
  flexDirection:"row",
  margin:5,
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

const mapStateToProps = (state) => ({
  cartlist: state.cartItemReducer,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (Id) => dispatch(removeFromCart(Id)),
  editFromCart: (updateItem, index) => dispatch(editFromCart(updateItem, index)),
});

export default connect(mapStateToProps,mapDispatchToProps) (Cart);