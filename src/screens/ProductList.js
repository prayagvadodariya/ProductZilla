import React, {useState, Component} from 'react';
import { useTheme , CheckBox  } from '@ui-kitten/components';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Dialog, { SlideAnimation, FadeAnimation, DialogContent } from 'react-native-popup-dialog';
import Colors from '../constant/Colors';
import FlatProduct from '../component/FlatProduct';
import Hairline from '../component/Hairline';
import Htext from '../component/Htext';
import * as StaticData from '../constant/StaticData';
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductList = (props) => {
  const theme = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={showModal} style={{paddingRight:10}}>
             <AntDesign name="menu-unfold" color={theme['text-basic-color']} size={25}/>
        </TouchableOpacity>
      ),
    });
  },);

    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <FlatProduct onPress={(item) => props.navigation.navigate("ProductDetails",params= { Producthandel: item.id })} productdata={StaticData.Product_List}/>
        <Dialog
          height="55%"
          width='100%'
          overlayBackgroundColor='transparent'
          dialogStyle={{marginTop:450, borderRadius:15}}
          onTouchOutside={() => {
          setVisible(false)
          }}
          visible={visible} onPress={hideModal}
          dialogAnimation={new SlideAnimation({
          slideFrom: 'bottom',})}>
          <DialogContent>
            <View style={{ marginTop:15, alignSelf:'center'}}>
              <Hairline style={{height:5, width:40, backgroundColor:Colors.gray, borderRadius:30,alignItems:'center'}} />
            </View>

            <Htext style={{color:Colors.gray, fontSize:30, fontFamily:'CHESTER-Basic', textAlign:'left', marginTop:10 }}>SHORT BY :</Htext>
            <CheckBox
              checked={checked}
              onChange={nextChecked => setChecked(nextChecked)}>
              {`Checked: ${checked}`}
            </CheckBox>
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
 }
});

export default ProductList;