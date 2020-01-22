import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import {ProductProvider} from "./context"

let AppWithRouter = <Router><App/></Router>
let AppWithContext = <ProductProvider>{AppWithRouter}</ProductProvider>

ReactDOM.render(AppWithContext, document.getElementById('root'));
