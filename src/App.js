import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  country = "in";
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="general" country={this.country} category="General" headlineTitle=""/>} />
          <Route exact path='/Business' element={<News key="business" country={this.country} category="Business" headlineTitle="in BUSINESS"/>} />
          <Route exact path='/Entertainment' element={<News key="entertainment" country={this.country} category="Entertainment" headlineTitle="in ENTERTAINMENT"/>} />
          <Route exact path='/Health' element={<News key="health" country={this.country} category="Health" headlineTitle="in HEALTH"/>} />
          <Route exact path='/Science' element={<News key="science" country={this.country} category="Science" headlineTitle="in SCIENCE"/>} />
          <Route exact path='/Sports' element={<News key="sports" country={this.country} category="Sports" headlineTitle="in SPORTS"/>} />
          <Route exact path='/Tech' element={<News key="technology" country={this.country} category="Technology" headlineTitle="in TECHNOLOGY"/>} />
        </Routes>
      </>
    )
  }
}