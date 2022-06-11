import * as React from 'react';
import {View, Text} from 'react-native';

export default function configuracion({navegacion}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text
            onPress={()=> navegacion.navigate('principal')}
            style={{fontSize:26,fontWeight:'bold'}}>Configuracion</Text>
        </View>
    );
}