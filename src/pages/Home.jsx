import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import MainNavbar from '../components/MainNavbar';
import OneOptionButton from '../components/OneOptionButton';
import TicketOptionsBox from '../components/TicketOptionsBox';
import TicketsDisplayBox from '../components/TicketsDisplayBox';
import './Home.css'
function Home() {
  return(
    <div className='container'>
      <div className='row'>
        <div className='col' id='MainNavbar'>
          <MainNavbar/>
        </div>
      </div>
      <div className='row' id='TicketOptionsBox'>
        <TicketOptionsBox/>
      </div>
      <div className='row' id='TicketsDisplayBox'>
        <TicketsDisplayBox />
      </div>
    </div>
  );
}

export default Home;
