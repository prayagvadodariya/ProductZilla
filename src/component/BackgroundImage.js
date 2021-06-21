import React from 'react';
import { ImageBackground } from 'react-native';

 const BackgroundImage = (props) => {  
     
  return (
    <ImageBackground 
      style={[{ 
        height: props.height},
        props.style
      ]} 
        source={{ uri: props.url }}>
        {props.children}
    </ImageBackground>
  );
}

export default BackgroundImage;