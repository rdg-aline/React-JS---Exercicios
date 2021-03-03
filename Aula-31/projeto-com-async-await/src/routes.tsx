import { Switch, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Carrinho from './pages/Carrinho'
import Auth from './components/Auth'



function Rotas() {
    return (
        <Switch>
            <Route path="/" exact component={Cadastro} />
            <Auth path="/home" exact component= {Home} />
            <Auth path="/carrinho" exact component= {Carrinho} />
        </Switch>
    )
}

export default Rotas
