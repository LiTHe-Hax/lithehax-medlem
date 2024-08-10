import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NewMember from './pages/NewMember';
import { MembershipProvider } from './context/MembershipContext';

function App() {
  return (
    <MembershipProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-member" element={<NewMember />} />
          </Routes>
        </main>
      </Router>
    </MembershipProvider>
  );
}

export default App;
