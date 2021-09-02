import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          You're at home path
          <Link to='/vuelos'>Go to vuelos</Link>
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
