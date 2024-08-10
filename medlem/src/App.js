import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Member from './pages/Member';
import NewMember from './pages/NewMember';
import MemberDetails from './components/MemberDetails';
import { MembershipProvider } from './context/MembershipContext';

function App() {
  return (
    <MembershipProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Member />} />
            <Route path="/members/:id" element={<MemberDetails />} />
            <Route path="/new-member" element={<NewMember />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </MembershipProvider>
  );
}

export default App;
