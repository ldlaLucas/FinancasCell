import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 FinançasCell</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#474747',
    padding: 15,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default Footer;
