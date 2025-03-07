import styled from 'styled-components';
import { generateColor } from 'utils/Color';

export const Statistic = styled.section`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgb(15, 16, 66);
  height: 80px;
  margin: 0;
`;
export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  background-color: #455882a2;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 5);
  height: 80px;
  background-color: ${generateColor()};
`;

export const Label = styled.span`
  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-weight: 700;
`;
// .statistics {
//     width: 300px;
//     margin: 0 auto;
//     margin-bottom: 30px;
//   }

//   .title {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #c0dec5;
//     height: 80px;
//     margin: 0;
//   }

//   .statList {
//     margin: 0;
//     padding: 0;
//     display: flex;
//     list-style: none;
//     background-color: #455882a2;
//   }

//   .item {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: calc(100% / 5);
//     height: 80px;
//   }

//   .label {
//     margin-bottom: 8px;
//   }

//   .percentage {
//     font-weight: 700;
//   }
