import { createDrawerNavigator } from "@react-navigation/drawer";
import Navbar from "../Containers/Navbar/Navbar";
import GOT from "../Pages/GOT/GOT";
import ProfileStack from "../Stacks/ProfileStack";

const Drawer = createDrawerNavigator();

export default function GlobalDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props) => {
          return <Navbar {...props} />;
        },
      }}
    >
      <Drawer.Screen
        name='profilestack'
        component={ProfileStack}
        options={{
          title: 'Profil'
        }}
      />
      <Drawer.Screen
        name='GOT'
        component={GOT}
        options={{
          title: 'Personnages de Game of Thrones'
        }}
      />
    </Drawer.Navigator>
  )
}