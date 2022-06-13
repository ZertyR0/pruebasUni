import { View, Text, ScrollView, StyleSheet, Image  } from 'react-native'
import { Appbar, Card, Title, Paragraph, List  } from 'react-native-paper';
import React from 'react'

const uni3 = ({ navigation: { goBack } }) => {
    
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView >
        <Appbar.Header style={{backgroundColor:'transparent'}}>
      <Appbar.BackAction onPress={() =>  goBack()} />
      <Appbar.Content  title="Inteligencia artificial" subtitle={'Universidad 3'} />
    </Appbar.Header>


      <Card style={styles.container}>
    <Card.Content>
      <Title style={styles.title}>Universidad Anahuac</Title>
    </Card.Content>
  </Card>

<Card outlined
style={styles.container}>
    <Card.Cover source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4E1BAQG79YUsppgzpA/company-background_10000/0/1542128388576?e=2147483647&v=beta&t=9rE9WivTayzwzGu7YNi1xjJhTgpFmz6xPy12Y9RAyOA' }} />
    <Paragraph>Se abordan temáticas primordiales de carácter introductorio sobre la Inteligencia Artificial, así
como sus componentes básicos como el Machine Learning, los sistemas cognitivos y
representación del conocimiento, el Data Science y las redes neuronales, entre otras temáticas
relevantes. El diplomado tiene una duración de 7 meses
</Paragraph>
  </Card>

<Card outlined
style={styles.container}>
     <Paragraph>Objetivos del diplomado:{"\n"}
-Reconocer la importancia de la Inteligencia Artificial en la vida cotidiana.{"\n"}
-Conocer el entorno actual y futuro, derivado del uso de la Inteligencia Artificial.{"\n"}
-Comprender las premisas básicas y sus aplicaciones, modelos, algoritmos y herramientas empleadas, así como los modelos exitosos a nivel gobierno, empresa, academia y ciencia.
</Paragraph>
  </Card>
  
  <List.Section  title="Temario">
      <List.Accordion
        title="Modulos"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1. Introducción a la Inteligencia Artificial" />
        <List.Item title="2. Componentes básicos en Inteligencia Artificial" />
        <List.Item title="3. Sistemas Cognitivos y Representación del Conocimiento" />
        <List.Item title="4. Data Science" />
        <List.Item title="5. Redes neuronales" />
      </List.Accordion>

    </List.Section>
    
    </ScrollView>
    
  )
}

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
  red: {
    color: 'red',
  },
  
});
export default uni3