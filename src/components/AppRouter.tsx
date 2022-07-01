import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Users from '../pages/Users'
import Error from '../pages/Error';

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Users />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter