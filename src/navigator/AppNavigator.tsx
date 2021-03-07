import React, {
  Fragment,
  Component,
  FC,
  lazy,
  Suspense,
  Dispatch,
} from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import { usersRequest } from "../containers/dashboard/actions";
import { Users } from "../containers/dashboard/types";
import { ApplicationState, ConnectedReduxProps } from "../store";
import { RouteEnums } from "./RouteEnums";
const Home = lazy(() => import("../containers/dashboard/Dashboard"));

interface PropsFromState {
  loading: boolean;
  users: Users;
  errors: Error;
}
interface PropsFromDispatch {
  onUsersRequest: typeof usersRequest;
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps;
class AppNavigator extends Component<AllProps> {
  usersHandle = () => {
    this.props.onUsersRequest({ page: 1 });
  };

  componentDidUpdate(prevProps: PropsFromState) {
    const prev = prevProps;
    const now = this.props;

    if (prev.loading && !now.loading && !prev.errors && now.errors) {
    }
  }
  App: FC = () => (
    <Fragment>
      <Header usersHandle={this.usersHandle} />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path={`${RouteEnums.DASHBOARD}`}
            render={() => <Home users={this.props.users} loading={this.props.loading} />}
            exact
          />
        </Switch>
      </Suspense>
    </Fragment>
  );

  render() {
    return <this.App />;
  }
}
const mapToState: any = ({ users }: ApplicationState) => ({
  loading: users.loading,
  users: users.users,
  errors: users.errors,
});

const mapToDispatch = (dispatch: Dispatch<any>) => ({
  onUsersRequest: (params: { page: number }) => dispatch(usersRequest(params)),
});

export default connect<any>(mapToState, mapToDispatch)(AppNavigator);
