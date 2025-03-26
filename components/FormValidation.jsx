import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const FormValidation = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const passwordRules = [
    { rule: '6+ characters', test: (pwd) => pwd.length >= 6 },
    { rule: 'Uppercase letter', test: (pwd) => /[A-Z]/.test(pwd) },
    { rule: 'Lowercase letter', test: (pwd) => /[a-z]/.test(pwd) },
    { rule: 'Number', test: (pwd) => /[0-9]/.test(pwd) },
    { rule: 'Special character', test: (pwd) => /[!@#$%^&*]/.test(pwd) },
  ];

  const handleSubmit = () => {
    const passwordErrors = passwordRules.filter(({ test }) => !test(password));
    
    setError('');
    setSuccess(false);

    if (passwordErrors.length > 0) {
      setError('Password requirements not met');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords dont match');
      return;
    }

    setSuccess(true);
  };

  return (
    <View style={{padding: 20}}>
      <Text style={{fontWeight: 'bold', marginBottom: 10}}>Create Password</Text>

      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <TextInput
          style={{flex: 1, borderWidth: 1, padding: 8}}
          secureTextEntry={!showPassword}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{padding: 8}}>
          <Text>{showPassword ? '👁️' : '🙈'}</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={{borderWidth: 1, padding: 8, marginBottom: 10}}
        secureTextEntry={!showPassword}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {passwordRules.map(({ rule, test }, index) => (
        <Text key={index} style={{color: test(password) ? 'green' : 'red'}}>
          {test(password) ? '✓' : '✗'} {rule}
        </Text>
      ))}

      <TouchableOpacity 
        onPress={handleSubmit} 
        style={{backgroundColor: '#007bff', padding: 10, marginTop: 10}}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
      </TouchableOpacity>

      {error ? <Text style={{color: 'red', marginTop: 10}}>{error}</Text> : null}
      {success ? <Text style={{color: 'green', marginTop: 10}}>Success!</Text> : null}
    </View>
  );
};

export default FormValidation;