import React from 'react';
import { Text, View } from 'react-native';
import { useTheme, Input } from '@ui-kitten/components';

 const InputField = (props) => {  
  const theme = useTheme();
  const [value, setValue] = React.useState('');

  return (
    <View style={{marginTop:15, marginLeft:15,marginRight:15}}>
        <Text 
         style={[{ 
            fontSize: 15,
            marginLeft:15,
            marginBottom:5,
            color: theme['text-basic-color'],
            fontFamily: 'PTSans-Regular'},
            props.style
            ]}
            {...props}
            >
            {props.label}
        </Text>
        <Input
        placeholder='Place your Text'
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
        /> 
    </View>   
  );
}

export default InputField;