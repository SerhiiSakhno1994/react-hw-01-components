import { Profile } from './Profile/Profile';

import user from '../data/user.json';
import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';

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
      <Statistics stats={data} title="Upload stats" />
    </div>
  );
};
