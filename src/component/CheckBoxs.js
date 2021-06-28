import React from 'react';
import { View } from 'react-native';
import  CheckBox  from '@react-native-community/checkbox'
import Ntext from './Ntext';

 const CheckBoxs  = (props) => {

  return (
    <View style={[{
        flexDirection: "row",
        marginTop:5,
        marginLeft:-5},
        props.style
        ]}
        {...props}
        >
        <CheckBox
            value={props.value}
            tintColor={props.tintColor}
            tintColors={props.tintColors}
            onValueChange={props.onValueChange}
            style={{ alignSelf: 'flex-start' }}
        />
        <Ntext style={{ 
            marginTop:6,
            color: props.textColor, 
            fontFamily:'PTSans-Regular', 
            fontSize:15
            }}>{props.label}</Ntext>
    </View>
  )};

  export default CheckBoxs;

