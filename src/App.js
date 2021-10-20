import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import Login from "./components/pages/Login";
import NewEntry from "./components/pages/NewEntry";
import NewExit from "./components/pages/NewExit";
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
                <Route path="/new-entry" exact>
                    <NewEntry />
                </Route>
                <Route path="/new-exit" exact>
                    <NewExit />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}