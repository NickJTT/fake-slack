import { Redirect } from 'react-router-dom';
import style from './style.module.scss';

export default function SignIn({ user, signIn }) {
  return user ? <Redirect to = '/'/> : <div className = { style.login }>
    <h3>Sign In With Google</h3>
    <button onClick = { signIn }>Sign In</button>
  </div>;
}
