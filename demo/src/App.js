import React from 'react';
import './App.css';
import TodoList from "./view/Todos/TodoList";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./view/nav/Nav";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./view/example/Home";
import ListUsers from "./view/users/ListUsers";
import DetailUser from "./view/users/DetailUser";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className={'App'}>
                    <header className={'App-header'}>
                        <Nav/>
                        <Switch>
                            <Route path="/home">
                                <Home />
                            </Route>
                            <Route path="/todo">
                                <TodoList />
                            </Route>
                                                                                                                                                                                                                                                                                                                                                                        <Route path="/users">
                                <ListUsers/>
                            </Route>
                            <Route path={"/user/:id"}>
                                <DetailUser/>
                            </Route>
                        </Switch>
                    </header>

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </Router>
        );
    }
}

export default App;
