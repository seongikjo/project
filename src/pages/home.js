import React from 'react'
import HomeHeader from '../components/home/header'
import HomeBody from '../components/home/body'
import HomeFooter from '../components/home/footer'

import GlobalStyle from '../components/shared/global-styles'

import Container from '../components/shared/container'

const Login = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <HomeHeader />
        <HomeBody />
        <HomeFooter />
      </Container>
    </div>
  )
}

export default Login
