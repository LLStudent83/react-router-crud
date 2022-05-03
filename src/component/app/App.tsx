import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from
  'react-router-dom';


export default function App(): JSX.Element {
  return (
    <Router>
      <div>
        <div className="page">
          <Routes>
            <Route path="/" element={null} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
