import React from 'react'
import PrimarySearchAppBar2 from '../nav'
import Explore from './explore'
import Footer from './Footer'
import Navbar from './main'

export default function Maincombo() {
  return (
    <div style={{backgroundColor:'black'}}>
        <PrimarySearchAppBar2/>
      <Explore/>
      <Navbar/>
      <Navbar/>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  )
}
