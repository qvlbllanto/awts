import React, {useState, useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Design
import '../src/design/css.css';
import 'bootstrap/dist/css/bootstrap.css';

//Navigation
import Nav from './pages/Nav';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Footer from './pages/Footer';


function App() {
  const [name, setName] = useState('Login');
  const [signup, setSign] = useState(false);
  const [page, setPage] = useState('');
  useEffect(()=>{
    let loc = window.location.href.split("/");
    console.log(loc);
    if(page === "SignUp"){
      setSign(true);
    }else{
      setSign(false);
    }
  });
  return (
    <div class="App">
    <Router>
      <Nav name={name} setN={setName} sign={signup} setsign={setSign} />
      <Switch>
        <Route exact path = "/" render={(props) => (<Home {...props} name={name} p={setPage}/>)}/>
        <Route exact path = "/Login" render={(props) => (<Login {...props} name={name} p={setPage}/>)}/>
        <Route exact path = "/SignUp" render={(props) => (<SignUp {...props} name={name} p={setPage}/>)}/>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
