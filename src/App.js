import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Pages/Shared/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page404 from './Components/Pages/NotFound/Page404';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="*">
          <Page404></Page404>
        </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
