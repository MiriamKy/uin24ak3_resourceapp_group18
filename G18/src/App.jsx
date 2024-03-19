import { useState } from 'react'
import './App.css'
import Resources from './components/Resources'
import Layout from './components/Layout'


import { Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Layout>
    <Routes>
      <Route path='/' element={<Resources urlCategory={null} />}/>
      <Route path='/html' element={<Resources urlCategory={"html"} />}/>
      <Route path='/css' element={<Resources urlCategory={"css"} />}/>
      <Route path='/javascript' element={<Resources urlCategory={"javascript"}/>} />
      <Route path='/react' element={<Resources urlCategory={"react"}/>}/>
      <Route path='/sanity' element={<Resources urlCategory={"headless-cms"}/>}/>
    </Routes>
    </Layout>
    
  )
}

export default App
