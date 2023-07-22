import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OneTrain from '../pages/OneTrain';
import AllTrains from '../pages/AllTrains';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTrains />} />
        <Route path="/train/:trainId" element={<OneTrain />} />
      </Routes>
    </Router>
  );
}

export default App;