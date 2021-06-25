import React from 'react';
import Colors from '../constant/Colors';
import Ntext from '../component/Ntext';

 const InputFieldError = (props) => {  
  return (
     <Ntext style={{
         fontSize: 13,
         color: Colors.red,
         marginLeft: 40,
         marginTop: 10 }}
         >
         {props.error}   
         </Ntext>     
  );
}

export default InputFieldError;