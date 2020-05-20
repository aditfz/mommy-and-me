import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './screens/HomePage'
import ContactUS from './screens/ContactUs'
import Footer from './components/Footer'
import Header from './material-components/Header'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
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
  )
}

export default App
