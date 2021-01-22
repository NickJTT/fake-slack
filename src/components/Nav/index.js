import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

export default function Nav({ user, signOut }) {
  return <div className = { style.nav }>
    <span/>
    <NavLink to = '/'>Home</NavLink>
    { user ? <p onClick = { signOut }>Sign Out</p> : <NavLink to = '/login'>Sign In</NavLink> }
    <span/>
  </div>;
}
