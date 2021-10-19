import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

import GlobalStyle from "./Styles/GlobalStyle";

export default function App() {
    
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/sign-up" exact>
                    <SignUp />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}