import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Simples from "../src/componentes/Simples";
import ParImpar from "../src/componentes/ParImpar";
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';

export default createDrawerNavigator({
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
}, { drawerWidth: 500 })