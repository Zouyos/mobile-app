import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { globalStyle } from '../../../styles/GlobalStyle';

const GOT = () => {

  const [persos, setPersos] = useState([])

  useEffect(() => {
    axios.get("https://thronesapi.com/api/v2/Characters").then((reponse) => {
      setPersos(reponse.data)
    })
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {persos.map((element) => {
        return (
          <View key={element.id} style={styles.persoContainer}>
            <Text style={styles.fullName}>{element.fullName}</Text>
            <Image
              source={{ uri: element.imageUrl }}
              style={{ width: '100%', height: 300, resizeMode: 'contain' }} />
            <Text style={styles.title}>{'« ' + element.title + ' »'}</Text>
          </View>
        )
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  persoContainer: {
    backgroundColor: 'rgb(220, 220, 220)',
    padding: 20,
    margin: 30,
    borderRadius: 10
  },
  fullName: {
    color: globalStyle.color.primaryColor,
    fontSize: globalStyle.fontSize.lg,
    textAlign: 'center',
    paddingVertical: 10
  },
  title: {
    color: globalStyle.color.primaryColor,
    fontSize: globalStyle.fontSize.md,
    textAlign: 'center',
    paddingVertical: 10
  }
});

export default GOT;

