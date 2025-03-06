import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={[styles.amount, item.amount < 0 ? styles.negative : styles.positive]}>
        R$ {item.amount.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  description: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  positive: {
    color: '#52CA76',
  },
  negative: {
    color: '#EE4266',
  },
});

export default TransactionItem;
