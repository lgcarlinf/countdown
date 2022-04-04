import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {FaPinterest} from 'react-icons/fa'
import {IoLogoInstagram} from 'react-icons/io'

const Footer = () => {
  return (
    <div className='footer'>
        
        <div className='container'>
        <AiFillFacebook className='icon'/>
        <FaPinterest className='icon'/>
        <IoLogoInstagram className='icon'/>
        </div>
       {/*  <img className="pattern" src={pattern} alt="" /> */}
        </div>
  )
}

export default Footer