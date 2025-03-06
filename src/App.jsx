import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import Footer from './components/Footer';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const totalBalance = transactions.reduce((acc, item) => acc + item.amount, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BalanceCard balance={totalBalance} />
      <AddTransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;
