import { Text, StyleSheet, View, Image, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logoText}>📚 Educa+</Text>

      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        O Educa+ é um portal educacional que oferece acesso gratuito a cursos e dicas de estudo
        disponibilizados por órgãos públicos como SENAI, ETEC, SENAC e outros.

        Nossa missão é democratizar o acesso à educação de qualidade, conectando estudantes a
        oportunidades de capacitação profissional e desenvolvimento pessoal oferecidas por
        instituições públicas de ensino.
      </Text>

      <Text style={styles.subtitle}>Equipe de Desenvolvimento</Text>

      <View style={styles.row}>

        <View style={styles.member}>
          <Image source={require("../assets/1732279396276.jpg")} style={styles.avatar} />
          <Text style={styles.name}>Patrick Castro</Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/castropatrick")}>
              <Ionicons name="logo-github" size={20} color="#1f2937" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/patrick-castro-839aa2273/")}>
              <Ionicons name="logo-linkedin" size={20} color="#0e76a8" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.member}>
          <Image source={require("../assets/1760106364040.png")} style={styles.avatar} />
          <Text style={styles.name}>Gabriel Rossi</Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/GabrielRossi01")}>
              <Ionicons name="logo-github" size={20} color="#1f2937" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/gabriel-oliveira-rossi-155baa324/")}>
              <Ionicons name="logo-linkedin" size={20} color="#0e76a8" />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.member}>
          <Image source={require("../assets/1730664856258.jpg")} style={styles.avatar} />
          <Text style={styles.name}>Rodrigo Yamasaki</Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/RodrygoYamasaki")}>
              <Ionicons name="logo-github" size={20} color="#1f2937" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/rodrigo-yamasaki-74a3b1324/")}>
              <Ionicons name="logo-linkedin" size={20} color="#0e76a8" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.footer}>FIAP • Mobile Application Development • 2025</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    padding: 20,
  },
  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 35,
  },
  title: {
    fontSize: 22,
    color: "#1e293b",
    fontWeight: "bold",
    marginBottom: 15,
  },
  text: {
    color: "#475569",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 21,
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  member: {
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  name: {
    color: "#1e293b",
    fontWeight: "600",
    fontSize: 13,
    marginBottom: 6,
  },
  icons: {
    flexDirection: "row",
    gap: 8,
  },
  footer: {
    color: "#64748b",
    marginTop: 10,
    fontSize: 13,
  },
});