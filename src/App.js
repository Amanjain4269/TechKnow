import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import ContactForm from './components/contactForm';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Home />
      <ContactForm />

    </div>
  );
}

export default App;
