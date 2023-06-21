import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";

 

const ROOT = document.getElementById('root');
 
ReactDOM.render( 

    <Provider store={store}>
         <App/>
    </Provider>
 ,
    ROOT
);


 
