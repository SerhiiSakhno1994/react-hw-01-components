import { FriendsLister } from './FriendList.styled';
import { Friend } from './FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <FriendsLister>
      {friends.map(el => (
        <Friend key={el.id} arr={el} />
      ))}
    </FriendsLister>
  );
};
