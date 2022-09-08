import { Text, View } from "react-native";
import { styles } from "./CardStyle";

// High Ordre Component (Composant qui en ont d'autres à l'intérieur, et qui gèrent de la logique)
export default function Card({ title, content, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  )
}