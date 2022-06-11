import * as React from 'react';
import {View, Text} from 'react-native';

export default function principal({navegacion}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text
            onPress={()=> alert('Esta es la pantalla de inicio.')}
            style={{fontSize:26,fontWeight:'bold'}}>Pantalla principal</Text>
        </View>
    );
}