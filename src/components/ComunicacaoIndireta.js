import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Padrao from '../style/Padrao';

export const Entrada = props =>
    <View>
        <TextInput
            value={props.texto}
            style={Padrao.input}
            onChangeText={props.chamarQuandoMudar}
        />
    </View>

export default class TextoSincronizado extends React.Component {

    state = {

    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>
                    {this.state.texto}
                </Text>
                <Entrada
                    texto={this.state.texto}
                    chamarQuandoMudar={this.alterarTexto} >
                </Entrada>
            </View>
        )
    }

}