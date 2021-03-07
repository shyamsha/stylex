import React, { Fragment, Component, FC, lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import { RouteEnums } from "./RouteEnums";
const Dashboard = lazy(() => import("../containers/dashboard/Dashboard"));

class AppNavigator extends Component {
  App: FC = () => (
    <Fragment>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${RouteEnums.DASHBOARD}`} component={Dashboard} exact />
        </Switch>
      </Suspense>
    </Fragment>
  );

  render() {
    return <this.App />;
  }
}

export default AppNavigator;
