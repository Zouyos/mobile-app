import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import Button from "../../UI/Button/Button";
import InputWithError from "../../UI/Inputs/InputWithError";
import { styles } from "./ProfileStyle";

export default function EditProfile(props) {

  const { user, setUser } = useContext(UserContext)

  const [emailInput, setEmailInput] = useState('')
  const [emailError, setEmailError] = useState('')

  const [usernameInput, setUsernameInput] = useState('')
  const [usernameError, setUsernameError] = useState('')

  const [descriptionInput, setDescriptionInput] = useState('')
  const [descriptionError, setDescriptionError] = useState('')

  function handleEmail(text) {
    setEmailInput(text)
    setEmailError('')
  }

  function handleUsername(text) {
    setUsernameInput(text)
    setUsernameError('')
  }

  function handleDescrption(text) {
    setDescriptionInput(text)
    setDescriptionError('')
  }

  function editProfile() {
    if (emailInput.includes('@')
      && usernameInput.length >= 3
      && usernameInput.length <= 12
      && descriptionInput.length < 150) {
      setUser({
        ...user,
        email: emailInput,
        username: usernameInput,
        description: descriptionInput
      });
      props.navigation.pop()
    } else {
      setEmailError(!emailInput.includes('@') && "Format d'email non valide")
      setUsernameError((usernameInput.length < 3 || usernameInput.length > 12)
        && "Le pseudo doit comporter entre 3 et 12 caractères")
      setDescriptionError(descriptionInput.length > 150
        && 'La description ne peut excéder 150 caractères')
    }
  }
  return (
    <View>
      <Text style={[styles.title, {textAlign: 'center', marginVertical: 10}]}>Modifier votre profil</Text>
      <View style={styles.container}>
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
          holder='Description'
          valeur={descriptionInput}
          action={handleDescrption}
          type='default'
          errorMessage={descriptionError}
        />
        <Button value='Enregistrer' action={editProfile} />
      </View>
    </View>
  )
}