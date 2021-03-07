import React from "react";
import { User, Users } from "../../containers/dashboard/types";
import { CardLayout, Container, TextValue } from "../Styles/styles";

interface Props {
  users: Users;
}

function Card(props: Props) {
  const { users } = props;
  return (
    <React.Fragment>
      {users.data.map((user: User) => {
        return (
            <CardLayout key={user.id}>
              <img src={user.avatar} alt="Avatar" style={{ width: "100%" }} />
              <Container>
                <TextValue>
                  <span>Name: </span>
                  <b>{user.first_name + " " + user.last_name}</b>
                </TextValue>
                <TextValue>
                  <span>Email: </span>
                  <b>{user.email}</b>
                </TextValue>
              </Container>
            </CardLayout>
        );
      })}
    </React.Fragment>
  );
}

export default Card;
