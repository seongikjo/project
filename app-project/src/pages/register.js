import React from 'react'
import AuthTemplate from '../components/auth/AuthTemplate'
// import AuthForm from '../components/auth/AuthForm'
import RegisterForm from '../containers/auth/RegisterForm'

const Register = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  )
}

export default Register
