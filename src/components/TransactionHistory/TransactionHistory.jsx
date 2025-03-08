import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map(({ id, type, amount, currency }, index) => (
          <Tr key={id} isEven={index % 2 === 0}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
