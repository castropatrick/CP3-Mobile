import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const cursosDisponiveis = [
  {
    id: "1",
    titulo: "Técnico em Informática",
    instituicao: "ETEC",
    duracao: "18 meses",
    modalidade: "Presencial",
    descricao: "Curso técnico completo em desenvolvimento de sistemas e redes de computadores.",
  },
  {
    id: "2",
    titulo: "Assistente Administrativo",
    instituicao: "SENAC",
    duracao: "6 meses",
    modalidade: "Online",
    descricao: "Aprenda rotinas administrativas, atendimento ao cliente e gestão de documentos.",
  },
  {
    id: "3",
    titulo: "Mecânica Industrial",
    instituicao: "SENAI",
    duracao: "12 meses",
    modalidade: "Presencial",
    descricao: "Formação em manutenção de máquinas, equipamentos industriais e processos produtivos.",
  },
  {
    id: "4",
    titulo: "Design Gráfico",
    instituicao: "SENAC",
    duracao: "9 meses",
    modalidade: "Híbrido",
    descricao: "Desenvolvimento de identidade visual, edição de imagens e projetos gráficos.",
  },
  {
    id: "5",
    titulo: "Eletrotécnica",
    instituicao: "SENAI",
    duracao: "18 meses",
    modalidade: "Presencial",
    descricao: "Instalações elétricas, automação industrial e sistemas de energia.",
  },
  {
    id: "6",
    titulo: "Gestão de Recursos Humanos",
    instituicao: "ETEC",
    duracao: "12 meses",
    modalidade: "Online",
    descricao: "Recrutamento, seleção, treinamento e desenvolvimento de pessoas.",
  },
];

export default function Cursos() {
  const { nome, email } = useLocalSearchParams();

  function abrirDetalhes(curso) {
    router.push({
      pathname: `/detalhes/${curso.id}`,
      params: { 
        nome, 
        email,
        ...curso 
      }
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Cursos Disponíveis</Text>
        <Text style={styles.subtitle}>
          Escolha um curso e clique para ver mais detalhes
        </Text>

        <View style={styles.cursosContainer}>
          {cursosDisponiveis.map((curso) => (
            <TouchableOpacity
              key={curso.id}
              style={styles.card}
              onPress={() => abrirDetalhes(curso)}
            >
              <View style={styles.cardHeader}>
                <Ionicons name="school-outline" size={24} color="#2563eb" />
                <Text style={styles.instituicao}>{curso.instituicao}</Text>
              </View>

              <Text style={styles.cardTitulo}>{curso.titulo}</Text>
              <Text style={styles.cardDescricao} numberOfLines={2}>
                {curso.descricao}
              </Text>

              <View style={styles.cardFooter}>
                <View style={styles.badge}>
                  <Ionicons name="time-outline" size={14} color="#64748b" />
                  <Text style={styles.badgeText}>{curso.duracao}</Text>
                </View>
                <View style={styles.badge}>
                  <Ionicons name="location-outline" size={14} color="#64748b" />
                  <Text style={styles.badgeText}>{curso.modalidade}</Text>
                </View>
              </View>

              <View style={styles.verMais}>
                <Text style={styles.verMaisText}>Ver detalhes</Text>
                <Ionicons name="arrow-forward" size={16} color="#2563eb" />
              </View>
            </TouchableOpacity>
          ))}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#64748b",
    marginBottom: 24,
  },
  cursosContainer: {
    gap: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  instituicao: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2563eb",
    textTransform: "uppercase",
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  cardDescricao: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: "500",
  },
  verMais: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
  },
  verMaisText: {
    fontSize: 14,
    color: "#2563eb",
    fontWeight: "600",
  },
});