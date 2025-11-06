import { Text, TextInput, StyleSheet, View, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleContinuar() {
    if (!nome.trim()) {
      Alert.alert("Atenção", "Por favor, digite seu nome.");
      return;
    }

    if (!email.trim()) {
      Alert.alert("Atenção", "Por favor, digite seu e-mail.");
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert("Atenção", "Por favor, digite um e-mail válido.");
      return;
    }

    router.push({
      pathname: "/cursos",
      params: { nome, email },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>📚 Educa+</Text>
      </View>

      <Text style={styles.subtitle}>
        Portal com cursos gratuitos e dicas de estudo oferecidos por órgãos públicos
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />


      <TouchableOpacity 
        style={styles.botao} 
        onPress={handleContinuar}
      >
        <Text style={styles.botaoText}>Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#f8fafc",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#2563eb",
  },
  subtitle: {
    fontSize: 17,
    color: "#475569",
    marginBottom: 25,
    lineHeight: 23,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
 
  botao: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});