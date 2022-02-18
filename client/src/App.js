import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header';
import LoggedIn from './Components/LoggedIn';
import LoggedOut from './Components/LoggedOut';
import './App.css';



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    })
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  if (!authenticated) {
    return <div></div>
  }
  return (
    <div>
    <Header />
    <Router>
    {currentUser ? (
          <LoggedIn
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <LoggedOut setCurrentUser={setCurrentUser} />
        )}
    </Router>
    </div>
  );
}

export default App;
