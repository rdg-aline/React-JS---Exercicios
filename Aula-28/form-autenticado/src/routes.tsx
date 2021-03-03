import { Switch, Route } from 'react-router-dom'
import Form from './components/Form'
import Produtos from './components/Produtos'



function Rotas() {
    return (
        <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/produto" exact component= {Produtos} />

        </Switch>
    )
}

export default Rotas
