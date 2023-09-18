import './App.css';

import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

import Navbar from './Components/Navbar';
import News from './Components/News';


const App = () => {
  const country = "in";
  const [progress, setProgress] = useState(0);

  const getProgress = (progressvalue) => {
    setProgress(progressvalue);
  }

  return (
    <>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<News getProgress={getProgress} key="general" country={country} category="General" headlineTitle="" />} />
        <Route exact path='/Business' element={<News getProgress={getProgress} key="business" country={country} category="Business" headlineTitle="in BUSINESS" />} />
        <Route exact path='/Entertainment' element={<News getProgress={getProgress} key="entertainment" country={country} category="Entertainment" headlineTitle="in ENTERTAINMENT" />} />
        <Route exact path='/Health' element={<News getProgress={getProgress} key="health" country={country} category="Health" headlineTitle="in HEALTH" />} />
        <Route exact path='/Science' element={<News getProgress={getProgress} key="science" country={country} category="Science" headlineTitle="in SCIENCE" />} />
        <Route exact path='/Sports' element={<News getProgress={getProgress} key="sports" country={country} category="Sports" headlineTitle="in SPORTS" />} />
        <Route exact path='/Tech' element={<News getProgress={getProgress} key="technology" country={country} category="Technology" headlineTitle="in TECHNOLOGY" />} />
      </Routes>
    </>
  )
}

export default App