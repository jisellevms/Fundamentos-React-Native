import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';

export default class App extends React.Component{
    render(){
        return(
            <View style={ styles.container}>
               <Simples texto='Jiselle'/>
               <ParImpar numero={35}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})