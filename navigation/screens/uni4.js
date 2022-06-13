import { View, Text, ScrollView, StyleSheet, Image  } from 'react-native'
import { Appbar, Card, Title, Paragraph, List, DataTable  } from 'react-native-paper';
import React from 'react'

const uni4 = ({ navigation: { goBack } }) => {
    
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView >
        <Appbar.Header style={{backgroundColor:'transparent'}}>
      <Appbar.BackAction onPress={() =>  goBack()} />
      <Appbar.Content  title="Inteligencia artificial" subtitle={'Universidad 4'} />
    </Appbar.Header>


      <Card style={styles.container}>
    <Card.Content>
      <Title style={styles.title}>Universidad Panamericana</Title>
    </Card.Content>
  </Card>

<Card outlined
style={styles.container}>
    <Card.Cover source={{ uri: 'https://newsweekespanol.com/wp-content/uploads/2019/07/upa.jpg' }} />
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
  <DataTable.Row>
       <DataTable.Cell >Inscripción (semestral)</DataTable.Cell>
       <DataTable.Cell numeric>$21,221</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell >Colegiatura (5 pagos)</DataTable.Cell>
       <DataTable.Cell numeric>$19,656</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell >Seguro de orfandad (semestral)</DataTable.Cell>
       <DataTable.Cell numeric>$1,700</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell >Seguro de gastos médicos mayores (semestral)</DataTable.Cell>
       <DataTable.Cell numeric>$1,995</DataTable.Cell>
     </DataTable.Row>
  <List.Section  title="Temario">
      <List.Accordion
        title="Primer semestre"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1. Cálculo Diferencial" />
        <List.Item title="2. Álgebra" />
        <List.Item title="3. Química" />
        <List.Item title="4. Física" />
        <List.Item title="5. Análisis y Diseño de Algoritmos" />
        <List.Item title="6. Historia de la Cultura" />
      </List.Accordion>

      <List.Accordion
        title="Segundo semestre"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1.  Programación Orientada a Objetos" />
        <List.Item title="2. Estructuras de Datos y Algoritmos I" />
        <List.Item title="3. Cálculo Integral" />
        <List.Item title="4. Álgebra Lineal" />
        <List.Item title="5. Mecánica" />
        <List.Item title="6. Persona y Sociedad" />
      </List.Accordion>
      <List.Accordion
        title="Tercer semestre"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1. Programación Avanzada" />
        <List.Item title="2. Estructuras de Datos y Algoritmos II" />
        <List.Item title="3. Cálculo Vectorial" />
        <List.Item title="4. Matemáticas Discretas" />
        <List.Item title="5. Diseño Lógico" />
        <List.Item title="6. Ética" />
      </List.Accordion>
      <List.Accordion
        title="Cuarto semestre"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1. Estructuras de Datos y Algoritmos III" />
        <List.Item title="2. Sistemas Operativos" />
        <List.Item title="3. Cálculo Numérico" />
        <List.Item title="4. Ecuaciones Diferenciales" />
        <List.Item title="5. Administración de Operaciones" />
        <List.Item title="6. Redacción" />
        <List.Item title="7. Antropología Teológica I" />
      </List.Accordion>
      <List.Accordion
        title="Quinto semestre"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1. Optimización y Metaheurísticas I" />
        <List.Item title="2. Introducción a las Bases de Datos" />
        <List.Item title="3. Desarrollo de Aplicaciones Web" />
        <List.Item title="4. Probabilidad y Estadística" />
        <List.Item title="5. Modelado de Agentes y Entornos Virtuales" />
        <List.Item title="6. Microcontroladores I" />
        <List.Item title="7. Antropología Teológica II" />
      </List.Accordion>
      <List.Accordion
        title="Sexto semestre"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1. Optimización y Metaheurísticas II" />
        <List.Item title="2. Bases de Datos Avanzadas" />
        <List.Item title="3. Patrones de Diseño y Arquitecturas de Software" />
        <List.Item title="4. Entorno Económico" />
        <List.Item title="5. Programación de Agentes para Entornos Virtuales" />
        <List.Item title="6. Microcontroladores II" />
        <List.Item title="7. Filosofía Social" />
      </List.Accordion>
      
      <List.Accordion
        title="Septimo semestre"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1. Aprendizaje de Máquina I" />
        <List.Item title="2. Agentes Inteligente" />
        <List.Item title="3. Desarrollo de Aplicaciones para Dispositivos Inteligentes" />
        <List.Item title="4. Proyectos de Inversión e Introducción a la Valuación de Empresas" />
        <List.Item title="5. Cómputo Distribuido" />
        <List.Item title="6. Optativa" />
        <List.Item title="7. Hombre y Mundo Contemporáneo" />
        
      </List.Accordion>

      <List.Accordion
        title="Octavo semestre"
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title="1. Aprendizaje de Máquina II" />
        <List.Item title="2. Procesamiento de Lenguaje Natural" />
        <List.Item title="3. Datos Masivos" />
        <List.Item title="4. Dirección de Empresas" />
        <List.Item title="5. Ingeniería de Software" />
        <List.Item title="6. Ética Profesional" />
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
export default uni4