import React from 'react';
import { Table, Thead, Tbody, Tr, Th } from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem/TransactionItem';

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
        {transactions.map(({ id, type, amount, currency }, index) => {
          return (
            <TransactionItem
              key={id}
              item={{ type, amount, currency, index }}
            />
          );
        })}
      </Tbody>
    </Table>
  );
};
