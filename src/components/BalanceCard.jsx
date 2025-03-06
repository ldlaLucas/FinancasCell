import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BalanceCard = ({ balance }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#52CA76',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  label: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default BalanceCard;
