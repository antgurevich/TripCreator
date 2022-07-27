import React from 'react';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePage from './Pages/CreatePage';
import ProfilePage from './Pages/ProfilePage';
import { AboutPage } from './Pages/AboutPage';
import MainPage from './Pages/MainPage';
import Sidebar from './Components/Sidebar';
import "./styles.scss"
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const baseClass = 'app'

root.render(
  <React.StrictMode>
    <Router>
      <Sidebar />
      <div className={`${baseClass}`}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createtrip" element={<CreatePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
