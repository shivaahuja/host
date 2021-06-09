import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Fahrkosten  from './Fahrkosten';



const App = () => {
    return(
        <div>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Fahrkosten} />
     
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App;