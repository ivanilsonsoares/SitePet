import { Index } from './Components/Pages/Index/Index';
import { Sobre } from './Components/Pages/Sobre/Sobre';
import {  Route, BrowserRouter} from 'react-router-dom';
//import history from './history';
function App() {
  return (
      <BrowserRouter>
        <Route exact path="/">
          <Index></Index>
        </Route>
        <Route exact path="/sobre">
          <Sobre></Sobre>
        </Route>
      </BrowserRouter>
  );
}

export default App;
