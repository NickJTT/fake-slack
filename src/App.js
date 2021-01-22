import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase, { auth } from './services/firebase';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import User from './components/User';

export default function App() {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      setUser({ photoURL: result.user.photoURL, email: result.user.email, name: result.user.displayName });
    } catch (exception) {
      console.error(exception); 
    }
  }

  const signOut = async () => {
    auth.signOut();
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => user ? setUser({ photoURL: user.photoURL, email: user.email, name: user.displayName }) : setUser(null));
  }, []);

  return <>
    <Router>
      <Nav user = { user } signOut = { signOut }/>
      <Route exact path = '/' component = { Home }/>
      <Route path = '/login' component = { () => <SignIn user = { user } signIn = { signIn }/> }/>
    </Router>
    { user && <User user = { user } signOut = { signOut }/> }
  </>;
}
