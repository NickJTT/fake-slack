import style from './style.module.scss';

export default function User({ user }) {
  return <div className = { style.user }>
    <h2>{ user.name }</h2>
    <h2>{ user.email }</h2>
  </div>;
}
