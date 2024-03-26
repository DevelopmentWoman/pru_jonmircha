import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { ApiJson } from './ApiJson'
import { AppMusic } from './AppMusic'
// import { AppLenguajes } from './AppLenguajes'
// import './index.css'
// import { AppTodo } from './AppTodo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppLenguajes/> */}
    {/* <AppTodo/> */}
    {/* <ApiJson/> */}
    <AppMusic/>
  </React.StrictMode>,
)
