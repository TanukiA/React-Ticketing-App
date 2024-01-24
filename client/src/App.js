import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomerHome from './components/CustomerHome';
import CustomerTicket from './components/CustomerTicket';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={CustomerHome} />
        <Route path="/myticket" exact component={CustomerTicket} />
        <Route path="*" exact component={PageNotFound} />
      </Routes>
    </Router>
  );
}

const PageNotFound = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
    </>
  );
};

export default App;