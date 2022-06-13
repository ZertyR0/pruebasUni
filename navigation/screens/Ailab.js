import { View, Text, ScrollView, StyleSheet, Image  } from 'react-native'
import { Appbar, Card, Title, Paragraph, List  } from 'react-native-paper';
import React from 'react'

const Ailab = ({ navigation: { goBack } }) => {
    
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView >
        <Appbar.Header style={{backgroundColor:'transparent'}}>
      <Appbar.BackAction onPress={() =>  goBack()} />
      <Appbar.Content  title="Inteligencia artificial" subtitle={'Universidad 1'} />
    </Appbar.Header>


      <Card style={styles.container}>
    <Card.Content>
      <Title style={styles.title}>Ai Lab School</Title>
    </Card.Content>
  </Card>

<Card outlined
style={styles.container}>
    <Card.Cover source={{ uri: 'https://thestempedia.com/wp-content/uploads/2022/03/AI-Robotics-Lab-Layout-Furniture-1-1.png' }} />
    <Paragraph>El plan de estudios de la ingeniería aporta conocimientos técnicos de programación e inteligencia
artificial, que en conjunto con una visión global, permiten resolver problemas reales por medio de
la programación. La carrera tiene como centro el uso de programas de cómputo para que el
alumno sea capaz de desarrollar programas inteligentes por medio de la programación y
almacenamiento de datos. Los estudiantes obtendrán las herramientas para realizar modelos
gráficos que puedan moverse por sí mismos, listos para utilizarse en la creación de videojuegos
con agentes inteligentes. Y en robótica, harán que el robot piense, sea autónomo, analice y tenga
la capacidad de tomar decisiones. El programa tiene una duración de 8 semestres.
</Paragraph>
  </Card>

  <List.Section  title="Temario">
      <List.Accordion
        title="Sesiones 1-4"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1. Inteligencia artificial para principiantes: Aplicaciones y Alcances" />
        <List.Item title="2. Introducción a la clasificación lineal" />
        <List.Item title="3. Introducción a las redes neuronales artificiales" />
        <List.Item title="4. Redes neuronales densamente conectadas" />
      </List.Accordion>

      <List.Accordion
        title="Sesiones 5-8"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="5. Redes neuronales convolucionales " />
      </List.Accordion>

      <List.Accordion
        title="Sesiones 9-12"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="6. Redes neuronales recurrentes y su uso en el procesamiento de datos secuenciales " />
        <List.Item title="7. Redes generativas antagónicas" />
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
  
});
export default Ailab