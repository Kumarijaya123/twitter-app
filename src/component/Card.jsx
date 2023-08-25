/* eslint-disable no-unused-vars */
import React from 'react'
import './Card.css'
import profile from '../assets/profile.png'


function Card() {
  return (
    <div className='userbox'>
     <div className='userbox1'> 
     <img src={profile} alt='image' className='profile-img'/>
     <span className='username'>Kumari Jaya</span>
     <span className='minor'>#Developer</span>
     <div className='line'>
     </div>
     <span className='number'>40</span> <span className='number2'>1M</span>
     <br/>
     <span className='following'>Following</span>
     <span className='follower'>Followers</span>
     </div>
     <div className='line1'>
     </div>
     <span className='msg'>Find new people</span>
    
    </div>
    
   
  )
}

export default Card