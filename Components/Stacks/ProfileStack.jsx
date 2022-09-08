import { createStackNavigator } from "@react-navigation/stack"
import { globalStyle } from "../../styles/GlobalStyle"
import Cam from "../Pages/Cam/Cam"
import Profile from "../Pages/Profile/Profile"

const Stack = createStackNavigator()
export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: globalStyle.color.primaryColor },
      headerTitleStyle: { color: globalStyle.color.lightColor }
    }}>
      <Stack.Screen
        name='profile'
        component={Profile}
        options={{ title: 'Profil' }}
      />
      <Stack.Screen
        name='camera'
        component={Cam}
        options={{ title: 'Prenez une photo' }}
      />
    </Stack.Navigator>
  )
}