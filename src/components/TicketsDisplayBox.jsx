
import '../pages/Home.css';
import TicketInfoBox from '../components/TicketInfoBox';

function TicketsDisplayBox(props){
  return(
    <div className='container ticketsDisplayBox'>
      <div>
        <TicketInfoBox />
      </div>
    </div>
  );
}

export default TicketsDisplayBox;
