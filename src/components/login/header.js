import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import { FaReact } from 'react-icons/fa'
import Text from '../shared/text'

function LoginHeader({ title = '로고' }) {
  return (
    <Container textAlign>
      <FaReact size="130" />
      <Text>{title}</Text>
    </Container>
  )
}

LoginHeader.propTypes = {
  title: PropTypes.string,
}

export default LoginHeader
