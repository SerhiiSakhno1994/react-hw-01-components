import styled from 'styled-components';
export const FriendsLister = styled.ul`
  width: 260px;
  margin: 20px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  list-style: none;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }
`;
