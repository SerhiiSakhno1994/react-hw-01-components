import { Td, Tr } from './TransactionItem.styled';

export const TransactionItem = ({ item }) => {
  return (
    <Tr isEven={item.index % 2 === 0}>
      <Td>{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </Tr>
  );
};
