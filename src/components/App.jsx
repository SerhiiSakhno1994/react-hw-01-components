import Profile from './Profile/Profile';

import user from '../data/user.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        location={user.location}
        tag={user.tag}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}

      />
    </div>
  );
};
