import React from 'react';
import { FlatList } from 'react-native';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions }) => {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TransactionItem item={item} />}
    />
  );
};

export default TransactionList;
