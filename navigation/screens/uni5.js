import { View, Text, ScrollView, StyleSheet, Image  } from 'react-native'
import { Appbar, Card, Title, Paragraph, List  } from 'react-native-paper';
import React from 'react'

const uni5 = ({ navigation: { goBack } }) => {
    
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView >
        <Appbar.Header style={{backgroundColor:'transparent'}}>
      <Appbar.BackAction onPress={() =>  goBack()} />
      <Appbar.Content  title="Inteligencia artificial" subtitle={'Universidad 5'} />
    </Appbar.Header>


      <Card style={styles.container}>
    <Card.Content>
      <Title style={styles.title}>UPIIC</Title>
    </Card.Content>
  </Card>

<Card outlined
style={styles.container}>
    <Card.Cover source={{ uri: 'https://www.upiic.ipn.mx/assets/files/upiic/img/img-controlAutoma.jpg' }} />
    <Paragraph>El egresado de la Ingeniería en Inteligencia Artificial se desempeñará colaborativamente en equipos multidisciplinarios en el análisis,
       diseño, implementación, validación, implantación, supervisión y gestión de sistemas inteligentes, aplicando algoritmos en áreas como aprendizaje de máquina,
        procesamiento automático de lenguaje natural, visión artificial y modelos bioinspirados; ejerciendo su profesión con liderazgo, ética y responsabilidad social.
</Paragraph>
  </Card>

  <Card outlined
style={styles.container}>
     <Paragraph>MISIÓN:{"\n"}
El Instituto Politécnico Nacional contribuye al desarrollo económico y social de la nación, a través de la formación integral de personas competentes;
 de la investigación, el desarrollo tecnológico y la innovación. Además, tiene reconocimiento internacional por su calidad e impacto social.{"\n"}

Por su parte, el IPN, tiene como Misión el “Formar profesionales líderes en saberes de ingeniería, tecnología y ciencias, de la computación,
 con una visión globalizada; así como contribuir con investigación y desarrollo tecnológico para el crecimiento del país”.{"\n"}

En correspondencia con lo anterior, la Misión es formar profesionales capaces de extraer conocimiento implícito y complejo,
 potencialmente útil, a partir de grandes conjuntos de datos, así como de utilizar los métodos de aprendizaje automático, estadística
  y sistemas de bases de datos para la toma de decisiones de alta dirección; que participen en dinámicas de trabajo colaborativo e interdisciplinario
   con sentido ético y responsabilidad social, manteniéndose actualizados permanentemente para responder
    a las necesidades de la sociedad y de desarrollo sustentable a nivel nacional e internacional.{"\n"}

A través de la Licenciatura en Ciencia de Datos, el Instituto Politécnico Nacional proveerá a la sociedad del siglo XXI,
 de expertos profesionales capaces de resolver con ética y responsabilidad, los principales retos en el ámbito de la toma de decisiones 
 a partir de la sistematización de grandes volúmenes de información. La calidad en el desempeño de este profesionista politécnico, tendrá
  repercusión en el desarrollo tecnológico y la innovación tanto a nivel nacional como internacional.
</Paragraph>
  </Card>
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
export default uni5