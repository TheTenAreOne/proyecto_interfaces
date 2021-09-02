
import '../pages/Home.css';

function DateSelectBox(props){

  return(
    <div className='dateSelectBox'>
        <form action=''>
          <label for='start'>{props.labelText}</label><br/>
          <input type='date' id='start' name='start'></input>
        </form>
    </div>
  );
}

export default DateSelectBox;
