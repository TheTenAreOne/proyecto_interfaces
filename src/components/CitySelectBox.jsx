
import '../pages/Home.css';

function CitySelectBox(props){

  return(
    <div className='citySelectBox'>
        <form action=''>
          <label htmlFor='cityOrigin'>{props.labelText}</label><br/>
          <input type='text' id='cityOrigin' name='origin'></input>
        </form>
    </div>
  );
}

export default CitySelectBox;
