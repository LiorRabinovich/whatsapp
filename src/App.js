import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Intro from './routes/Intro';
import Chat from './routes/Chat';
import Login from './routes/Login';
import AuthRoute from './components/AuthRoute'
import GuestRoute from './components/GuestRoute'

function App() {
  return (
    <Router>
      <AuthRoute path="/" exact component={Intro} />
      <GuestRoute path="/login" component={Login} />
      <AuthRoute path="/chat/:chatId" component={Chat} />
    </Router>
  );
}

export default App;
