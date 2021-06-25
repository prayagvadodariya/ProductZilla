import React, {useState, Component} from 'react';
import { useTheme } from '@ui-kitten/components';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Colors from '../constant/Colors';
import Htext from '../component/Htext';
import Ntext from '../component/Ntext';
import Cbutton from '../component/Cbutton';

const Signup = (props) => {
  const theme = useTheme();
   
    return (
      <ScrollView style={{flex:1,backgroundColor: theme['background-basic-color-2']}}>
          
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
 
});

export default Signup;