
import React, {useState} from 'react';
import '../pages/Home.css';
import TicketInfoBox from '../components/TicketInfoBox';

function TicketsDisplayBox(props){

  const [tickets, setTickets] = useState([
    {
      "cityOrigin": "Cali", "cityDestination": "Bogota", "price": "150.000", "takeoff": "7:00", "landing": "09:00",
      "airline": "Vuelipatos", "date": "28/09/2021", "scales": "0",
    },
    {
      "cityOrigin": "Cali", "cityDestination": "Bogota", "price": "172.000", "takeoff": "6:00", "landing": "08:00",
      "airline": "Flysheep", "date": "28/09/2021", "scales": "0",
    },
    {
      "cityOrigin": "Cali", "cityDestination": "Bogota", "price": "180.000", "takeoff": "7:30", "landing": "09:30",
      "airline": "Ela-bion", "date": "28/09/2021", "scales": "0",
    },
  ]);

  return(
    <div className='container ticketsDisplayBox'>
      {tickets.map((ticketObj, index) => (
        <TicketInfoBox ticketInfo={ticketObj} key={index}/>
      ))};
    </div>
  );
}

export default TicketsDisplayBox;
