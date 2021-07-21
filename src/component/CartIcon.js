import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { connect } from 'react-redux';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Badge } from 'react-native-elements';

const CartIcon = (props) =>{
  const theme = useTheme();
  let arr = props.cartlist.data
  let sum = arr.reduce(function(a,b){return parseInt(a) + parseInt(b.quantity)},0)

  return(
    <TouchableOpacity onPress={props.onPress} style={{paddingRight:15}}>
      <AntDesign name="shoppingcart" color={theme['text-basic-color']} size={23}/>
      <Badge value={sum} status="error"  containerStyle={{ position: 'absolute', top: -8, right: 8 }}/>
    </TouchableOpacity>
  )
}
const mapStateToProps = (state) => ({
  cartlist: state.cartItemReducer,
});

export default connect(mapStateToProps,null) (CartIcon);