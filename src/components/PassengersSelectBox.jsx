
import '../pages/Home.css';

function PassengersSelectBox(props){

  return(
    <div className='passengersSelectBox'>
        <form action=''>
          <label htmlFor='start'>{props.labelText}</label><br/>
          <input className='passengerInputBox' type='number' min='0' max='7' id='start' name='start'></input>
        </form>
    </div>
  );
}

export default PassengersSelectBox;
