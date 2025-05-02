import React from 'react'
import Header from '../Common/Header'
import { SideBar } from './Home'
import Footer from '../Common/Footer'

const Allrecipes = () => {
  return (
    <div>
      <Header/>
      <SideBar pathname='/allrecipes/'/>
      <Footer/>
    </div>
  )
}

export default Allrecipes
