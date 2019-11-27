import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Simples from "./components/Simples";
import ParImpar from "./components/ParImpar";
import Contador from './components/Contador';
import Plataformas from './components/Plataformas';
import ValidarProps from './components/ValidarProps';
import Evento from './components/Evento';
import Avo  from './components/ComunicacaoDIreta';
import  TextoSincronizado  from './components/ComunicacaoIndireta';

export default createDrawerNavigator({
    TextoSincronizado : {
        screen : () => <TextoSincronizado />,
        navigationOptions: { title: 'Texto Sincronizado' }

    },
    Avo:{
        screen: () => <Avo nome='Avô' sobrenome='Martins'/>
    },
    Evento: {
        screen : () => <Evento />
    },
    ValidarProps: {
        screen : () => <ValidarProps ano={1} />
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numero={8} />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par e Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Princesa' />
    }
}, { drawerWidth: 300 })