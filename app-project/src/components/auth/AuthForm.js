import React from 'react'
import styled from 'styled-components'
import palette from '../../lib/styles/palette'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import Text from '../shared/text'
import GlobalStyles from '../shared/global-styles'

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`

const StyledInput = styled.input`
font-size: 1rem;
border: 1px solid ${palette.gray[10]};
border-radius: 4px;
padding: .5rem 0 .5rem .5rem;
box-sizing: border-box;
outline: none;
margin: .5rem 0;
width: 100%;
&:focus {
    color: $oc-teal-7;
    border: 1px solid ${palette.gray[7]};
}
& + & {
    margin-top: 1rem'
}
`

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`

const textMap = {
  login: '로그인',
  register: '회원가입',
}

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type]
  return (
    <AuthFormBlock>
      <GlobalStyles />
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        {type === 'register' && (
          <StyledInput
            autoComplete="usernick"
            name="usernick"
            placeholder="닉네임을 입력해주세요"
            // type="text"
            onChange={onChange}
            value={form.usernick}
          />
        )}
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="이메일을 입력해주세요"
          onChange={onChange}
          // value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          // type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호를 다시 입력해주세요"
            // type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">
            <Text textAlign block margin="10px 0 0 0">
              회원이 아니신가요? 회원가입
            </Text>
          </Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  )
}

export default AuthForm
