import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

export const Tbody = styled.tbody`
  background: #fff;
`;

export const Tr = styled.tr`
  background: ${({ isEven }) => (isEven ? '#f8f8f8' : '#ffffff')};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #e0f7fa;
  }
`;

export const Thead = styled.thead`
  background: rgb(8, 139, 165);
  color: black;
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
  background: rgb(8, 139, 165);
`;

export const Td = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: #333;
`;
