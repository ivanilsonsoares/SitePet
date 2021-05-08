import { Index } from './Components/Pages/Index/Index';
import { Sobre } from './Components/Pages/Sobre/Sobre';
import { Projects } from './Components/Pages/Projects/Projects';
import { Team } from './Components/Pages/Team/Team'
import { Contacts} from './Components/Pages/Contacts/Contacts'
//import history from './history';
import { Route, BrowserRouter } from 'react-router-dom';
import { AdmIndex } from './Components/Pages/Adm/Index/AdmIndex';
function App() {
  return (
    <BrowserRouter>
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
      <Route exact path="/contacts">
        <Contacts></Contacts>
      </Route>
      <Route exact path="/adm/index">
        <AdmIndex></AdmIndex>
      </Route>
    </BrowserRouter>

  );
}

export default App;
