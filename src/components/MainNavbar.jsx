
import '../pages/Home.css'

function MainNavbar(){
  return(
    <div>
      <nav className='navbar'>
        <div className='container-fluid'>
          <a className="navbar-brand appNameBar" href="/">FlytoFasto &#128747;</a>
          <i class="fas fa-plane"></i>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
