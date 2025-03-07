import {
  Item,
  Label,
  Percentage,
  Statistic,
  StatList,
  Title,
} from './Statistics.staled';

export const Statistics = ({ title = 'Тут буде заголовок', stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(st => (
          <Item key={st.id}>
            <Label>{st.label}</Label>
            <Percentage>{st.percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </Statistic>
  );
};
