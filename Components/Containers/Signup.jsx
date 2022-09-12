import { View } from "react-native";
import { useContext, useState } from "react";
import InputWithError from "../UI/Inputs/InputWithError";
import Button from "../UI/Button/Button";
import { EvilIcons } from '@expo/vector-icons';
import { globalStyle } from "../../styles/GlobalStyle";
import { UserContext } from "../../contexts/UserContext";
import { signupUser } from "../../libs/request/auth";

export default function Signup() {

  const userContext = useContext(UserContext);

  const [emailInput, setEmailInput] = useState('')
  const [emailError, setEmailError] = useState('')

  const [usernameInput, setUsernameInput] = useState('')
  const [usernameError, setUsernameError] = useState('')

  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [pwdConfirmInput, setPwdConfirmInput] = useState('')
  const [pwdConfirmError, setPwdConfirmError] = useState('')


  function handleEmail(text) {
    setEmailInput(text)
    setEmailError('')
    setUsernameError('')
    setPasswordError('')
    setPwdConfirmError('')
  }
  function handleUsername(text) {
    setUsernameInput(text)
    setEmailError('')
    setUsernameError('')
    setPasswordError('')
    setPwdConfirmError('')
  }
  function handlePassword(value) {
    setPasswordInput(value)
    setEmailError('')
    setUsernameError('')
    setPasswordError('')
    setPwdConfirmError('')
  }
  function handlePwdConfirm(value) {
    setPwdConfirmInput(value)
    setEmailError('')
    setUsernameError('')
    setPasswordError('')
    setPwdConfirmError('')
  }

  async function signup() {
    if (emailInput.includes('@')
      && usernameInput.length >= 3
      && usernameInput.length <= 12
      && passwordInput >= 6
      && passwordInput === pwdConfirmInput) {
      // Envoi des données à la backend
      // Recu JWT token
      // Decode JWT: {uid:xxxx, email:xxxx@xxx.com, username:xxxx, avatar:xxxx.png}

      await signupUser(emailInput, usernameInput, passwordInput)

      // userContext.setUser(signedUpUser)
    } else {
      setEmailError(!emailInput.includes('@') && 'Email incorrect')
      setUsernameError((usernameInput.length < 3 || usernameInput.length > 12) && 'Votre pseudo doit contenir entre 3 et 12 ctrs')
      // On aurait pu faire un double ternaire, juste ne pas trop imbriquer des ternaires (déconseillé)
      setPasswordError(passwordInput.length < 6 && "Mot de passe trop court")
      setPwdConfirmError(passwordInput !== pwdConfirmInput && "Les mots de passe doivent être identiques")
    }
  }

  return (
    <View>
      <InputWithError
        holder='Email'
        valeur={emailInput}
        action={handleEmail}
        type='email-adress'
        errorMessage={emailError}
      />
      <InputWithError
        holder='Pseudo'
        valeur={usernameInput}
        action={handleUsername}
        type='default'
        errorMessage={usernameError}
      />
      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        type='default'
        errorMessage={passwordError}
        isPassword
      />
      <InputWithError
        holder='Confirmer mot de passe'
        valeur={pwdConfirmInput}
        action={handlePwdConfirm}
        type='default'
        errorMessage={pwdConfirmError}
        isPassword
      />
      <Button value="S'inscrire" action={signup}>
        <EvilIcons name="check" size={24} color={globalStyle.color.lightColor} />
      </Button>
    </View>
  )
}