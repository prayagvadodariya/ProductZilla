import React from 'react';
import { ImageBackground } from 'react-native';

 const BackgroundImage = (props) => {  
  return (
    <ImageBackground 
      style={[{
        width:'100%', 
        height: props.height || '100%',
        overflow:'hidden',
        borderRadius: props.bradius || 0},
        props.style
      ]} 
        source={props.url!=null ? {uri: props.url } : require('../assets/images/default_image.png')}>
        {props.children}
    </ImageBackground>
  );
}

export default BackgroundImage;