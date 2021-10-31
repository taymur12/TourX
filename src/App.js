import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Pages/Shared/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page404 from './Components/Pages/NotFound/Page404';
import Footer from './Components/Pages/Footer/Footer';
import Login from './Components/Pages/Login/Login';
import AuthProvider from './Components/ContextApi/AuthProvider';
import BookingDetails from './Components/Pages/BookingDetails/BookingDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyOrders from './Components/Pages/MyOrders/MyOrders';
import ManageAllOrder from './Components/Pages/ManageAllOrder/ManageAllOrder';



function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <PrivateRoute path="/myorders">
          <MyOrders></MyOrders>
        </PrivateRoute>
        <Route path="/login">
       <Login></Login>
        </Route>
        <PrivateRoute path="/book/:serviceId">
          <BookingDetails></BookingDetails>
        </PrivateRoute>
        <PrivateRoute path="/manageorder">
          <ManageAllOrder></ManageAllOrder>
        </PrivateRoute>
        <Route path="*">
          <Page404></Page404>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
      </AuthProvider>
    </div>
  );
}

export default App;
