import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import Ntext from '../component/Ntext';
import { loginValidationSchema, forgetValidationSchema } from '../yupValidation/ValidationSchema';
import { Formik } from 'formik';
import InputField from '../component/InputField';
import InputFieldError from '../component/InputFieldError';
import Hairline from '../component/Hairline';
import ActionButton from '../component/ActionButton';
import Cbutton from '../component/Cbutton';

const Signin = (props) => {
  const theme = useTheme();
   
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <View style={{marginTop:'50%'}}>
         <Htext color={theme['text-basic-color']} fontsize={35} fontfamily='PTSans-Regular'>Sign In</Htext> 
        </View>

        <Formik
            enableReinitialize={true}
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => onSave(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid,}) => (
            <>
            <InputField
            label='Email'
            placeholder= 'Enter your email here'
            value={values.email}
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            />
            {errors.email &&
               <InputFieldError error={errors.email}/>
            }

            <InputField
            label='Password'
            placeholder= 'Enter your password here'
            value={values.password}
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
            />
            {errors.password &&
               <InputFieldError error={errors.password}/>
            }

            <View style={{ marginTop:20, marginBottom:20}}>
              <Cbutton onPress={handleSubmit} disabled={!isValid} textcolor={theme['text-basic-color']} bcolor="transparent" bwidth={180} bheight={42} bordercolor={theme['text-basic-color']}>LOGIN</Cbutton>
            </View>
            </>
            )}
        </Formik>

        <TouchableOpacity>
          <Htext color={theme['text-basic-color']} fontsize={15} fontfamily='PTSans-Regular'>Forgot Password ?</Htext>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> props.navigation.navigate("Signup")} style={{marginTop:15}}>
          <Htext color={theme['text-basic-color']} fontsize={15} fontfamily='PTSans-Regular'>Don't have an Account ? Sign up</Htext>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center',margin:20}}>
          <Hairline/>
          <View style={{marginLeft:10, marginRight:10}}>
            <Htext color={theme['text-basic-color']} fontfamily='PTSans-Regular' fontsize={25}>OR</Htext>
          </View>
          <Hairline/>
        </View>

        <View style={styles.sharing}>
          <View style={styles.shar}><ActionButton icon='facebook'/></View>
          <View style={styles.shar}><ActionButton icon='google'/></View>
        </View>

      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 sharing: {
  justifyContent:'center',
  alignItems:'center',
  flexDirection:"row",
  marginBottom:15
 },
 shar: {
  marginLeft:10,
 }
});

export default Signin;