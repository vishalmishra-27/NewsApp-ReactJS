import './App.css';

import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'

import Navbar from './Components/Navbar';
import News from './Components/News';


export default class App extends Component {
  country = "in";
  state = {
    progress: 0
  }

  setProgress = (progressvalue) => {
    this.setState({ progress: progressvalue })
  }
  render() {
    return (
      <>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} key="general" country={this.country} category="General" headlineTitle="" />} />
          <Route exact path='/Business' element={<News setProgress={this.setProgress} key="business" country={this.country} category="Business" headlineTitle="in BUSINESS" />} />
          <Route exact path='/Entertainment' element={<News setProgress={this.setProgress} key="entertainment" country={this.country} category="Entertainment" headlineTitle="in ENTERTAINMENT" />} />
          <Route exact path='/Health' element={<News setProgress={this.setProgress} key="health" country={this.country} category="Health" headlineTitle="in HEALTH" />} />
          <Route exact path='/Science' element={<News setProgress={this.setProgress} key="science" country={this.country} category="Science" headlineTitle="in SCIENCE" />} />
          <Route exact path='/Sports' element={<News setProgress={this.setProgress} key="sports" country={this.country} category="Sports" headlineTitle="in SPORTS" />} />
          <Route exact path='/Tech' element={<News setProgress={this.setProgress} key="technology" country={this.country} category="Technology" headlineTitle="in TECHNOLOGY" />} />
        </Routes>
      </>
    )
  }
}