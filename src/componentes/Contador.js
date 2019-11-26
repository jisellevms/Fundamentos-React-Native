import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Padrao from '../estilo/Padrao'

export default class Contador extends React.Component {

    state = {
        numero: 0
    } 

    maisUm ()  {
        this.setState({ numero: this.state.numero + 1 })
    }
    limpar = () => { // 1° Forma de fazer arrow fuction
        this.setState({ numero: 0 })
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={() => this.maisUm()} // 2° Forma de fazer arrow fuction
                    onLongPress={this.limpar}>
                <Text style={Padrao.ex}>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}