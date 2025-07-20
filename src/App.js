// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Skills from './components/skill';
import Projects from './components/Projects';
import ContactForm from './components/contact';
function App() {
  return (
    <div className="App">
      <Navbar />
    <Profile />
    <Skills/>
    <Projects/>
    <ContactForm/>
    </div>
  );
}

export default App;
