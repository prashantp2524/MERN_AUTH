import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, Router, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import ProfileScreen from './screens/ProfileScreen.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route index={true} path='/login' element={<LoginScreen />} />
      <Route index={true} path='/register' element={<RegisterScreen />} />
      {/* private routes */}
      <Route path='' element={<PrivateRoute />}>
        <Route index={true} path='/profile' element={<ProfileScreen />} />
      </Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <RouterProvider router={router} />

  </Provider>
)
