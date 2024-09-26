


// src/App.jsx

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './landing/LandingPage';
import SetLimit from './admin/setlimit';
import SetPrice from './admin/setprice';
import AdminViewAllUsers from './admin/AdminViewAllUsers';
import Laout from './admin/Laout';
import ServoControl from './users/ServoControl';
import Waterflow from './users/Waterflow';
import ViewAnalytics from './users/viewAnalytics';
import Userlayout from './users/userlayout';
import Authentic from './authentication/Authentic'; // Adjust the import path as needed
import { UserContext } from './authentication/UserContext';
import ListOfAdmin from './admin/ListOfAdmin';
// import AdminList from './admin/ListOfAdmin';


function App() {
  const user = useContext(UserContext);

  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication Route */}
        <Route path="/auth" element={<Authentic />} />

        {/* Admin Routes */}
        <Route path='admin/' element={<Laout />}>
          <Route path="setlimit" element={<SetLimit />} />
          <Route path="setprice" element={<SetPrice />} />
          <Route path="viewusers" element={<AdminViewAllUsers />} />
          <Route path="listofadmin" element={<ListOfAdmin />} />
        </Route>

        {/* User Routes */}
        <Route path='user/' element={<Userlayout />}>
          {user ? (
            <>
              <Route path="servoControl" element={<ServoControl userId={user.email} />} />
              <Route path="waterflow" element={<Waterflow userId={user.email} />} />
              <Route path="viewanalytics" element={<ViewAnalytics userId={user.email} />} />
            </>
          ) : (
            <Route path="*" element={<Authentic />} /> // Redirect to login if not authenticated
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
