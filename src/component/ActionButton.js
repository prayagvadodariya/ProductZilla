import React from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from '@ui-kitten/components';

 const ActionButton = (props) => { 
    const theme = useTheme();
   
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled} 
      style={[{ 
          justifyContent:'center',
          alignItems:'center',
          width: props.bwidth || 40,
          height: props.bheight || 40,
          borderRadius: 30,
          borderWidth:1,
          borderColor: props.bordercolor || theme['text-basic-color'],
          backgroundColor: props.bcolor || theme['text-basic-color']
          },props.style
        ]}
        {...props}
        >
        <FontAwesome name={props.icon} color={props.iconColor || theme['background-basic-color-2']} size={20} />   
    </TouchableOpacity>
  );
}

export default ActionButton;