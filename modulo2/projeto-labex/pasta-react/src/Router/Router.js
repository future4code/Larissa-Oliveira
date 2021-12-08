import React from "react";

import {HeaderUser} from '../components/HeaderUser/HeaderUser'
import {HomePage} from '../screens/HomePage/HomePage'
import {ListTripsPage} from '../screens/ListTripsPage/ListTripsPage'
import {AdminHomePage} from '../screens/AdminHomePage/AdminHomePage'
import {ApplicationFormPage} from '../screens/ApplicationFormPage/ApplicationFormPage'
import {CreateTripPage} from '../screens/CreateTripPage/CreateTripPage'
import {LoginPage} from '../screens/LoginPage/LoginPage'
import {TripDetailsPage} from '../screens/TripDetailsPage/TripDetailsPage'

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Router () {
    return(
        <BrowserRouter>
        <Switch>

            <Route exact path={"/"}>
                <HeaderUser />
                <HomePage />
            </Route>
                
            <Route>
                <AdminHomePage />
            </Route>

            <Route exact path={"/listTrip"}>
                <ListTripsPage />
            </Route>

            <Route exact path={"/login"}>
                <LoginPage />
            </Route>

            <Route exact path={"/admin"} >
                <AdminLoginPage />
            </Route>

            <Route>

            </Route>

            <Route>

            </Route>

            <Route>

            </Route>

        </Switch>
        </BrowserRouter>
    )

}