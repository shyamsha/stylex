import React from "react";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "./App.css";
import AppNavigator from "./navigator/AppNavigator";
import { ApplicationState } from "./store";
import configureStore from "./configureStore";
import { usersInitialState } from "./containers/dashboard/reducers";

const history = createBrowserHistory();

const initialState: ApplicationState = {
  users: usersInitialState,
  router: { location: history.location, action: "PUSH" },
};

const store = configureStore(history, initialState);

function App(props:any) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppNavigator {...props} />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
