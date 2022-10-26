// import './App.css';
import React from 'react';
import Todo from './componants/Todo';
import Login from './componants/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
       
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/todo" element={<Todo />} />

      </Routes>
    </Router>
  
  );
}

export default App;
