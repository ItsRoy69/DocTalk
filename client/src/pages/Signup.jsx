import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignupForm from '../components/SignupForm'

function Signup() {
  return (
    <div style={{display:"grid",rowGap:"5vw"}}>
      <Navbar/>
      <SignupForm/>
      <Footer/>
    </div>
  )
}

export default Signup
