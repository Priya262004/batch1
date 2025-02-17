import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "../src/styles/globally.css"
import Cbc from './component/Cbc.jsx'
import Fbc from './component/Fbc.jsx'
import Parent from './props/Parent.jsx'
import State from './state/State.jsx'
import MainComponent from './state/MainComponent.jsx'
import DefaultPropsExample from './props/DefaultPropsExample.jsx'
import Inline from './styles/Inline.jsx'
import Exernal from './styles/External.jsx'
// import Comp1 from './styles/Comp1.jsx'
// import HelloApp from './styles/HelloApp.jsx'
import Ref from './useRef/Ref.jsx'
import List from './list-keys/List.jsx'
import CompA from './useContext/CompA.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc/>
    <Fbc/> */}
    {/* <Parent/> */}
    {/* <State/> */}
    {/* <MainComponent/>
    <DefaultPropsExample/> */}
    {/* <Inline/> */}
    {/* <Comp1/> */}
    {/* <HelloApp/> */}
    {/* <Exernal /> */}
    {/* <Ref/> */}
    {/* <List /> */}
    <CompA/>
  </StrictMode>,
)
