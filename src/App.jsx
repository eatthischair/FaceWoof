import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Discover from './views/Discover';
import PackFeed from './views/PackFeed';
import PlaydateCalendar from './views/Calendar';
import Profile from './views/Profile';
import ProfileDisplay from './components/ProfilePage/ProfileDisplay';
import ProfilePage from './components/ProfilePage/ProfilePage';
import './App.css';
// import Locked from './views/Locked';
import Navbar from './components/Navbar/Navbar';

const oktaAuth = new OktaAuth(oktaConfig.oidc);

// import Playdate from './components/Calendar/EditPlaydate';


const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Security
              oktaAuth={oktaAuth}
              onAuthRequired={customAuthHandler}
              restoreOriginalUri={restoreOriginalUri}
            >
              <Navbar />
              <Route path="/" exact component={Home} />
              <Route exact path="/login" render={() => <Login />} />
              <Route path={CALLBACK_PATH} componenet={LoginCallback} />
              {/* <SecureRoute path="/locked" render={() => <Locked />} /> */}
              <SecureRoute path="/discover" render={() => <Discover />} />
              <SecureRoute path="/calendar" render={() => <PlaydateCalendar />} />
              <SecureRoute path="/packFeed" render={() => <PackFeed />} />
              <SecureRoute path="/profile" render={() => <Profile />} />
            </Security>
          </Switch>
        </Router>
      </header>
    </div>
  );
};

export default App;
