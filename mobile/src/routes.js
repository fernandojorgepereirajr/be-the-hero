import React from 'react'

// Importando serviços que permitiram fazer as navegação da páginas 
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigation } from '@react-navigation/stack'

const AppStack = createStackNavigation()

// Importando as páginas da nossa aplicação.
import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

// Criando a função responsável por fazer as navegações.
export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Incidents' component={Incidents} />
                <AppStack.Screen name='Detail' component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
