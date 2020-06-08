import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Text from '../shared/text'

function SignHeader({ title = '회원가입' }) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  )
}

Headers.propTypes = {
  title: PropTypes.string,
}

export default SignHeader
