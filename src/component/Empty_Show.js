import React from 'react';
import { View } from 'react-native';
import Htext from '../component/Htext';
import { useTheme } from '@ui-kitten/components';

 const Empty_Show = (props) => {  
  const theme = useTheme();

  return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center" }}>
      <Htext style={{ color:theme['text-basic-color'], fontSize:31, fontFamily:'CHESTER-Basic', textAlign:'center' }}>{props.children}</Htext>
    </View>
  )
}

export default Empty_Show;