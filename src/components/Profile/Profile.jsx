import s from './Profile.module.css';
export default function Profile({ username, avatar, tag, location,  followers, views, likes }) {
  console.log(followers)
    return (


    <div className={s.profile}>
      <div className={s.description}>
        <img className={s.avatar} src={avatar} alt={tag} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>  {location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
