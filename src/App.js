import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SimpleCard from './components/Jumbotron/Jumbotron';
import ImageGridList from './components/Cards/Cards'
import Navbar from './components/Navbar/navbar'

class App extends Component {
  
  render() {
    return (
   <div>
     <Navbar />
     <SimpleCard />
     <ImageGridList />
   </div>
    )
};
};
export default App;