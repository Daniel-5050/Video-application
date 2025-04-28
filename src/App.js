
import './App.css';
import React, { Component } from 'react';
import Movies from './components/movies';
import { BrowserRouter as  Router, Routes,Link ,Route, useNavigate,} from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/register';







export default class App extends Component {
  render() {
    return (
        <React.Fragment>

<NavBar/>
      <main className='container'>

       
       
       
      <Routes>
      

      
      <Route path='register'element={<RegisterForm/>}/>
      <Route path='login'element={<LoginForm/>}/>
      <Route path='/movies/:id' element={<MovieForm/>}/>
      <Route path="customers" element={ <Customers/> } />
      <Route path="rentals" element={ <Rentals/> } />
      <Route path="/movies" element={ <Movies/> } />
      <Route path="*" element={ <Movies/> } />
      
      </Routes>
        
      </main>
        </React.Fragment>
  
      
    )
  }
}

