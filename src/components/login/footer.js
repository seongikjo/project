import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import Signup from '../../pages/signup'

import Container from '../shared/container'
import Button from '../shared/button'
import Text from '../shared/text'
// import COLORS from '../shared/color'

const LoginFooter = () => {
  return (
    <Container textAlign>
      <Button type="button" width="50">
        <FaGoogle size="40" />
      </Button>
      <Button width="50px;">
        <FaFacebook size="40" />
      </Button>
      <Text block>
        회원가입이 아니신가요?<Signup> 회원가입</Signup>
      </Text>
    </Container>
  )
}

export default LoginFooter
