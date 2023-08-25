
import { useState } from 'react';
import Card from './component/Card.jsx';
import './App.css';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import 'bootstrap-icons/font/bootstrap-icons.css';
import list from './list.json';

import Card2 from './component/Card2.jsx';

function App() {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
    <div className='flex items-center'>
      <i
        className="bi bi-twitter"
        style={{ color: '#53acfa', fontSize: '36px', marginLeft: '70px' }}
      ></i>
      <input
        type='text'
        placeholder='# Explore'
        value={searchText}
        onChange={handleChange}
        style={{
          color: '#c8ccc8',
          marginLeft: '138px',
          marginTop: '7px',
          position: 'absolute'
        }} />
      <div className='ml-auto mr-20'>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className='bg-[#3d4e56] text-white p-2.5 px-7 text-lg rounded-lg flex items-center'
        >
          <i className="bi bi-person-circle mr-3"></i>
          <span className="mr-3">User Profile</span>
          {!isOpen ? (
            <AiOutlineCaretDown /> // Caret icon on the right
          ) : (
            <AiOutlineCaretUp /> // Caret icon on the right
          )}
        </button>
        {isOpen && (
          <div className='bg-[#3d4e56] text-white absolute top-20 flex flex-col items-start rounded-lg p-2 px-14'>
            {list.map((item, i) => (
              <div className='flex px-2 justify-between hover:bg-gray-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4' key={i}>
                <h3>{item.profile}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className='flex'>
        <Card/>
        <div className='flex1'>
        <Card2/>
        </div>
      </div></>
  );
}

export default App;
