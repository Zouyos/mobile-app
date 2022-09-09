import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './Components/Pages/Auth/Auth'
import ProfileStack from './Components/Stacks/ProfileStack';
import { UserContext } from './contexts/UserContext';

export default function App() {
  const fakeUser = { email: 'johndoe@gmail.com', username: 'John' }
  const [user, setUser] = useState(fakeUser)
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <View style={styles.container}>

        <NavigationContainer>
          {user ? <ProfileStack /> : <Auth />}
        </NavigationContainer>

        <StatusBar style="auto" />
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20
  }
});
// false: null, '', 0, undefined. (/!\ [] == true)