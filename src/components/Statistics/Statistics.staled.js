import styled from 'styled-components';
import { generateColor } from 'utils/Color';

export const Statistic = styled.section`
  width: 340px;
  margin: 20px auto;
  padding: 15px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f1042, #1e3c72);
  color: #fff;
  height: 80px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 12px 12px 0 0;
`;

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  background: #455882;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 5);
  height: 100px;
  background-color: ${generateColor()};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 0.85rem;
  opacity: 0.9;
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

// export const Statistic = styled.section`
//   width: 300px;
//   margin: 0 auto;
//   margin-bottom: 30px;
// `;

// export const Title = styled.h2`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color:rgb(15, 16, 66);
//   height: 80px;
//   margin: 0;
// `;
// export const StatList = styled.ul`
//   margin: 0;
//   padding: 0;
//   display: flex;
//   list-style: none;
//   background-color: #455882a2;
// `;

// export const Item = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: calc(100% / 5);
//   height: 80px;
//   background-color: ${generateColor()};
// `;

// export const Label = styled.span`
//   margin-bottom: 8px;
// `;

// export const Percentage = styled.span`
//   font-weight: 700;
// `;
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
