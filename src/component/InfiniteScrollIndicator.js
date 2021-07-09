import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner, useTheme } from '@ui-kitten/components';

const InfiniteScrollIndicator = () => {
  const theme = useTheme();
  
  return(
    <View style={styles.container}>
      <Spinner style={styles.container} size='mediam' status='primary' style={{borderColor: theme['text-basic-color']}}/> 
    </View>       
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative' 
  }
});

export default InfiniteScrollIndicator;