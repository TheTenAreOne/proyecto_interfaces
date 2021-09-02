
import '../pages/Home.css';
import OneOptionButton from './OneOptionButton';
import CitySelectBox from './CitySelectBox';
import DateSelectBox from './DateSelectBox';


function TicketOptionsBox(){

  return(
    <div className='container ticketOptionsBox'>
      <div className='row'>
        <div className='col'>
          <OneOptionButton buttonText='Ida'/>
        </div>
        <div className='col'>
          <OneOptionButton buttonText='Ida y Vuelta'/>
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
  );
}

export default TicketOptionsBox;
