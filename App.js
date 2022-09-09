import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Auth from './Components/Pages/Auth/Auth'
import GlobalDrawer from './Components/Drawers/GlobalDrawer';
import { UserContext } from './contexts/UserContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './libs/request/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function App() {

  // const fakeUser = { email: 'johndoe@gmail.com', username: 'John' }
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const usersRef = doc(db, "users", user.uid);
      const userSnapshot = await getDoc(usersRef);
      const userData = userSnapshot.data()
      setUser({ ...userData, uid: user.uid })
    } else {
      setUser(null)
    }
  })

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <View style={styles.container}>

        <NavigationContainer>
          {user ? <GlobalDrawer /> : <Auth />}
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