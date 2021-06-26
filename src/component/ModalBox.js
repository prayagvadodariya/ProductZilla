import React from 'react';
import { StyleSheet } from 'react-native';
import {  Layout, Modal } from '@ui-kitten/components';

 const ModalBox  = (props) => {

  return (
    <Modal
      backdropStyle={styles.backdrop}
      visible={props.visible}
      onBackdropPress={props.onBackdropPress}>
      <Layout style={[{
        margin: props.margin || 15,
        padding: props.padding || 10,
        borderRadius: props.padding || 5 },
        props.style
      ]}
      {...props}
      >
      {props.children}
      </Layout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ModalBox;
