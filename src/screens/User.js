import React, {useState, Component} from 'react';
import { useTheme, Icon, MenuItem } from '@ui-kitten/components';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Card from '../component/Card';
import Ntext from '../component/Ntext';
import Colors from '../constant/Colors';
import ActionButton from '../component/ActionButton';

const User = (props) => {

  const theme = useTheme();
   
    return (
      <View style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
        <Card disabled={true} style={{ height:120, backgroundColor: Colors.orange, margin:15, borderRadius: 10, shadowColor: 'black', shadowOpacity: 0.5, elevation: 5,}}>
        {
        <View style={{flex:1,flexDirection:'row', marginLeft:20}}>
          <View style={{ flex:1,justifyContent:'center',alignContent:'center' }}>
            <Ntext color={Colors.darktext} fontsize={35} fontfamily='CHESTER-Basic'>PROFILE</Ntext>
            <Ntext color={Colors.darktext} lineheight={22} fontsize={18} fontfamily='PTSans-Regular'>Test Dev</Ntext>
            <Ntext color={Colors.darktext} lineheight={18} fontsize={18} >testuser401@gmail.com</Ntext>
          </View>

          <TouchableOpacity style={{justifyContent:'center', marginRight:20}}>
            <ActionButton bwidth={55} iconColor={Colors.normaltext} bordercolor={Colors.normaltext} bcolor='transparent' icon='pencil'/>
          </TouchableOpacity>
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
          accessoryLeft={props => <Icon {...props} name='pin-outline'/>}
          accessoryRight={props => <Icon {...props} name='arrow-ios-forward'/>}
          />
          <MenuItem
          title='Change Password'
          accessoryLeft={props => <Icon {...props} name='lock-outline'/>}
          accessoryRight={props => <Icon {...props} name='arrow-ios-forward'/>}
          />
          <MenuItem
          title='Logout'
          accessoryLeft={props => <Icon {...props} name='log-out-outline'/>}
          accessoryRight={props => <Icon {...props} name='arrow-ios-forward'/>}
          />
        </View>
      </View>
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