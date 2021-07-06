import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Spinner, useTheme } from '@ui-kitten/components';

const Loader = () => {
  const theme = useTheme();
  
  return(
    <Layout style={styles.container} level='1'>
      <Spinner  size='giant' status='primary' style={{borderColor: theme['text-basic-color']}}/>        
    </Layout>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Loader;