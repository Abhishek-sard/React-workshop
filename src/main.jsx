import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Components/Greeting.jsx'
import State from './Components/State.jsx'
import Props from './Components/Props.jsx'
import StateProps from './Components/StateProps.jsx'
import  UseState  from './Components/StateManagement/UseState.jsx'
import UseContext from './Components/StateManagement/UseContext.jsx'
import UseEffect from './Components/HookComponents/UseEffect.jsx'
import UseRef from './Components/HookComponents/UseRef.jsx'
import CustomHook from './Components/HookComponents/CustomHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting/>
    <State/>
    <Props/>
    <StateProps/>
    <UseState/>
    <UseContext/>
    <UseEffect/>
    <UseRef/>
    <CustomHook/>
  </StrictMode>
  
);
