// https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb
import '../pages/Home.css';

function TicketInfoBox(props) {
  console.log(props);
  return (
    <a className='ticketButtonBox' href='/'>
    <div className="container ticketBox">
      <div className='row'>
        <div className='col-5 ticketCity'>{props.ticketInfo.cityOrigin}</div>
        <div className='col-2'>
          <div className='ticketArrow'>&#129050;</div>
        </div>
        <div className='col-5 ticketCity'>{props.ticketInfo.cityDestination}</div>
      </div>
      <div className='row'>
        <div className='col-4'>{props.ticketInfo.takeoff}</div>
        <div className='col-4'>Escalas: {props.ticketInfo.scales}</div>
        <div className='col-4'>{props.ticketInfo.landing}</div>
      </div>
      <div className='row'>
        <div className='ticketPrice'>${props.ticketInfo.price}</div>
      </div>
    </div>
    </a>
  )
}

export default TicketInfoBox;
