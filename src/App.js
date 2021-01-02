import React, { Component } from 'react';
import './App.css';
import Listsharing from './components/free_div/Listsharing';
import Listcontact from './components/free_div/Listcontact';
import Modalcontact from './components/free_div/Modalcontact';
import Filter from './components/free_div/Filter';
import Bodymask from './components/free_div/Bodymask';
import Header from './components/header/Header';
import Nav from './components/header/Nav';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import RouterURL from './components/router/RouterURL';
import Footer from './components/footer/Footer';
class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header></Header>
                    <Nav></Nav>
                    <RouterURL></RouterURL>
                    <Footer></Footer>
                    <Filter></Filter>
                    <Listsharing></Listsharing>
                    <Listcontact></Listcontact>
                    <Modalcontact></Modalcontact>
                    <Bodymask></Bodymask>
                </div>
            </Router>
        );
    }
}

export default App;                                    
