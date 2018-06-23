import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from 'redux-thunk';
// import {Router, browserHistory } from 'react-router';
import reducers from "./reducers/index";
import App from "./App";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import Photos from "./components/photo_page";
import StoryList from "./components/story_list";
import HamburgerMenu from "./components/hamburger_menu";
import registerServiceWorker from "./registerServiceWorker";
import "./style/styles.scss";
// import LoadingScreen from 'react-loading-screen';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//the second argument are the redux dev tools!

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>

        <header className="App-header">
          <AppHeader />
        </header>
        <HamburgerMenu />
        <Switch>
          <Route path="/story" component={StoryList} />
          <Route path="/photos" component={Photos} />
          <Route path="/" component={App} />
        </Switch>

        <div className="App-footer">
          <AppFooter />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
