import { StyleSheet } from "react-native";
import { globalStyle } from "../../../styles/GlobalStyle";

export const styles = StyleSheet.create({
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    maxWidth: 300,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(10, 10, 10, 0.1)',
    padding: 10,
    marginVertical: 20,
    borderRadius: 10
  },
  container: {
    backgroundColor: 'lightgrey',
    maxWidth: 500,
    alignSelf: "center",
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopColor: globalStyle.color.primaryColor,
    borderBottomColor: globalStyle.color.primaryColor,
    borderBottomWidth: 2,
    borderTopWidth: 2
  },
  title: {
    fontWeight: '600',
    fontSize: globalStyle.fontSize.md,
    color: globalStyle.color.primaryColor
  },
  view: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10,
  },
})