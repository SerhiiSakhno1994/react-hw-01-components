import styled from 'styled-components';

export const Profi = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  max-width: 100%;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-weight: 700;
  margin-bottom: 0;
`;

export const Tag = styled.p`
  margin-bottom: 0;
`;
export const Location = styled.p`
  margin-bottom: 50px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 3);
    height: 100px;
    background-color: var(--second-color);
    border: 1px solid;
  }
`;
export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;

// .profile {
//   width: 300px;
//     margin: 0 auto;
//     margin-bottom: 30px;
//   }
//   .description {
//     padding-top: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: var(--accent-color);
//   }

//   .avatar {
//     width: 100px;
//     height: 100px;
//     max-width: 100%;
//     border-radius: 50%;
//   }

//   .name {
//     font-weight: 700;
//     margin-bottom: 0;
//   }

//   .tag {
//     margin-bottom: 0;
//   }

//   .location {
//     margin-bottom: 50px;
//   }

//   .stats {
//     display: flex;
//     list-style: none;
//     margin: 0;
//     padding: 0;
//   }
//   .stats li {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: calc(100% / 3);
//     height: 100px;
//     background-color: var(--second-color);
//     border: 1px solid;
//   }

//   .label {
//     margin-bottom: 10px;
//   }

//   .quantity {
//     font-weight: 700;
//   }
