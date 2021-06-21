import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';

 const ShowImage = (props) => {  
     
  return (
    <TouchableOpacity 
      style={[{
        height: props.height},
        props.style
        ]}>
          <ImageBackground resizeMode='stretch' style={{height: "100%"}} source={{ uri: props.url }}>
            {props.children}
          </ImageBackground> 
    </TouchableOpacity>
  );
}

export default ShowImage;