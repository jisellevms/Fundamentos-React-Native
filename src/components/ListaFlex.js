import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'Jiselle', nota: 7.9 },
    { id: 2, nome: 'Ana', nota: 9.1 },
    { id: 3, nome: 'Paulo', nota: 9.9 },
    { id: 4, nome: 'Lucas', nota: 5.9 },
    { id: 5, nome: 'Jiselle', nota: 7.9 },
    { id: 6, nome: 'Ana', nota: 9.1 },
    { id: 7, nome: 'Paulo', nota: 9.9 },
    { id: 8, nome: 'Lucas', nota: 5.9 },
    { id: 9, nome: 'Jiselle', nota: 7.9 },

    { id: 11, nome: 'Jiselle', nota: 7.9 },
    { id: 12, nome: 'Ana', nota: 9.1 },
    { id: 13, nome: 'Paulo', nota: 9.9 },
    { id: 14, nome: 'Lucas', nota: 5.9 },
    { id: 15, nome: 'Jiselle', nota: 7.9 },
    { id: 16, nome: 'Ana', nota: 9.1 },
    { id: 17, nome: 'Paulo', nota: 9.9 },
    { id: 18, nome: 'Lucas', nota: 5.9 },
    { id: 19, nome: 'Jiselle', nota: 7.9 }
]
const itemEstilo = {
    paddingHorizontal: 15,
    height: 80,
    backgroundColor: '#a56',
    borderWidth: 0.5,
    borderColor: '#222',
    //flex
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'

}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text
            style={{fontSize: 30}}>
            Nome: {props.nome}
        </Text>
        <Text
            style={{ fontWeight: 'bold', fontSize: 30 }}>
            Nota: {props.nota}
        </Text>
    </View>

export default props => {
    const renderItem = ({ item }) =>{
        return <Aluno {...item} />
    }
    return(
        <ScrollView>
            <FlatList 
            data={alunos} 
            renderItem={renderItem}
            keyExtractor={(_,index) => index.toString()}/>
        </ScrollView>
    )
}