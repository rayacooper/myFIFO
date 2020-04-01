import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
