import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Input,Icon } from '@ui-kitten/components';
import Colors from '../constant/Colors';

 const InputField = (props) => { 
  const [secureTextEntry, setSecureTextEntry] = React.useState(props.secureTextEntry); 

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = () => {
    console.log('c',props);
    return(    
      <TouchableOpacity onPress={toggleSecureEntry}>
         <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
      </TouchableOpacity>
   )
  }

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
        accessoryRight={props?.type ? 
            props.type==='security'?  
            (props => <Icon onPress={toggleSecureEntry} {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>): (props => <Icon {...props} name='email-outline'/>)
            :null}
        secureTextEntry={secureTextEntry || false}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        /> 
    </View>   
  );
}

export default InputField;