import styled from 'styled-components';

export const Td = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: #333;
`;

export const Tr = styled.tr`
  background: ${({ isEven }) => {
    return isEven ? '#f8f8f8' : '#ffffff';
  }};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #e0f7fa;
  }
`;
