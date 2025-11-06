import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Detalhes() {
  const params = useLocalSearchParams();
  const { nome, email, titulo, instituicao, duracao, modalidade, descricao } = params;

  const informacoesCompletas = {
    "1": {
      conteudo: ["Lógica de Programação", "Banco de Dados", "Desenvolvimento Web", "Redes de Computadores"],
      requisitos: "Ensino Médio completo ou cursando",
      cargaHoraria: "1200 horas",
      periodo: "Segunda a Sexta (14h às 18h)",
    },
    "2": {
      conteudo: ["Rotinas Administrativas", "Atendimento ao Cliente", "Gestão de Documentos", "Excel Avançado"],
      requisitos: "Ensino Médio completo",
      cargaHoraria: "400 horas",
      periodo: "Flexível - EAD",
    },
    "3": {
      conteudo: ["Manutenção Mecânica", "Equipamentos Industriais", "Processos Produtivos", "Segurança do Trabalho"],
      requisitos: "Ensino Médio completo",
      cargaHoraria: "800 horas",
      periodo: "Segunda a Sexta (8h às 12h)",
    },
    "4": {
      conteudo: ["Adobe Photoshop", "Illustrator", "Identidade Visual", "Design Editorial"],
      requisitos: "Ensino Médio cursando",
      cargaHoraria: "600 horas",
      periodo: "Terça e Quinta (19h às 22h) + EAD",
    },
    "5": {
      conteudo: ["Instalações Elétricas", "Automação Industrial", "Sistemas de Energia", "Comandos Elétricos"],
      requisitos: "Ensino Médio completo",
      cargaHoraria: "1200 horas",
      periodo: "Segunda a Sexta (8h às 12h)",
    },
    "6": {
      conteudo: ["Recrutamento e Seleção", "Treinamento e Desenvolvimento", "Gestão de Pessoas", "Legislação Trabalhista"],
      requisitos: "Ensino Médio completo",
      cargaHoraria: "800 horas",
      periodo: "Flexível - EAD",
    },
  };

  const detalhes = informacoesCompletas[params.id] || informacoesCompletas["1"];

  function inscrever() {
    const mensagem = `Olá! Gostaria de me inscrever no curso de ${titulo} - ${instituicao}. Meu nome é ${nome} e meu e-mail é ${email}.`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.voltarBotao} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#2563eb" />
          <Text style={styles.voltarTexto}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="school" size={40} color="#2563eb" />
          </View>
          <Text style={styles.instituicao}>{instituicao}</Text>
          <Text style={styles.titulo}>{titulo}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>📋 Informações Gerais</Text>
          
          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={20} color="#64748b" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Duração</Text>
              <Text style={styles.infoValue}>{duracao}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color="#64748b" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Modalidade</Text>
              <Text style={styles.infoValue}>{modalidade}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={20} color="#64748b" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Período</Text>
              <Text style={styles.infoValue}>{detalhes.periodo}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="hourglass-outline" size={20} color="#64748b" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Carga Horária</Text>
              <Text style={styles.infoValue}>{detalhes.cargaHoraria}</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>📖 Descrição</Text>
          <Text style={styles.descricao}>{descricao}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>📚 Conteúdo Programático</Text>
          {detalhes.conteudo.map((item, index) => (
            <View key={index} style={styles.conteudoItem}>
              <Ionicons name="checkmark-circle" size={20} color="#2563eb" />
              <Text style={styles.conteudoTexto}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>✅ Requisitos</Text>
          <Text style={styles.requisitos}>{detalhes.requisitos}</Text>
        </View>

        <TouchableOpacity style={styles.botaoInscrever} onPress={inscrever}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#fff" />
          <Text style={styles.botaoText}>Inscrever-se</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Inscrito como: <Text style={styles.footerBold}>{nome}</Text>
          </Text>
          <Text style={styles.footerText}>E-mail: {email}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  voltarBotao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  voltarTexto: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "600",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  iconContainer: {
    backgroundColor: "#dbeafe",
    padding: 20,
    borderRadius: 50,
    marginBottom: 16,
  },
  instituicao: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563eb",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 15,
    color: "#1e293b",
    fontWeight: "600",
  },
  descricao: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 22,
  },
  conteudoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  conteudoTexto: {
    fontSize: 15,
    color: "#1e293b",
    flex: 1,
  },
  requisitos: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 22,
  },
  botaoInscrever: {
    backgroundColor: "#2563eb",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  botaoText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 4,
  },
  footerBold: {
    fontWeight: "600",
    color: "#1e293b",
  },
});