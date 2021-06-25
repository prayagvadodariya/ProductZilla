import React from 'react';
import { Text, View } from 'react-native';
import { Input } from '@ui-kitten/components';
import Colors from '../constant/Colors';

 const InputField = (props) => {  
  const [value, setValue] = React.useState('');

  return (
    <View style={{marginTop:15, marginLeft:20,marginRight:20}}>
        <Text 
         style={[{ 
            fontSize: 18,
            marginLeft:0,
            marginBottom:5,
            color: Colors.cyanblue,
            fontFamily: 'PTSans-Regular'},
            props.style
            ]}
            {...props}
            >
            {props.label}
        </Text>
        <Input
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        /> 
    </View>   
  );
}

export default InputField;