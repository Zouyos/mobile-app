// rnfc: React Native Fonctionnal Component
import { View, Text, StyleSheet, ActivityIndicator, useWindowDimensions } from 'react-native';
import { Camera, CameraType } from 'expo-camera'
import { globalStyle } from '../../../styles/GlobalStyle';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';

const Cam = (props) => {

  const {user, setUser} = useContext(UserContext)
  const size = useWindowDimensions()

  // Permet de mémoriser la référence de la camera
  const cameraRef = useRef()

  // Variable d'état pour le type de camera (front/back)
  const [cameraType, setCameraType] = useState(CameraType.back)

  // Demander la persmission au user
  const [permission, requestPermission] = Camera.useCameraPermissions();

  // Si la permission est null ou indéterminée, on affiche un chargement
  if (!permission || permission.status === 'undetermined') {
    requestPermission();
    return <ActivityIndicator size={100} color={globalStyle.color.primaryColor} />
  }

  // Si la permission est refusée
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.deniedText}>Permission refusée.</Text>
        <Feather name="camera-off" size={50} color="red" />
      </View>
    )
  }

  function toggleCameraType() {
    setCameraType(cameraType === CameraType.back ? CameraType.front : CameraType.back)
  }

  async function takePicture() {
    // Obtenir les ratios du tel dans la console :
    // const ratios = await cameraRef.current.getSupportedRatiosAsync()
    // console.log(ratios);
    const image = await cameraRef.current.takePictureAsync()
    // Utiliser le context pour mettre l'image dans user
    setUser({...user, avatar: image.uri})
    // Utiliser la navigation reçue en props pour revenir au profil
    props.navigation.pop()
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={cameraType}
        ratio='16:9'
        // ratio='1:1'
        style={{ height: (size.width * 16) / 9, width: size.width }}
        // style={{ height: size.width, width: size.width }}
      />
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={toggleCameraType}>
          <MaterialIcons name="flip-camera-android" size={50} color={globalStyle.color.lightColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture}>
          <MaterialIcons name="camera" size={50} color={globalStyle.color.lightColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deniedText: {
    color: 'red',
    fontSize: globalStyle.fontSize.lg
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '80%',
    maxWidth: 300,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 100,
    padding: 10,
    borderRadius: 10
  }
});

export default Cam;
