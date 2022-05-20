import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/dashboard/Dashboard';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

class App extends React.Component {
  render() {

    return <BrowserRouter><Header /><Dashboard/> <Footer /></BrowserRouter>

  }
}
export default App;
