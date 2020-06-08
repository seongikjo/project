import React from 'react'

import Container from '../shared/container'
import Input from '../shared/input'
import Button from '../shared/button'
import Text from '../shared/text'

const LoginBody = () => {
  return (
    <Container>
      <Text margin="0 0 6px 0" block>
        아이디
      </Text>
      <Input placeholder="아이디를 입력해주세요." type="text" name="id" />
      <Text margin="0 0 6px 0" block>
        비밀번호
      </Text>
      <Input
        placeholder="비밀번호를 입력해주세요."
        type="password"
        name="password"
      />
      <Button margin="10px 0" full color="mint" fontSize="16" padding="15px 0">
        로그인
      </Button>
    </Container>
  )
}

export default LoginBody
