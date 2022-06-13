import { View,StyleSheet } from "react-native";

import { Appbar, Card, Title, Paragraph  } from 'react-native-paper';
import React from "react";
import { Video } from "expo-av";

const Acercade = () => {
  const video = React.useRef(null);
  // const video2 = React.useRef(null)
  //const [status, setStatus] = React.useState({})
  return (
    <View>
    <Appbar.Header style={{backgroundColor:'transparent'}}>
    <Appbar.Content  title="Inteligencia artificial" subtitle={'Principal'} />
  </Appbar.Header>
    <Card style={styles.container}>
    <Card.Content>
      <Title>Entrevista</Title>
    </Card.Content>
      <Video
        ref={video}
        style={{ width: "100%", height: "60%", position: 'relative'}}
        source={ require('./video/video.mp4')
        }
        useNativeControls
        resizeMode="contain"
        isLooping
      />
    </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop:20,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  
});
export default Acercade