import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OneTrain from '../pages/OneTrain';
import AllTrains from '../pages/AllTrains';
function App() {
  return (
   <Router>
      <Switch>
        <Route exact path="/" component={AllTrains} />
        <Route path="/train/:trainId" component={OneTrain} />
      </Switch>
    </Router>
  )
}

export default App
