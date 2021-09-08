
import '../pages/Home.css'

function OneOptionButton(props){

  return(
    <div>
      {
        props.ticketInfo === props.buttonText ?
        <button type="button" className={"btn btn-primary oneOptionButtonBig"} onClick={()=>props.onClick(props.buttonText)} >{props.buttonText}</button>
        :
        <button type="button" className={"btn btn-primary oneOptionButtonBig unselectedButton"} onClick={()=>props.onClick(props.buttonText)}>{props.buttonText}</button>
      }
    </div>
  );
}

export default OneOptionButton;
