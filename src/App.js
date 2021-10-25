import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound'
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import AllServices from './Components/AllServices/AllServices';
import Blog from './Components/Blog/Blog';
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/banner">
          <Banner></Banner>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/allservices">
          <AllServices></AllServices>
        </Route>

        <Route path="/blog">
          <Blog></Blog>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
