import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import MainNavbar from '../components/MainNavbar';
import OneOptionButton from '../components/OneOptionButton';
import TicketOptionsBox from '../components/TicketOptionsBox';
import './Home.css'
function Home() {
  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <MainNavbar/>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <OneOptionButton buttonText='Vuelo'/>
        </div>
        <div className='col-6'>
          <OneOptionButton buttonText='Bus'/>
        </div>
      </div>
      <div className='row'>
        <TicketOptionsBox/>
      </div>
    </div>
  );
}

export default Home;
