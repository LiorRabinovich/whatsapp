import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from './routes/Intro';
import Chat from './routes/Chat';
import Login from './routes/Login';
import NotFound from './routes/NotFound'
import AuthRoute from './components/AuthRoute'
import GuestRoute from './components/GuestRoute'

function App() {
  return (
    <Router>
      <Switch>
        <AuthRoute path="/" exact component={Intro} />
        <GuestRoute path="/login" component={Login} />
        <AuthRoute path="/chat/:chatId" component={Chat} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
