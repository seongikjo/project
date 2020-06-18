import React from 'react'
import { Route } from 'react-router-dom'
import PostListPage from './pages/PostListPage'
import LoginPage from './pages/Login'
import RegisterPage from './pages/register'
import WritePage from './pages/write'
import PostPage from './pages/PostPage'
import CardPage from './pages/card'
import { Helmet } from 'react-helmet-async'

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>

      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={CardPage} path="/card" />
    </>
  )
}
export default App
