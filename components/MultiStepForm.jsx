import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zipCode: "",
    username: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = () => alert("Form submitted successfully!");

  const renderStep = () => {
    const steps = [
      {
        title: "Personal Information",
        fields: [
          { placeholder: "First Name", key: "firstName", value: formData.firstName },
          { placeholder: "Last Name", key: "lastName", value: formData.lastName },
          { placeholder: "Email", key: "email", value: formData.email, keyboardType: "email-address" }
        ]
      },
      {
        title: "Address Information",
        fields: [
          { placeholder: "Street Address", key: "street", value: formData.street },
          { placeholder: "City", key: "city", value: formData.city },
          { placeholder: "Zip Code", key: "zipCode", value: formData.zipCode, keyboardType: "numeric" }
        ]
      },
      {
        title: "Account Information",
        fields: [
          { placeholder: "Username", key: "username", value: formData.username },
          { placeholder: "Password", key: "password", value: formData.password, secureTextEntry: true }
        ]
      }
    ];

    return (
      <View style={styles.formStep}>
        <Text style={styles.stepTitle}>{steps[step-1].title}</Text>
        {steps[step-1].fields.map((field) => (
          <TextInput
            key={field.key}
            style={styles.input}
            placeholder={field.placeholder}
            value={field.value}
            onChangeText={(text) => handleChange(field.key, text)}
            keyboardType={field.keyboardType}
            secureTextEntry={field.secureTextEntry}
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.progressBar}>
        {[1, 2, 3].map((stepNumber) => (
          <View key={stepNumber} style={[
            styles.progressStep,
            stepNumber === step && styles.activeStep,
            stepNumber < step && styles.completedStep,
          ]}>
            <Text style={styles.progressText}>{stepNumber}</Text>
          </View>
        ))}
      </View>

      {renderStep()}

      <View style={styles.buttonContainer}>
        {step > 1 && (
          <TouchableOpacity style={styles.button} onPress={prevStep}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity 
          style={step < 3 ? styles.button : styles.submitButton} 
          onPress={step < 3 ? nextStep : submitForm}
        >
          <Text style={styles.buttonText}>{step < 3 ? "Next" : "Submit"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles remain the same as in your original code
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  formStep: {
    marginBottom: 30,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#2ecc71",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  progressBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  progressStep: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
  },
  activeStep: {
    backgroundColor: "#3498db",
  },
  completedStep: {
    backgroundColor: "#2ecc71",
  },
  progressText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MultiStepForm;