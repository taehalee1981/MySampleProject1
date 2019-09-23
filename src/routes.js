import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Table from './Table'
import Client from './client/Client'

const Routes = () => (
    // <BrowserRouter> vai definir router através de browser. React-router-dom permite outros locais.
    // <Switch> permite que apenas 1 pagina é exibida por cada rota.
    <BrowserRouter>       
        <Switch>
            <Route exact path="/" component={Table} />
            <Route path="/products/:id" component={Client} />
        </Switch>
    </BrowserRouter>
)

export default Routes