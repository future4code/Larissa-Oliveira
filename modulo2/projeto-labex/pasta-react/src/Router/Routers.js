import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderUser from '../components/HeaderUser/HeaderUser';
import  HeaderAdminPage  from '../components/HeaderAdminPage/HeaderAdminPage'

import HomePage from '../screens/HomePage/HomePage';
import ListTripsPage from '../screens/ListTripsPage/ListTripsPage';
import AdminHomePage from '../screens/AdminHomePage/AdminHomePage.js';
import ApplicationFormPage from '../screens/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../screens/CreateTripPage/CreateTripPage';
import LoginPage from '../screens/LoginPage/LoginPage';
import TripDetailsPage from '../screens/TripDetailsPage/TripDetailsPage';

const Routers = () => {
    return(
        <BrowserRouter>

        <Switch>
            <Route exact path={"/"}>
                <HeaderUser />
                <HomePage />
                
            </Route>

            <Route exact path={"/listTrip"}>
                 <HeaderUser />
                <ListTripsPage />
            </Route>

            <Route exact path={"/login"}>
                 <HeaderUser />
                <LoginPage />
            </Route>

            <Route exact path={"/form"} >
                <HeaderUser />
                <h2>Cadastro</h2>
                <ApplicationFormPage />
            </Route>

            <Route exact path={"/admin"}>
                <HeaderAdminPage />
                <AdminHomePage />
            </Route>
                
            <Route exact path={"/admin/creatPage"}>
                <HeaderAdminPage />
                <CreateTripPage />
            </Route>
            
            <Route exact path={"/admin/detail/:id"}>
                <HeaderAdminPage />
                <TripDetailsPage />
            </Route>

            <Route>
            <h1>Erro 404: A Página Não encontrada</h1>
            </Route>
        </Switch>

        </BrowserRouter>
    )

}

export default Routers;