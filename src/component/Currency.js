import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@ui-kitten/components';

 const Currency = (props) => { 
  const theme = useTheme();   
  let currencysymbol = '$'

  if(props.currencyCode==='USD'){
    currencysymbol = '$'  
  }else if(props.currencyCode==='INR'){
    currencysymbol = '₹'  
  }
  else if(props.currencyCode==='EUR'){
    currencysymbol = '€'  
  }
  else if(props.currencyCode==='JPY'){
    currencysymbol = '¥'  
  }
  else if(props.currencyCode==='RUB'){
    currencysymbol = '₽'  
  }
  else if(props.currencyCode==='SGD'){
    currencysymbol = '$'  
  }
  else if(props.currencyCode==='ZAR'){
    currencysymbol = 'S'  
  }

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
    {currencysymbol}{props.amount}
  </Text>     
  );
}

export default Currency;