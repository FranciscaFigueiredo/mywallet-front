import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "../src/contexts/UserContext";
import Home from "./components/pages/Home";

import Login from "./components/pages/Login";
import NewEntry from "./components/pages/NewEntry";
import NewExit from "./components/pages/NewExit";
import SignUp from "./components/pages/SignUp";

import GlobalStyle from "./Styles/GlobalStyle";

export default function App() {

    const [user, setUser] = useState(null);
	const [ token, setToken ] = useState(null);
    
    return (
        <BrowserRouter>
            <UserContext.Provider value={{user, setUser, token, setToken}} >
                <GlobalStyle />
                <Switch>
                    <Route path="/" exact>
                        <Login setUser={setUser} token={token} setToken={setToken} />
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
            </UserContext.Provider>
        </BrowserRouter>
    )
}