import React, { Component } from "react";
import { Switch, Route, Routes ,BrowserRouter as Router} from 'react-router-dom'
import routes from "./routes";
function IndexRoute() {
    console.log(routes)
    return (
        <Router>
            <Switch>
                {routes.map((item, index) =>(
                     <RouteWithSubRoutes key={index} {...item} />
                ))}
            </Switch>
        </Router>

    )
}

function RouteWithSubRoutes(item) {
    return (
        <Route
            path={item.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <item.component {...props} routes={item.routes} />
            )}
        />
    );
}

export default IndexRoute