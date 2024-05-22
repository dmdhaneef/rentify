// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PropertyList from './components/PropertyList';
import AddProperty from './components/AddProperty';
import Header from './components/Header'; // Import Header

const App = () => {
    return (
        <Router>
            <Header /> {/* Add Header here */}
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/properties" element={<PropertyList />} />
                <Route path="/add-property" element={<AddProperty />} />
            </Routes>
        </Router>
    );
};

export default App;
