import { Route, Router } from 'react-router-dom';
import { Index } from './Components/Pages/Index/Index';
import { Sobre } from './Components/Pages/Sobre/Sobre';
import history from './history';
function App() {
  return (
    
      <Router history={history}>
        <Route exact path="/">
          <Index></Index>
        </Route>
        <Route exact path="/sobre">
          <Sobre></Sobre>
        </Route>
      </Router>
    
    
  );
}

export default App;
