import React, {useState, useEffect} from 'react';
import { useTheme } from '@ui-kitten/components';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import UserIcon from '../component/UserIcon';
import CartItem from '../component/CartIcon';
import InputField from '../component/InputField';
import Cbutton from '../component/Cbutton';
import {addressValidationSchema} from '../yupValidation/ValidationSchema';
import { Formik } from 'formik';

const AddEditAddress = (props) => {
  const theme = useTheme();

  console.log('ckeckprops', props.route.params);

  useEffect(() => {
    if (props.route.params.active===true) {
        props.navigation.setOptions({
          headerTitle: 'Add New Address',
        });   
    }else{
        props.navigation.setOptions({
          headerTitle: 'Edit Address',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}> 
              <UserIcon onPress={()=> props.navigation.navigate('User')}/>
              <CartItem onPress={()=> props.navigation.navigate('Cart')}/>
            </View>  
          ),
        }); 
    }
  }, [props.navigation, props.route]);

  const onSave = (value) => {
    console.log('value',value);
  }
   
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <Formik
            enableReinitialize={true}
            validationSchema={addressValidationSchema}
            initialValues={{ firstname: '', lastname: '', company: '', address1: '', address2: '', city: '', pincode: ''}}
            onSubmit={values => onSave(values)}
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
               <Text style={{ fontSize: 13, color: 'red', marginLeft: 40, marginTop: 10 }}>{errors.firstname}</Text>
            }

            <InputField
            label='Last Name'
            placeholder= 'Last Name'
            value={values.lastname}
            onBlur={handleBlur('lastname')}
            onChangeText={handleChange('lastname')}
            />
            {errors.lastname &&
               <Text style={{ fontSize: 13, color: 'red', marginLeft: 40, marginTop: 10 }}>{errors.lastname}</Text>
            }

            <InputField
            label='Company'
            placeholder='Company'
            value={values.company}
            onBlur={handleBlur('company')}
            onChangeText={handleChange('company')}
            />

            <InputField
            label='Address 1'
            placeholder='Address 1'
            value={values.address1}
            onBlur={handleBlur('address1')}
            onChangeText={handleChange('address1')}
            />

            <InputField
            label='Address 2'
            placeholder='Address 2'
            value={values.address2}
            onBlur={handleBlur('address2')}
            onChangeText={handleChange('address2')}
            />

            <InputField
            label='City'
            placeholder='City'
            value={values.city}
            onBlur={handleBlur('city')}
            onChangeText={handleChange('city')}
            />

            <InputField
            label='Zip'
            placeholder='Zip'
            value={values.pincode}
            onBlur={handleBlur('pincode')}
            onChangeText={handleChange('pincode')}
            />

            <View style={{ marginTop:20, marginBottom:20}}>
              <Cbutton onPress={handleSubmit} textcolor={theme['text-basic-color']} bcolor="transparent" bwidth={180} bheight={42} bordercolor={theme['text-basic-color']}>SAVE</Cbutton>
            </View>
            </>
            )}
        </Formik> 
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 
});

export default AddEditAddress;