import React, {useState, useEffect, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import  CheckBox  from '@react-native-community/checkbox'
import Dialog, { SlideAnimation, FadeAnimation, DialogContent } from 'react-native-popup-dialog';
import Colors from '../constant/Colors';
import Ntext from '../component/Ntext';
import FlatProduct from '../component/FlatProduct';
import Hairline from '../component/Hairline';
import Htext from '../component/Htext';
import * as StaticData from '../constant/StaticData';
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductList = (props) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [isAll, setAll] = useState(true);
  const [isPreWorkout, setPreWorkout] = useState(false);
  const [isCapsules, setCapsules] = useState(false);
  const [isProteinPowder, setProteinPowder] = useState(false);
  const [isPriceLow, setPriceLow] = useState(false);
  const [isPriceHigh, setPriceHigh] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
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
          height="50%"
          width='100%'
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
            
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isAll}
                onValueChange={setAll}
                tintColors={{ true: Colors.mainText }}
                tintColor={{ true: Colors.mainText }}
                style={styles.checkbox}
              />
              <Ntext style={{ marginTop:6,color:Colors.darktext, fontFamily:'PTSans-Regular', fontSize:15}} >All</Ntext>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isPreWorkout}
                tintColor={{ true: Colors.mainText }}
                tintColors={{ true: Colors.mainText }}
                onValueChange={setPreWorkout}
                style={styles.checkbox}
              />
              <Ntext style={{ marginTop:6,color:Colors.darktext, fontFamily:'PTSans-Regular', fontSize:15}} >Pre Workout</Ntext>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isCapsules}
                tintColor={{ true: Colors.mainText }}
                tintColors={{ true: Colors.mainText }}
                onValueChange={setCapsules}
                style={styles.checkbox}
              />
              <Ntext style={{ marginTop:6,color:Colors.darktext, fontFamily:'PTSans-Regular', fontSize:15}} >Capsules</Ntext>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isProteinPowder}
                tintColor={{ true: Colors.mainText }}
                tintColors={{ true: Colors.mainText }}
                onValueChange={setProteinPowder}
                style={styles.checkbox}
              />
              <Ntext style={{ marginTop:6,color:Colors.darktext, fontFamily:'PTSans-Regular', fontSize:15}} >Protein Powder</Ntext>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isPriceLow}
                tintColor={{ true: Colors.mainText }}
                tintColors={{ true: Colors.mainText }}
                onValueChange={setPriceLow}
                style={styles.checkbox}
              />
              <Ntext style={{ marginTop:6,color:Colors.darktext, fontFamily:'PTSans-Regular', fontSize:15}} >Price - Low To High</Ntext>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isPriceHigh}
                tintColor={{ true: Colors.mainText }}
                tintColors={{ true: Colors.mainText }}
                onValueChange={setPriceHigh}
                style={styles.checkbox}
              />
              <Ntext style={{ marginTop:6,color:Colors.darktext, fontFamily:'PTSans-Regular', fontSize:15}} >Price - High To Low</Ntext>
            </View>

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