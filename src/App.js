import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Edu from './components/Edu'; 
import WorkExperience from './components/WorkExperience'; 
import Skills from './components/Skills'; // Import the Skills component
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        {/* Add your home content here */}
      </div>
      <About />
      <Edu />
      <WorkExperience />
      <Skills /> {/* Add the Skills component here */}
      <Footer />
    </div>
  );
}

export default App;
