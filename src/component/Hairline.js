import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@ui-kitten/components';

 const Hairline = (props) => {  
  const theme = useTheme();

  return (
    <View 
      style={{
        flex: 1,
        height: 1,
        backgroundColor: theme['text-basic-color']
      }}
    />
  );
}

export default Hairline;