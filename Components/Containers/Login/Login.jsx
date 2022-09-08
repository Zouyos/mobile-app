import { useState } from "react";
import { View } from "react-native";
import Button from "../../UI/Button/Button";
import InputWithError from "../../UI/Inputs/InputWithError";
import { AntDesign } from '@expo/vector-icons';
import { globalStyle } from "../../../styles/GlobalStyle";

export default function Login() {

  // Étape 1: les variables d'état pour les inputs et les erreurs
  const [emailInput, setEmailInput] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // Étape 2: Créer les handle, 
  // les fonctions qui modifient les variables avec les entrées de l'utilisateur 
  function handleEmail(text) {
    setEmailInput(text)
    setEmailError('')
    setPasswordError('')
  }

  function handlePassword(value) {
    setPasswordInput(value)
    setPasswordError('')
    setEmailError('')
  }

  // Étape 3: Créer la fonction qui valide le formulaire
  function login() {
    if (emailInput.includes('@') && passwordInput.length >= 6) {
      // Envoi des données à la backend
      // Recu JWT token
      // Decode JWT: {uid:xxxx, email:xxxx@xxx.com, username:xxxx, avatar:xxxx.png}
      alert('Connexion réussie : ' + emailInput)
    } else {
      setEmailError(!emailInput.includes('@') ? "Format d'email non valide" : '')
      setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court" : '')
      setPasswordInput('')
    }
  }

  return (
    // Étape 4: Ajouter les composant et les lier avec les variables et les fonctions
    // Two Way Binding: Liaison dand les deux sens (ex: value={emailInput})
    <View>
      <InputWithError
        holder='Email'
        valeur={emailInput}
        action={handleEmail}
        type='email-adress'
        errorMessage={emailError}
      />
      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        isPassword
        type='default'
        errorMessage={passwordError}
      />
      <Button value='Se connecter' action={login}>
        <AntDesign name="login" size={24} color={globalStyle.color.lightColor} />
      </Button>
    </View>
  )
}