// src/App.js

import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from "./Home"; // Adjust the path if needed

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Home />
      </div>
    </HelmetProvider>
  );
}

export default App;