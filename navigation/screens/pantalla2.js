import React from 'react'
import { Text, ScrollView } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, Appbar  } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="cast-education" />
const LContent = props => <Avatar.Icon {...props} icon="home-city-outline" />
const pantalla2 = ({navigation}) => {
 
  return (
    <ScrollView>
         <Appbar.Header style={{backgroundColor:'transparent'}}>
      <Appbar.Content  title="Inteligencia artificial" subtitle={'Universidades'} />
    </Appbar.Header>
{/* Primer card */}

      
      <Card 
      >
    <Card.Title 
    title="Ai Lab School" 
    subtitle="Programa educativo online" 
    left={LeftContent} />
    <Card.Content>
      <Title>PROGRAMA PRÁCTICO Y ONLINE DE INTELIGENCIA ARTIFICIAL PARA MEXICANOS – IMPARTE AI
LAB SCHOOL. </Title>
      
    <Card.Cover source={{ uri: 'https://i.ytimg.com/vi/4eaxPZ36y2A/maxresdefault.jpg' }} />
    <Paragraph>Ai Lab School presenta el primer programa educativo online y de colocación laboral en México de
inteligencia artificial, donde se ofrecen proyectos prácticos y metodologías comprobadas de
aprendizaje y análisis avanzada, que brindan las bases fundamentales para desarrollar habilidades
en la programación de Ai. El programa corto, con una duración de 3 meses, está diseñado para
llevar a paso a paso al programador desde el nivel básico al avanzado, con el objetivo de elevar sus
competencias para la siguiente etapa: la colocación de trabajo en empresas de tecnología en
Silicon Valley como Facebook, Google y Amazon. Este curso es exclusivo para mexicanos.</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button
        onPress={() =>navigation.navigate("Ailab") } >
              <Text>Ver</Text></Button>
    </Card.Actions>
  </Card>

{/* Segundo card */}

<Card
outlined
style={{
  marginTop: 20,
}}
>
    <Card.Title 
    title="UNAM" 
    subtitle="Programa educativo presencial" 
    left={LContent} />
    <Card.Content>
      <Title>MAESTRÍA EN INTELIGENCIA ARTIFICIAL – UNIVERSIDAD AUTÓNOMA DE MÉXICO (UNAM) </Title>
      
    <Card.Cover source={{ uri: 'https://www.liderempresarial.com/wp-content/uploads/2020/09/unam.jpg' }} />
    <Paragraph>Ai Lab School presenta el primer programa educativo online y de colocación laboral en México de
inteligencia artificial, donde se ofrecen proyectos prácticos y metodologías comprobadas de
aprendizaje y análisis avanzada, que brindan las bases fundamentales para desarrollar habilidades
en la programación de Ai. El programa corto, con una duración de 3 meses, está diseñado para
llevar a paso a paso al programador desde el nivel básico al avanzado, con el objetivo de elevar sus
competencias para la siguiente etapa: la colocación de trabajo en empresas de tecnología en
Silicon Valley como Facebook, Google y Amazon. Este curso es exclusivo para mexicanos.</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button
        onPress={() =>navigation.navigate("uni2") } >
              <Text>Ver</Text></Button>
    </Card.Actions>
  </Card>

{/* Tercer card */}

<Card
outlined
style={{
  marginTop: 20,
}}
>
    <Card.Title 
    title="Universidad Anahuac" 
    subtitle="Programa educativo presencial" 
    left={LContent} />
    <Card.Content>
      <Title>DIPLOMADO ONLINE EN INTELIGENCIA ARTIFICIAL – UNIVERSIDAD ANÁHUAC. </Title>
      
    <Card.Cover source={{ uri: 'https://www.im.education/blog/wp-content/uploads/2021/11/universidad-anahuac-mexico-3.png' }} />
    <Paragraph>Ai Lab School presenta el primer programa educativo online y de colocación laboral en México de
inteligencia artificial, donde se ofrecen proyectos prácticos y metodologías comprobadas de
aprendizaje y análisis avanzada, que brindan las bases fundamentales para desarrollar habilidades
en la programación de Ai. El programa corto, con una duración de 3 meses, está diseñado para
llevar a paso a paso al programador desde el nivel básico al avanzado, con el objetivo de elevar sus
competencias para la siguiente etapa: la colocación de trabajo en empresas de tecnología en
Silicon Valley como Facebook, Google y Amazon. Este curso es exclusivo para mexicanos.</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button
        onPress={() =>navigation.navigate("uni3") } >
              <Text>Ver</Text></Button>
    </Card.Actions>
  </Card>

{/* Cuarto card */}

<Card
outlined
style={{
  marginTop: 20,
}}
>
    <Card.Title 
    title="Universidad  Panamericana" 
    subtitle="Programa educativo presencial" 
    left={LContent} />
    <Card.Content>
      <Title>INGENIERÍA EN INTELIGENCIA ARTIFICIAL – UNIVERSIDAD PANAMERICANA
 </Title>
      
    <Card.Cover source={{ uri: 'https://www.up.edu.mx/sites/default/files//images/_mgl3990.jpg' }} />
    <Paragraph>El plan de estudios de la ingeniería aporta conocimientos técnicos de programación e inteligencia
artificial, que en conjunto con una visión global, permiten resolver problemas reales por medio de
la programación. La carrera tiene como centro el uso de programas de cómputo para que el
alumno sea capaz de desarrollar programas inteligentes por medio de la programación y
almacenamiento de datos. Los estudiantes obtendrán las herramientas para realizar modelos
gráficos que puedan moverse por sí mismos, listos para utilizarse en la creación de videojuegos
con agentes inteligentes. Y en robótica, harán que el robot piense, sea autónomo, analice y tenga
la capacidad de tomar decisiones. El programa tiene una duración de 8 semestres.
</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button
        onPress={() =>navigation.navigate("uni4") } >
              <Text>Ver</Text></Button>
    </Card.Actions>
  </Card>
  {/* Quinto card */}

<Card
outlined
style={{
  marginTop: 20,
}}
>
    <Card.Title 
    title="UPIIC" 
    subtitle="Programa educativo presencial" 
    left={LContent} />
    <Card.Content>
      <Title>INGENIERÍA EN INTELIGENCIA ARTIFICIAL – UPIIC CAMPUS COAHUILA
 </Title>
      
    <Card.Cover source={{ uri: 'https://noticiasnrt.com/wp-content/uploads/2020/09/UPIIC-abre-convocatoria-a-docentes-de-la-Regi%C3%B3n-Centro.jpg' }} />
    <Paragraph>El egresado de la Ingeniería en Inteligencia Artificial se desempeñará colaborativamente en
equipos multidisciplinarios en el análisis, diseño, implementación, validación, implantación,
supervisión y gestión de sistemas inteligentes, aplicando algoritmos en áreas como aprendizaje de
máquina, procesamiento automático de lenguaje natural, visión artificial y modelos bioinspirados.
La ingeniería tiene una duración de 8 semestres</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button
        onPress={() =>navigation.navigate("uni5") } >
              <Text>Ver</Text></Button>
    </Card.Actions>
  </Card>
  
  </ScrollView>
   


  )

  
}

export default pantalla2