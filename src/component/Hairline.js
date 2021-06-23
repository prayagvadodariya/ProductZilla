import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@ui-kitten/components';

 const Hairline = (props) => {  
  const theme = useTheme();

  return (
    <View 
      style={[{
        flex: 1,
        height: props.height || 1,
        marginLeft: props.mleftright,
        marginRight: props.mleftright,
        backgroundColor: props.bcolor || theme['text-basic-color']},
        props.style  
        ]}
        {...props}
    />
  );
}

export default Hairline;