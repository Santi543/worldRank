import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from '../components/Container'
import CountryDetailContainer from '../components/CountryDetailContainer'
import Layout from './Layout'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Container/>}/>
            <Route path='/countries/:id' element={<CountryDetailContainer/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router