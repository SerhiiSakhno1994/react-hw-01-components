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
  transition: background 0.3s ease-in-out;
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
`;
