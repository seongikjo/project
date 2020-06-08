import React from 'react'
import LoginHeader from '../components/login/header'
import LoginBody from '../components/login/body'
import LoginFooter from '../components/login/footer'

import GlobalStyle from '../components/shared/global-styles'

import Container from '../components/shared/container'

const Login = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <LoginHeader />
        <LoginBody />
        <LoginFooter />
      </Container>
    </div>
  )
}

export default Login
