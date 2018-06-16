import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reducers from "./reducers";
import App from "./App";
import AppHeader from "./components/header";
import Login from "./components/login";
import SignUp from "./components/sign_up";
import registerServiceWorker from "./registerServiceWorker";
import "./style/styles.scss";
import config from "./amplify-config";
import Amplify from "aws-amplify";

Amplify.configure(config);

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Login />
        <SignUp />
        <header className="App-header">
          <AppHeader />
        </header>
        <Route path="/" component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
