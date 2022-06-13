import { View, Text, ScrollView, StyleSheet, Image  } from 'react-native'
import { Appbar, Card, Title, Paragraph, List  } from 'react-native-paper';
import React from 'react'

const uni2 = ({ navigation: { goBack } }) => {
    
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView >
        <Appbar.Header style={{backgroundColor:'transparent'}}>
      <Appbar.BackAction onPress={() =>  goBack()} />
      <Appbar.Content  title="Inteligencia artificial" subtitle={'Universidad 2'} />
    </Appbar.Header>


      <Card style={styles.container}>
    <Card.Content>
      <Title style={styles.title}>UNAM</Title>
    </Card.Content>
  </Card>

<Card outlined
style={styles.container}>
    <Card.Cover source={{ uri: 'https://guiauniversitaria.mx/wp-content/uploads/2019/07/por-que-la-unam-se-ubica-bien-en-ranking.jpg' }} />
    <Paragraph>Inteligencia Artificial (IA) es un campo de investigación y desarrollo que tiene por objetivo resolver problemas complejos para los cuales no se conocen soluciones algorítmicas exactas computables en la práctica, ya sea por sus grandes dimensiones, su complejidad estructural o los niveles intrínsecos de incertidumbre de los datos que manejan.
    Líneas de investigación.
    {"\n"}
Tecnologías del lenguaje.{"\n"}
  Robótica.{"\n"}
Reconocimiento de patrones.{"\n"}
Sistemas basados en el conocimiento.{"\n"}
Redes neuronales.{"\n"}
Computación evolutiva.{"\n"}
Agentes autónomos y multiagentes.{"\n"}
Sistemas adaptables.{"\n"}
Creatividad y computación.{"\n"}
Cibernética y sistemas.{"\n"}
</Paragraph>
  </Card>

  <List.Section  title="Temario">
      <List.Accordion
        title="1. Introducción a la inteligencia artificial "
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1.1 Facetas del Comportamiento Inteligente " />
        <List.Item title="1.2 Formas de hacer Inteligencia Artificial " />
        <List.Item title="1.3 Generalidades de Aplicaciones Desarrolladas y en Desarrollo" />
        <List.Item title="1.4 Subcampos de la Inteligencia Artificial " />
        <List.Item title="1.5 Relaciones de la Inteligencia Artificial con Otras Disciplinas " />
      </List.Accordion>

      <List.Accordion
        title="2. Agentes inteligentes y ambientes "
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="2.1 Estructura General de Agentes  " />
        <List.Item title="2.2 Ambientes   " />
      </List.Accordion>

      <List.Accordion
        title="3. Representación y uso de conocimiento "
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="3.1 Atributos de una Buena Representación  " />
        <List.Item title="3.2 Reglas" />
        <List.Item title="3.3 Redes Semánticas" />
        <List.Item title="3.4 Cuadros de Minsky" />
        <List.Item title="3.5 Lógica" />
        <List.Item title="3.6 Rutinas" />
        <List.Item title="3.7 Visualización" />
      </List.Accordion>

      <List.Accordion
        title="4. Lenguajes de programación para resolver problemas "
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="4.1 Estructuras Básicas " />
        <List.Item title="4.2 Estructuras Compuestas" />
        <List.Item title="4.3 Aplicaciones de Representación y Uso de Conocimiento " />
      </List.Accordion>

      <List.Accordion
        title="5. Representación de problemas y búsqueda de soluciones  "
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="5.1 Representación en Espacio de Estados " />
        <List.Item title="5.2 Búsqueda de Soluciones en Espacio de Estados" />
        <List.Item title="5.3 Representación Reducida de Problemas y Búsqueda de Soluciones" />
        <List.Item title="5.4 Solución de Problemas mediante Satisfacción de Restricciones" />
      </List.Accordion>

      <List.Accordion
        title="6. Razonamiento   "
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="6.1 Razonamiento Progresivo " />
        <List.Item title="6.2 Razonamiento Regresivo " />
        <List.Item title="6.3 Razonamiento con Incertidumbre " />
      </List.Accordion>

      <List.Accordion
        title="7. Aplicaciones  "
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="7.1 Visión " />
        <List.Item title="7.2 Lenguaje Natural" />
        <List.Item title="7.3 Reconocimiento de Voz " />
        <List.Item title="7.4 Robótica" />
        <List.Item title="7.5 Sistemas Expertos" />
        <List.Item title="7.6 Ambientes Gráficos Interactivos " />
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
export default uni2