import { Avatar, FriendItem, Name, Status } from './FriendListItem.styled';

export const Friend = ({ arr }) => {
  return (
    <FriendItem>
      <Status isOnline={arr.isOnline} />
      <Avatar src={arr.avatar} alt="User avatar" />
      <Name>{arr.name}</Name>
    </FriendItem>
  );
};
