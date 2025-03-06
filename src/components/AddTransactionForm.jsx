import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTransactionForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    if (!description || !amount) return;
    onAdd({ id: Date.now(), description, amount: parseFloat(amount) });
    setDescription('');
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor (R$)"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Adicionar" onPress={handleSubmit} color="#C92071" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default AddTransactionForm;
