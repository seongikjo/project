import React from 'react'
import { Route } from 'react-router-dom'

import PostList from './pages/postlist'
import Post from './pages/post'
import Login from './pages/login'
import Register from './pages/register'
import Write from './pages/write'

const App = () => {
  return (
    <>
      <Route component={PostList} path={['@:username', '/']} exact />
      <Route component={Post} path="/post" />
      <Route component={Write} path="/write" />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
    </>
  )
}

export default App
