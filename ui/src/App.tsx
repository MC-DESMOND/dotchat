import { useEffect, useState } from 'react'
import './App.css'
import BaseHOC from './addons/HOC'
import { Div, Main } from './addons/csml'
import Glow from './addons/designer/glow'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/home'
import CWind from './addons/cwind'
import { DocumentAddStyle } from './addons/css'
import Auth from './auth/auth'
import Alerter from './addons/alerter'
import { rgba } from './addons/anys'
function App() {
  const base = new BaseHOC()
  const gcolor = "rgba(0, 197, 223, 0.49)"
  const glow = new Glow({opacity:0.3,position:[100,30],color:gcolor,speed:10})
  glow.percentify({percent:80,sizeOnStop:600,stop:400})
  const main = new BaseHOC({Component:Main})
  DocumentAddStyle({
    "body":{
      ...CWind.Square("doc"),
      overflow:"hidden",
      position:"relative",
      backgroundColor:"black"
    },
    "#root":{
      ...CWind.Square("doc")
    }
  })
  base.rootdata.save("gcolor",gcolor)
  const alerter = new Alerter({button:{backgroundColor:rgba(73, 146, 180, 0.14),fontWeight:"bold", border:"1px solid "+ rgba(73, 141, 180, 0.3)}})
  
  useEffect(()=>{
    alerter.initLnrs("base")
    // alerter.alert('df')
    // console.log(alerter.control.Element)
  })
  return (
    <base._  {...CWind.Square("%")} overflow='hidden'>
      <alerter._></alerter._>
      <glow._></glow._>
      <main._ {...CWind.Square("%")} overflow='hidden'>
        <BrowserRouter>
            <Routes>
                <Route path='/home' Component={Home}/>
                <Route path='/' Component={Auth}/>
            </Routes>
        </BrowserRouter>
      </main._>
    </base._>
  )
}

export default App
