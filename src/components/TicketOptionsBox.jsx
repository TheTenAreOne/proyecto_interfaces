
import '../pages/Home.css';
import OneOptionButton from './OneOptionButton';
import CitySelectBox from './CitySelectBox';
import DateSelectBox from './DateSelectBox';
import React, { useState } from 'react';

function TicketOptionsBox(props){

  const [transportType, setTransportType] = useState('Vuelo');
  const [ticketType, setTicketType] = useState('Ida');
  const [cityOrigin, setCityOrigin] = useState('');
  const [cityDestinaion, setCityDestination] = useState('');
  const [dateDeparture, setDateDeparture] = useState('');
  const [dateArrival, setDateArrival] = useState('');

  return(
    <div>
      <div className='row seeBack'>
        <div className='col-6'>
          <OneOptionButton onClick={(data) => setTransportType(data) } ticketInfo={transportType} buttonText='Vuelo'/>
        </div>
        <div className='col-6'>
          <OneOptionButton onClick={(data) => setTransportType(data) } ticketInfo={transportType} buttonText='Bus'/>
        </div>
      </div>
      <div className='container ticketOptionsBox seeBack'>
        <div className='row'>
          <div className='col'>
            <OneOptionButton onClick={(data) => setTicketType(data) } ticketInfo={ticketType} buttonText='Ida'/>
          </div>
          <div className='col'>
            <OneOptionButton onClick={(data) => setTicketType(data) } ticketInfo={ticketType} buttonText='Ida y Vuelta'/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <CitySelectBox labelText='Origen'/>
          </div>
          <div className='col'>
            <CitySelectBox labelText='Destino'/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <DateSelectBox labelText='Fecha ida'/>
          </div>
          <div className='col'>
            <DateSelectBox labelText='Fecha vuelta'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketOptionsBox;
