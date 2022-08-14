import styled from "styled-components";

import SignUpForm from "../SignUpForm";
import SignInForm from "../SignInForm";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;
`;

export default Authentication;
