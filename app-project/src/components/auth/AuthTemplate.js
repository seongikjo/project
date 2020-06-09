import React from 'react'
import styled from 'styled-components'
import palette from '../../lib/styles/palette'
import { Link } from 'react-router-dom'
import Text from '../shared/text'
import GlobalStyles from '../shared/global-styles'

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 360px;
  background: #fff;
  border-radius: 2px;
`

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <GlobalStyles />
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">
            <Text textAlign block margin="10px 0 0 0">
              LOGIN
            </Text>
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  )
}

export default AuthTemplate
