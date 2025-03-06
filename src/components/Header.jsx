import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>FinançasCell</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#C92071',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Header;
