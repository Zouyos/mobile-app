import { StyleSheet } from "react-native";
import { globalStyle } from "../../../styles/GlobalStyle";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.color.primaryColor,
    borderRadius: 5,
    maxWidth: 500,
    alignSelf: "center",
    width: "100%",
  },
  title: {
    color: globalStyle.color.lightColor,
    textAlign: "center",
    fontSize: globalStyle.fontSize.lg,
    fontWeight: "bold",
    padding: 10,
  },
  content: {
    color: globalStyle.color.lightColor,
    textAlign: "center",
    fontSize: globalStyle.fontSize.md,
    padding: 10,
  },
  childrenContainer: {
    backgroundColor: globalStyle.color.lightColor,
    padding: 10,
  },
});
