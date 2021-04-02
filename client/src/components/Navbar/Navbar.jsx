import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import GamePlace from '../GamePlace/GamePlace';
import MainPage from '../MainPage/MainPage';
import ModalWindow from '../ModalWindow/ModalWindow';
import Registration from '../User/Registr';

const Navbar = () => {
 

  return ( 
    <>
    {/* <!-- ======= Header ======= --> */}
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><a href="index.html">Gp<span>.</span></a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
          <li><a className="nav-link scrollto" href="#about">Sign Up</a></li>
          <li><a className="nav-link scrollto" href="#services">Sign In</a></li>


          <li><Link  className="nav-link scrollto" to="test">Test</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

      <Link to="/game" className="get-started-btn scrollto">Start Game</Link>

    </div>
  </header>
  {/* <!-- End Header --> */}

  {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">

      
        <Switch>

          <Route exact path="/">
            <MainPage />
          </Route>

          <Route exact path="/game">
            <GamePlace />
          </Route>

          <Route exact path="/test">
            <ModalWindow />
          </Route>

        </Switch>
      

      

    </div>
  </section>
  {/* <!-- End Hero --> */}

  <main id="main"></main>

  
    </>
   );
}
 
export default Navbar;
