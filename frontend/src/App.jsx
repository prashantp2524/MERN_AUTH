import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Container from 'react-bootstrap/esm/Container'
// import HomeScreen from './screens/HomeScreen'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () =>
{
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className='my-3'>
        <Outlet />

      </Container>

    </>
  )
}

export default App