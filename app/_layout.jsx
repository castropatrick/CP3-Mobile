import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#808080",
        tabBarStyle: { backgroundColor: "#ffffff", borderTopWidth: 0.3 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="home-outline" color={focused ? "#2563eb" : "#888"} size={size} />
          ),
        }}

      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: "Sobre",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="information" color={focused ? "#2563eb" : "#888"} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="cursos"
        options={{
          title: "Cursos",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="book-outline" color={focused ? "#2563eb" : "#888"} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="detalhes/[id]"
        options={{
          href: null,
        }}
      />

    </Tabs>
  );
}