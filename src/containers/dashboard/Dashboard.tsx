import React from "react";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { FlexContainer } from "../../components/Styles/styles";
import { Users } from "./types";

interface Props {
  users: Users;
  loading: boolean;
}

function Dashboard(props: Props) {
  const { users, loading } = props;
  if (users === null && loading) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <FlexContainer>{users !== null && <Card users={users} />}</FlexContainer>
    </React.Fragment>
  );
}

export default Dashboard;
