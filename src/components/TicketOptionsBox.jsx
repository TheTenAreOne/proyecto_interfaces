
import '../pages/Home.css';
import OneOptionButton from './OneOptionButton';
import SearchButton from './SearchButton';
import CitySelectBox from './CitySelectBox';
import DateSelectBox from './DateSelectBox';
import PassengersSelectBox from './PassengersSelectBox'
import React, { useState } from 'react';
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>


function TicketOptionsBox(props){

  const [transportType, setTransportType] = useState('Vuelo');
  const [ticketType, setTicketType] = useState('Ida');
  const [cityOrigin, setCityOrigin] = useState('');
  const [cityDestinaion, setCityDestination] = useState('');
  const [dateDeparture, setDateDeparture] = useState('');
  const [dateArrival, setDateArrival] = useState('');

  return(
    <div>
      <div className='row'>
        <div className='col-6'>
          <OneOptionButton onClick={(data) => setTransportType(data) } ticketInfo={transportType} buttonText='Vuelo'/>
        </div>
        <div className='col-6'>
          <OneOptionButton onClick={(data) => setTransportType(data) } ticketInfo={transportType} buttonText='Bus'/>
        </div>
      </div>
      <div className='container ticketOptionsBox'>
        <div className='row'>
          <div className='col'>
            <OneOptionButton onClick={(data) => setTicketType(data) } ticketInfo={ticketType} buttonText='Ida'/>
          </div>
          <div className='col'>
            <OneOptionButton onClick={(data) => setTicketType(data) } ticketInfo={ticketType} buttonText='Ida y Vuelta'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-5'>
            <CitySelectBox labelText='Origen'/>
          </div>
          <div className='col-2'>
            <div className='cityArrow'>&#129050;</div>
          </div>
          <div className='col-5'>
            <CitySelectBox labelText='Destino'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <DateSelectBox labelText='Fecha ida'/>
            <DateSelectBox labelText='Fecha vuelta'/>
          </div>
          <div className='col-6'>
            <PassengersSelectBox labelText='Pasajeros' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <SearchButton buttonText='Buscar'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketOptionsBox;
