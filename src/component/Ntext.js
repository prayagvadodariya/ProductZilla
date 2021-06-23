import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@ui-kitten/components';

 const Htext = (props) => {  
  const theme = useTheme();  
  return (
      <Text 
        style={[{ 
          fontSize: props.fontsize || 15,
          color: props.color || theme['text-basic-color'],
          fontFamily: props.fontfamily,
          lineHeight: props.lineheight },
          props.style
        ]}
        {...props}
        >
        {props.children}
      </Text>     
  );
}

export default Htext;