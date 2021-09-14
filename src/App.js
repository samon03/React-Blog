import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './App.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import Add from './components/Add/Add';


function App() {
  return (
    <>
      <BrowserRouter>
         <Navbar/>
         <Switch>
           <Route exact path='/' component={Blog} />
           <Route exact path='/add' component={Add} />
           <Redirect to='/'/>
         </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
