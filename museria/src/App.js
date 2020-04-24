import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SongDetail from './components/projects/SongDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateSongProject from './components/projects/CreateSongProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component = {Dashboard} />
          <Route path='/signin' component = {SignIn} />
          <Route path='/signup' component = {SignUp} />
          <Route path='/create' component = {CreateSongProject} />
          <Route path='/song/:id' component = {SongDetail} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
