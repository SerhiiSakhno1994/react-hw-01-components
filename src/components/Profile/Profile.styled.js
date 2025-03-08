import styled from 'styled-components';

export const Profi = styled.div`
  width: 350px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const Description = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--accent-color);
  border-radius: 12px 12px 0 0;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Name = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0 5px;
`;

export const Tag = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #ddd;
  background: var(--second-color);
  border-radius: 0 0 12px 12px;

  & li {
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    border-right: 1px solid #ddd;
    transition: transform 0.2s ease-in-out;
    &:last-child {
      border-right: none;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Label = styled.span`
  font-size: 0.9rem;
  color: #555;
`;

export const Quantity = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
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
