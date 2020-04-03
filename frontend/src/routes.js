import React from 'react'

// Importando os sistemas responsáveis por encapsular as rotas e permitir o tráfego
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Importando todos os nossos componentes/páginas. 
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

// Criando o componente rotas que permite a transição entre as páginas.
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon} />
                <Route path='/register' component={Register} />
                <Route path='/profile' component={Profile} />
                <Route path='/incidents/new' component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}