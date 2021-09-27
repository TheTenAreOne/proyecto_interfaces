
import '../pages/Home.css'

function SearchButton(props){

  return(
    <div>
      <button type="button" className={"btn btn-primary searchButton"}>{props.buttonText}</button>
    </div>
  );
}


export default SearchButton;
