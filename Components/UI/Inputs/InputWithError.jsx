import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../../../styles/GlobalStyle";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";

export default function InputWithError(
  {
    holder,
    valeur,
    action,
    isPassword,
    type,
    errorMessage,
  }) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  function togglePassword() {
    setIsPasswordHidden(!isPasswordHidden)
  }
  return (
    <>
      <View
        style={
          [styles.inputContainer, {
            borderBottomColor:
              errorMessage == '' ? globalStyle.color.primaryColor : 'red'
          }]
        }
      >
        <TextInput
          style={[styles.input, { outline: 'none' }]}
          placeholder={holder}
          value={valeur}
          onChangeText={action}
          secureTextEntry={isPassword && isPasswordHidden}
          keyboardType={type}
        />
        <TouchableOpacity onPress={togglePassword}>
          {isPassword && (
            <Feather
              name={isPasswordHidden ? "eye" : "eye-off"}
              size={24}
              color="royalblue"
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.error}>{errorMessage}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    borderBottomWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    border: 'none',
    width: '90%',
  },
  error: {
    color: 'red',
    fontSize: 'smaller'
  },
  icon: {
    width: '10%'
  },
  placeholder: {
    fontStyle: 'italic',
    color: 'lightgrey'
  }
})

// Ordre de programmation : structure - logique - style