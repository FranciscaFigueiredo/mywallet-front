import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "../src/contexts/UserContext";
import EditFinancialEvent from "./pages/EditFinancialEvent";
import Home from "./pages/Home";

import Login from "./pages/Login";
import NewEntry from "./pages/NewEntry";
import NewExit from "./pages/NewExit";
import SignUp from "./pages/SignUp";

import GlobalStyle from "./styles/GlobalStyle";

export default function App() {

    const [user, setUser] = useState(null);
	const [ token, setToken ] = useState(null);

    useEffect(() => {
        if (user === null) {
            setUser(JSON.parse(sessionStorage.getItem("name")));
        }
    }, [user]);
    
    return (
        <BrowserRouter>
            <UserContext.Provider value={{user, setUser, token, setToken}} >
                <GlobalStyle />
                <Switch>
                    <Route path="/" exact>
                        <Login user={user} setUser={setUser} setToken={setToken} />
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
                    <Route path="/edit/:id" exact>
                        <EditFinancialEvent />
                    </Route>
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    )
}
