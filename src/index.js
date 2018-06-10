import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from "./reducers";
import App from "./App";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import Photos from "./components/photo_page";
import StoryList from "./components/story_list";
import HamburgerMenu from "./components/hamburger_menu";
import registerServiceWorker from "./registerServiceWorker";
import "./style/styles.scss";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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
