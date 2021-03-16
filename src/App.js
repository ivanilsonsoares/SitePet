import { Route, Router } from 'react-router-dom';
import { Index } from './Components/Pages/Index/Index';
import { Sobre } from './Components/Pages/Sobre/Sobre';
import { Projects } from './Components/Pages/Projects/Projects';
import {Team} from './Components/Pages/Team/Team'
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
        <Route exact path="/projects">
          <Projects></Projects>
        </Route>
        <Route exact path="/team">
          <Team></Team>
        </Route>
      </Router>
    
    
  );
}

export default App;
