import { BrowserRouter, Switch, Router } from "react-router-dom";

// Importando as páginas
import Todo from "./pages/todo/todo"
import Add from "./pages/add/add"
import Home from "./pages/home/home"

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" component={Add} />
                <Route path="/todo" component={Todo}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;