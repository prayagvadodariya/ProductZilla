import React, {useState, Component} from 'react';
import { useTheme, } from '@ui-kitten/components';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import { signupValidationSchema } from '../yupValidation/ValidationSchema';
import { Formik } from 'formik';
import InputField from '../component/InputField';
import InputFieldError from '../component/InputFieldError';
import ActionButton from '../component/ActionButton';
import Cbutton from '../component/Cbutton';


const Signup = (props) => {
  const theme = useTheme();

  const onRegister = (value) => {
    console.log('register', value);
  }
   
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <View style={{marginTop:'50%'}}>
         <Htext color={theme['text-basic-color']} fontsize={35} fontfamily='PTSans-Regular'>Sign Up</Htext> 
        </View>

        <Formik
            enableReinitialize={true}
            validationSchema={signupValidationSchema}
            initialValues={{ firstname: '', lastname: '', email: '', phone: '', password: '', confirmpassword: '' }}
            onSubmit={values => onRegister(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid,}) => (
            <>
            <InputField
            label='First Name'
            placeholder= 'First Name'
            value={values.firstname}
            onBlur={handleBlur('firstname')}
            onChangeText={handleChange('firstname')}
            />
            {errors.firstname &&
               <InputFieldError error={errors.firstname}/>
            }

            <InputField
            label='Last Name'
            placeholder= 'Last Name'
            value={values.lastname}
            onBlur={handleBlur('lastname')}
            onChangeText={handleChange('lastname')}
            />
            {errors.lastname &&
               <InputFieldError error={errors.lastname}/>
            }

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
            label='Phone'
            placeholder= 'Enter your phone number here'
            value={values.phone}
            onBlur={handleBlur('phone')}
            onChangeText={handleChange('phone')}
            />
            {errors.phone &&
               <InputFieldError error={errors.phone}/>
            }

            <InputField
            label='Password'
            placeholder= 'Enter your password here'
            value={values.password}
            onBlur={handleBlur('password')}
            secureTextEntry={true}
            onChangeText={handleChange('password')}
            />
            {errors.password &&
               <InputFieldError error={errors.password}/>
            }

            <InputField
            label='Confirm Password'
            placeholder= 'Re-enter your new password here'
            value={values.confirmpassword}
            onBlur={handleBlur('confirmpassword')}
            secureTextEntry={true}
            onChangeText={handleChange('confirmpassword')}
            />
            {errors.confirmpassword &&
              <InputFieldError error={errors.confirmpassword}/>
            }   

            <View style={{ marginTop:20, marginBottom:20}}>
              <Cbutton onPress={handleSubmit} disabled={!isValid} textcolor={theme['text-basic-color']} bcolor="transparent" bwidth={180} bheight={42} bordercolor={theme['text-basic-color']}>REGISTER</Cbutton>
            </View>
            </>
            )}
        </Formik>
          
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 
});

export default Signup;