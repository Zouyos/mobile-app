import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { globalStyle } from "../../../styles/GlobalStyle";
import { styles } from "./ProfileStyle";
import defaultAvatar from "../../../assets/default_avatar.png"
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import Button from "../../UI/Button/Button";

const Profile = (props) => {

  const { user, setUser } = useContext(UserContext)

  async function pickImage() {
    let image = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1
    })
    if (!image.cancelled) {
      setUser({ ...user, avatar: image })
    }
  }

  function goCam() {
    props.navigation.push('camera')
  }

  function goEditProfile() {
    props.navigation.push('edit-profile')
  }

  return (
    <View>
      <View>
        <Image
          style={[{ width: '100%', height: 300, resizeMode: 'contain' }, styles.avatar]}
          source={user.avatar ? user.avatar : defaultAvatar}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={pickImage}>
            <MaterialIcons name="photo-library" size={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={goCam}>
            <MaterialIcons name="camera-alt" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.title}>Email:</Text>
          <Text style={{ fontSize: globalStyle.fontSize.s }}> {user.email}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>Pseudo:</Text>
          <Text style={{ fontSize: globalStyle.fontSize.s }}>{user.username}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>Description:</Text>
          <Text style={{ fontSize: globalStyle.fontSize.s }}>
            {user.description ? user.description : 'Vous n\'avez pas encore de description'}
          </Text>
        </View>
      </View>
      <View>
        <Button action={goEditProfile} value='Modifier le profil'>
          <Feather name="edit-2" size={24} color={globalStyle.color.lightColor} />
        </Button>
      </View>
    </View>
  );
}

export default Profile;
