import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Login from "../../Containers/Login/Login";
import Signup from "../../Containers/Signup";
import Card from "../../HOC/Cards/Card";

export default function Auth() {

  const [isLogin, setIsLogin] = useState(true)

  function ToggleIsLogin() {
    setIsLogin(!isLogin)
  }

  return (
    <View>
      <Card title='Bienvenue !' content=
        {isLogin
          ? 'Veuillez-vous authentifier'
          : 'Formulaire d\'inscription'
        }>
        {isLogin ? <Login /> : <Signup />}
        <TouchableOpacity onPress={ToggleIsLogin}>
          <Text style={[styles.link, styles.textCenter]}>
            {isLogin
              ? 'Pas encore membre ? Inscrivez-vous !'
              : 'Déjà membre ? Connectez-vous !'
            }
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: 'royalblue',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline'
  },
  textCenter: {
    textAlign: 'center'
  }
})