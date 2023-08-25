/* eslint-disable no-unused-vars */
import {useState} from 'react'
import './Card2.css'
function Card2() {
    const [searchText, setSearchText] = useState('')

    const handleChange = (e) => {
        setSearchText(e.target.value);
      };
    
  return (
    <div className='box'>
    <input
        type='text1'
        placeholder='Create New Post'
        value={searchText}
        onChange={handleChange}
        style={{
          color: '#c2c6c2',
          marginLeft: '18px',
         marginTop:'-17px'
          
        }} />

    </div>
  )
}

export default Card2