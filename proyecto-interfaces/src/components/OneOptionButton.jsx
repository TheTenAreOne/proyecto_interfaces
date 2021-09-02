
import '../pages/Home.css'

function OneOptionButton(props){

  return(
    <div>
      <button type="button" class="btn btn-primary oneOptionButtonBig">{props.buttonText}</button>
    </div>
  );
}

export default OneOptionButton;
