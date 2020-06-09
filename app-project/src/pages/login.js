import React from 'react'
import AuthTemplate from '../components/auth/AuthForm'
// import AuthForm from '../components/auth/AuthForm'
import LoginForm from '../containers/auth/LoginForm'

const Login = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  )
}

export default Login
