import React, {useState, useEffect, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import * as services from '../services/api';
import Loader from '../component/Loader';
import CkeckBoxs from '../component/CheckBoxs';
import Colors from '../constant/Colors';
import FlatProduct from '../component/FlatProduct';
import Hairline from '../component/Hairline';
import Htext from '../component/Htext';
import * as StaticData from '../constant/StaticData';
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductList = (props) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [visible, setVisible] = useState(false);
  const [isAll, setAll] = useState(true);
  const [isPreWorkout, setPreWorkout] = useState(false);
  const [isCapsules, setCapsules] = useState(false);
  const [isProteinPowder, setProteinPowder] = useState(false);
  const [isPriceLow, setPriceLow] = useState(false);
  const [isPriceHigh, setPriceHigh] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect (() => {
    services.onProductsApi().then(data => {
    setResult(data)  
    setLoading(false)  
    console.log('data',data);
    })  
  },[])


  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={showModal} style={{paddingRight:10}}>
             <AntDesign name="menu-unfold" color={theme['text-basic-color']} size={22}/>
        </TouchableOpacity>
      ),
    });
  },);


  if(loading===true && !result){
    return(
      <Loader/>
    )
  }

    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <FlatProduct onPress={(item) => props.navigation.navigate("ProductDetails",{ Producthandel: item.id })} productdata={StaticData.Product_List}/>
        
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