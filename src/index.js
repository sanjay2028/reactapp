import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './allstyles';
import store from './store';
import { Provider } from 'react-redux'; 
import Layout from './HOC/layout';
import {BrowserRouter} from 'react-router-dom';

const App = () => <BrowserRouter><Layout><Routes /></Layout></BrowserRouter>

store.firebaseAuthIsReady.then(
    () => ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
);

