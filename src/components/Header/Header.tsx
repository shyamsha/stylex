import React from "react";
import { HeaderBar, Title, Button } from "../Styles/styles";

interface Props {
  usersHandle: () => void;
}

export default function Header(props: Props) {
  const { usersHandle } = props;
  return (
    <React.Fragment>
      <HeaderBar>
        <Title>StyleX</Title>
        <Title>
          <Button onClick={() => usersHandle()}>Get Users</Button>
        </Title>
      </HeaderBar>
    </React.Fragment>
  );
}

