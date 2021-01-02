import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import Home from '../home/Home';
import Intro from '../introduce/Intro';
import Allproduct from '../product/Allproduct';

class RouterURL extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/san-pham">
                            <Allproduct />
                        </Route>
                        <Route path="/tin-tuc">
                            <Blog />
                        </Route>
                        <Route path="/gioi-thieu">
                            <Intro />
                        </Route>
                        <Route path="/lien-he">
                            <Contact />
                        </Route>
                        <Route>
                            <Home />
                        </Route>
                    </Switch>
                </div>
        );
    }
}

export default RouterURL;