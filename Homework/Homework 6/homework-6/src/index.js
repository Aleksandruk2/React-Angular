import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store, storeEvent} from "./app/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store || storeEvent}>
            <App />
        </Provider>
    </BrowserRouter>


);

