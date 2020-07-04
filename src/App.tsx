import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './screens/HomePage';
import ContactUS from './screens/ContactUs';
import Footer from './components/Footer';
import Header from './material-components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/contact-us'>
            <ContactUS />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
