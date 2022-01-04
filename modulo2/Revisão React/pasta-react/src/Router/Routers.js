import React from "react";
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../Screens/LoginPage/LoginPage'
import CadastroPage from '../Screens/CadastroPage/CadastroPage'
import ReceitasPage from '../Screens/ReceitasPage/ReceitasPage'
import AdicionarReceitasPage from '../Screens/AdicionarReceitasPage/AdicionarReceitasPage'
import DetalhesReceitasPage from '../Screens/DetalhesReceitasPage/DetalhesReceitasPage'

const Routers = ({setRightButtonText}) => {
    return (
        <Switch>

            <Route exact path={"/login"}>
                <LoginPage setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path={"/cadastro"}>
                <CadastroPage setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path={"/"} >
                <ReceitasPage />
            </Route>

            <Route exact path={"/detalhes/:id"}>
                <DetalhesReceitasPage />
            </Route>

            <Route exact path={"/adicionarReceitas"}>
                <AdicionarReceitasPage />
            </Route>

            <Route>
                <h1>Erro 404: A Página Não encontrada</h1>
            </Route>
        </Switch>
    )

}

export default Routers;