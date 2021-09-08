import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/vuelos'>
          You're at vuelos path
          <Link to='/'>Go to home</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
