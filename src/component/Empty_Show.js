import React from 'react';
import { View, Image } from 'react-native';
import Htext from '../component/Htext';
import { useTheme } from '@ui-kitten/components';

 const Empty_Show = (props) => {  
  const theme = useTheme();

  return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center" }}>
      <Image source={require('../assets/images/No_Product_Found.png')} style={{width: 200,height: 200}}/>
      <Htext style={{ color:theme['text-basic-color'], fontSize:31, fontFamily:'CHESTER-Basic', textAlign:'center', marginTop:40 }}>{props.children}</Htext>
    </View>
  )
}

export default Empty_Show;