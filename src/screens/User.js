import React, {useState, Component} from 'react';
import { useTheme, Icon, MenuItem } from '@ui-kitten/components';
import { ScrollView, View, StyleSheet } from 'react-native';
import { updateprofileValidationSchema, changepasswordValidationSchema } from '../yupValidation/ValidationSchema';
import { Formik } from 'formik';
import InputField from '../component/InputField';
import InputFieldError from '../component/InputFieldError';
import Card from '../component/Card';
import Ntext from '../component/Ntext';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import Hairline from '../component/Hairline';
import Cbutton from '../component/Cbutton';
import ModalBox from '../component/ModalBox';
import ActionButton from '../component/ActionButton';

const User = (props) => {
  const [visible, setVisible] = useState(false);
  const [visiblesecond, setVisibleSecond] = useState(false);

  const theme = useTheme();

  const onUpdate = (value) => {
    console.log('update', value);
  }

  const onPasswordChange = (value) => {
    console.log('changepassword', value);
  }
   
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <Card disabled={true} style={{ height:120, backgroundColor: Colors.orange, margin:15, borderRadius: 10, shadowColor: 'black', shadowOpacity: 0.5, elevation: 5,}}>
        {
        <View style={{flex:1,flexDirection:'row', marginLeft:20}}>
          <View style={{ flex:1,justifyContent:'center',alignContent:'center' }}>
            <Ntext color={Colors.darktext} fontsize={35} fontfamily='CHESTER-Basic'>PROFILE</Ntext>
            <Ntext color={Colors.darktext} lineheight={22} fontsize={18} fontfamily='PTSans-Regular'>Test Dev</Ntext>
            <Ntext color={Colors.darktext} lineheight={18} fontsize={18} fontfamily='PTSans-Regular' >testuser401@gmail.com</Ntext>
          </View>

          <View style={{justifyContent:'center', marginRight:20}}>
            <ActionButton onPress={() => setVisible(true)} bwidth={55} iconColor={Colors.normaltext} bordercolor={Colors.normaltext} bcolor='transparent' icon='pencil'/>
          </View>
        </View>
        }
        </Card>

        <View style={styles.item}>
          <MenuItem
          title='My Orders'
          accessoryLeft={props => <Icon {...props} name='shopping-bag-outline'/>}
          accessoryRight={props => <Icon {...props} name='arrow-ios-forward'/>}
          />
          <MenuItem
          title='Wishlist'
          onPress={()=> props.navigation.navigate("Wishlist")}
          accessoryLeft={props => <Icon {...props} name='heart-outline'/>}
          accessoryRight={props => <Icon {...props} name='arrow-ios-forward'/>}
          />
          <MenuItem
          title='My Addresses'
          onPress={()=> props.navigation.navigate("Address")}
          accessoryLeft={props => <Icon {...props} name='pin-outline'/>}
          accessoryRight={props => <Icon {...props} name='arrow-ios-forward'/>}
          />
          <MenuItem
          title='Change Password'
          onPress={() => setVisibleSecond(true)}
          accessoryLeft={props => <Icon {...props} name='lock-outline'/>}
          accessoryRight={props => <Icon {...props} name='arrow-ios-forward'/>}
          />
          <MenuItem
          title='Logout'
          accessoryLeft={props => <Icon {...props} name='log-out-outline'/>}
          accessoryRight={props => <Icon {...props} name='arrow-ios-forward'/>}
          />
        </View>

        <ModalBox onBackdropPress={() => setVisible(false)} visible={visible}>
          {
           <ScrollView style={{height:280}}> 
            <Htext style={{color:theme['text-custome-color'], fontSize:30, fontFamily:'CHESTER-Basic', textAlign:'center', marginTop:5 }}>FORGOT PASSWORD ?</Htext>
            <Hairline bcolor={Colors.cyanblue}/>
            
            <Formik
              enableReinitialize={true}
              validationSchema={updateprofileValidationSchema}
              initialValues={{ firstname: '', lastname: '', email: ''}}
              onSubmit={values => onUpdate(values)}
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
                <View style={{ marginTop:20, marginBottom:20}}>
                <Cbutton onPress={handleSubmit} disabled={!isValid} textcolor={theme['text-basic-color']} bcolor="transparent" bwidth={180} bheight={42} bordercolor={theme['text-basic-color']}>UPDATE</Cbutton>
              </View>
              </>
              )}
           </Formik>
           </ScrollView>
          }
        </ModalBox>

        <ModalBox onBackdropPress={() => setVisibleSecond(false)} visible={visiblesecond}>
          {
           <ScrollView style={{height:280}}> 
            <Htext style={{color:theme['text-custome-color'], fontSize:30, fontFamily:'CHESTER-Basic', textAlign:'center', marginTop:5 }}>CHANGE PASSWORD</Htext>
            <Hairline bcolor={Colors.cyanblue}/>
            
            <Formik
              enableReinitialize={true}
              validationSchema={changepasswordValidationSchema}
              initialValues={{ oldpassword: '', newpassword: '', confirmpassword: ''}}
              onSubmit={values => onPasswordChange(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, isValid,}) => (
              <>
                <InputField
                label='Old Password'
                placeholder= 'Enter your old password here'
                value={values.oldpassword}
                onBlur={handleBlur('oldpassword')}
                onChangeText={handleChange('oldpassword')}
                />
                {errors.oldpassword &&
                  <InputFieldError error={errors.oldpassword}/>
                }

                <InputField
                label='New Password'
                placeholder= 'Enter your new password here'
                value={values.newpassword}
                onBlur={handleBlur('newpassword')}
                onChangeText={handleChange('newpassword')}
                />
                {errors.newpassword &&
                  <InputFieldError error={errors.newpassword}/>
                }

                <InputField
                label='Confirm Password'
                placeholder= 'Re-enter your new password here'
                value={values.confirmpassword}
                onBlur={handleBlur('confirmpassword')}
                onChangeText={handleChange('confirmpassword')}
                />
                {errors.confirmpassword &&
                  <InputFieldError error={errors.confirmpassword}/>
                }

                <View style={{ marginTop:20, marginBottom:20}}>
                <Cbutton onPress={handleSubmit} disabled={!isValid} textcolor={theme['text-basic-color']} bcolor="transparent" bwidth={180} bheight={42} bordercolor={theme['text-basic-color']}>UPDATE</Cbutton>
              </View>
              </>
              )}
           </Formik>
           </ScrollView>
          }
        </ModalBox>
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 item: {
  margin:15,
  shadowColor: 'black',
  shadowOpacity: 0.5,
  elevation: 5
 }
});

export default User;