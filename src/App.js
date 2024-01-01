import React from 'react';
import './App.css';
import Page from './component/page/Page';
import { Link } from 'react-scroll';

function App() {
  return (
    <>
    <div className='back_to_top'>
      <Link to='/' spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} ><i class="fa-sharp fa-solid fa-arrow-up"></i></Link>
    </div>
   <Page/>
    </>
  );
}

export default App;
