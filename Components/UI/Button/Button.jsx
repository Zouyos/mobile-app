import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { globalStyle } from "../../../styles/GlobalStyle";

export default function Button({action, value, children}) {
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      {children}
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: globalStyle.color.primaryColor,
    padding: 10,
    minWidth: 150,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  value: {
    color: globalStyle.color.lightColor,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: globalStyle.fontSize.s,
    marginHorizontal: 10
  }
})