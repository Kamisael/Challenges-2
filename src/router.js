import React, { useState } from 'react';
import './App.css';
import Home from './paginas';
import About from './pagina2';
import Navbar from './navBar';

function Logini() {
  const [page, setPage] = useState('Home');

  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {page === 'Home' ? <Home /> : <About />}
    </div>
  );
}

export default Logini;
