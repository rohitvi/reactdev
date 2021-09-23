import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from './Form.jsx';
function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Form} />        
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;