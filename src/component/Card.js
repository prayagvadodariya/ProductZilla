import React from 'react';
import { TouchableOpacity } from 'react-native';

 const Card = (props) => {  
    
  return (
    <TouchableOpacity onPress={props.onPress} 
      style={{ 
        width: props.cardwidth || "100%",
        height: props.cardheight || 200,
        backgroundColor: props.cardbackground || 'gray',
        margin: props.margin || 10,
        borderRadius: props.cardbradius || 10
      }}
      {...props}
      >
      {props.children} 
    </TouchableOpacity>
        
    
  );
}

export default Card;