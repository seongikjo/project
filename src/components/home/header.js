import React from "react";
// import styled from "styled-components";

import Container from "../shared/container";
import Element from "../shared/element";
import Quick from "../shared/quick";
import Logo from "../shared/logo";

function HomeHeader() {
  return (
    <Container textAlign>
      <Element>
        <Quick>로그인 회원가입</Quick>
        <Logo></Logo>
      </Element>
    </Container>
  );
}

export default HomeHeader;
