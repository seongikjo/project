import React from 'react'
import SignHeader from '../components/signup/header'
import SignBody from '../components/signup/body'
import SignFooter from '../components/signup/footer'

import globalStyle from '../components/shared/global-styles'

import Container from '../components/shared/container'

const Login = () => {
  return (
    <div>
      <globalStyle />
      <Container>
        <SignHeader />
        <SignBody />
        <SignFooter />
      </Container>
    </div>
  )
}

export default Login
