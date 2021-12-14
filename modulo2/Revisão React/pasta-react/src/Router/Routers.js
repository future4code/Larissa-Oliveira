import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderHome from '../Components/HeaderHome/HeaderHome'
import HeaderLogin from '../Components/HeaderLogin/HeaderLogin'
import HeaderReceitas from '../Components/HeaderReceitas/HeaderReceitas'

// import HomePage from '../Screens/HomePage/HomePage'
import LoginPage from '../Screens/LoginPage/LoginPage'
import CadastroPage from '../Screens/CadastroPage/CadastroPage'
import ReceitasPage from '../Screens/ReceitasPage/ReceitasPage'
import AdicionarReceitasPage from '../Screens/AdicionarReceitasPage/AdicionarReceitasPage'
import DetalhesReceitasPage from '../Screens/DetalhesReceitasPage/DetalhesReceitasPage'

const Routers = () => {
    return (
        <BrowserRouter>
            <HeaderLogin />

            <Switch>
                {/* <Route exact path={"/"}>
                    <HeaderHome />
                    <HomePage />
                </Route> */}

                <Route exact path={"/login"}>
                    <HeaderLogin />
                    <LoginPage />
                </Route>

                <Route exact path={"/cadastro"}>
                    <HeaderLogin />
                    <CadastroPage />
                </Route>

                <Route exact path={"/"} >
                    <HeaderHome />
                    <ReceitasPage />
                </Route>

                <Route exact path={"/detalhes/:id"}>
                    <HeaderReceitas />
                    <DetalhesReceitasPage />
                </Route>

                <Route exact path={"/adicionarReceitas"}>
                    <HeaderReceitas />
                    <AdicionarReceitasPage />
                </Route>

                <Route>
                    <h1>Erro 404: A Página Não encontrada</h1>
                </Route>
            </Switch>

        </BrowserRouter>
    )

}

export default Routers;