import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { View, StyleSheet, FlatList } from 'react-native';
import Ntext from '../component/Ntext';
import Colors from '../constant/Colors';
import ActionButton from '../component/ActionButton';
import * as StaticData from '../constant/StaticData';

const Address = (props) => {

  const theme = useTheme();
   
    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <FlatList 
            data={StaticData.AddressList} 
            keyExtractor={(item, index) => String(index)} 
            renderItem={({item, index}) => {
              return(
                <View>
                  <View style={styles.cover}>
                  <Ntext color={Colors.darktext} lineheight={22} fontsize={18} fontfamily='PTSans-Regular'>{item.firstName}, {item.lastName}, {item.company}, {item.address1}, {item.address2}, {item.zip}, {item.city}</Ntext>
                  </View>

                  <View style={styles.cover2}>
                    <View style={{ flex:1, alignItems:'flex-start', marginLeft:20 }}>
                      <ActionButton bwidth={55} iconColor={Colors.mainText} bordercolor={Colors.mainText} bcolor='transparent' icon='pencil'/>
                    </View>
                    <View style={{ flex:1, alignItems:'flex-end', marginRight:20 }}>
                      <ActionButton bwidth={55} iconColor={Colors.mainText} bordercolor={Colors.mainText} bcolor='transparent' icon='trash-o'/>
                    </View>
                  </View>  
                </View>
              ) 
            }}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
 cover: {
  marginLeft:20,
    marginRight:20,
    marginTop:20,
    backgroundColor: Colors.normaltext,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:15,
    paddingBottom:15,
    borderColor: Colors.gainsboro,
    borderRadius:5, 
    borderWidth:1
 },
 cover2: {
  marginLeft:20,
  marginRight:20,
  flexDirection:'row',
  backgroundColor: Colors.normaltext,
  padding:10,
  borderColor: Colors.gainsboro,
  borderRadius:5,
  borderWidth:1
},
});

export default Address;