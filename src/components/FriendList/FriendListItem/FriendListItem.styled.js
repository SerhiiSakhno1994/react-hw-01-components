import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  }
`;

export const Status = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#2ecc71' : '#e74c3c')};
  box-shadow: 0 0 8px ${({ isOnline }) => (isOnline ? '#2ecc71' : '#e74c3c')};
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-right: 12px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ddd;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  margin-right: 12px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  transition: color 0.3s ease-in-out;

  ${FriendItem}:hover & {
    color: #3498db;
  }
`;
