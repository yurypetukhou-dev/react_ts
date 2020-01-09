import React from 'react';
import './App.css';
import Header from "./components/header";
import TodoForm from "./components/todoForm";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import About from './components/about'

const App: React.FC = () => {
    return <React.Fragment>
        <Router>
            <Header/>
            <div className='container'>

                <Switch>
                    <Route path='/' exact component={TodoForm}/>
                    <Route path='/about' component={About}/>
                    <Redirect to="/"/>
                </Switch>

            </div>
        </Router>
    </React.Fragment>
}

export default App;
