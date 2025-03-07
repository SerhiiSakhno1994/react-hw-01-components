import {
  Avatar,
  Description,
  Label,
  Location,
  Name,
  Profi,
  Quantity,
  Stats,
  Tag,
} from './Profile.styled';
export const Profile = ({
  username,
  avatar,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <Profi>
      <Description>
        <Avatar src={avatar} alt={tag} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location> {location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </Stats>
    </Profi>
  );
};
