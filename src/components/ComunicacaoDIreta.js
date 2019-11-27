import React from 'react';
import { View, Text } from 'react-native';

const fonte = { style: { fontSize: 30 } }

export const Filho = props =>
    <View>
        <Text {...fonte}>
            Filho : {props.nome} {props.sobrenome}
        </Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>
            Pai: {props.nome} {props.sobrenome}
        </Text>
        {React.Children.map(props.children, c => React.cloneElement(c, {...props, ...c.props}))}

    </View>
export default Avo = props => (
    <View>
        <Text {...fonte}> Avo: {props.nome} {props.sobrenome} </Text>
        <Pai nome='José' sobrenome={props.sobrenome}>
            <Filho nome='jiselle' />
            <Filho nome='Ysabelle' />
            <Filho nome='Cristal' />
        </Pai>
        <Pai {...props} nome='Pai do Lucas' sobrenome='Nascimento'>
        <Filho nome='Lucas' />
        <Filho nome='Felipe' />
        <Filho nome='Pedro' />
        </Pai>
    </View>
)

