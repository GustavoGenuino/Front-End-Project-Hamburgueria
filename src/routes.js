import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/New Order"
import Pedidos from "./Pages/Orders"


function Routes() {

    return (

        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pedidos" component={Pedidos} />
            </Switch>
        </Router>
    )

}

export default Routes