/* eslint-disable no-unused-vars */
import { useState } from 'react'
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
                    
                }}
                
            />
             <div className="text-post">
             Post
             </div>
             <button className='photo'> <i className="bi bi-image-fill mr-2" style={{ color: 'lightgreen', fontSize: '20px', textShadow: '0px 0px 8px rgba(0, 255, 0, 0.9)'}}>
              </i>Photo</button>
             <button className='video'> <i className="bi bi-camera-video-fill mr-2" style={{ color: 'blue', fontSize: '20px', textShadow: '0px 0px 8px rgba(57, 89, 221, 0.9)'}}>
              </i>Video</button>
              <button className='attachment'> <i className="bi bi-upload mr-2" style={{ color: '#e0412c', fontSize: '20px', textShadow: '0px 0px 8px rgba(240, 139, 139, 0.9)'}}>
              </i>Attachment</button>
              <button className='schedule'> <i className="bi bi-calendar2-event-fill mr-2" style={{ color: '#eabb24', fontSize: '20px', textShadow: '0px 0px 8px rgba(242, 203, 203, 0.9)'}}>
              </i>Schedule</button>
        </div>
    )
}

export default Card2
