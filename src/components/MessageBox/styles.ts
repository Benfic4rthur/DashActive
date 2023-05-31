import styled from 'styled-components';
export const Container = styled.div`
  color: ${props => props.theme.colors.white};
  width: 32%;
  height: 240px;
  background-color: ${props => props.theme.colors.terciary};
  border-radius: 10px;
  margin: 10px 0;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 25px;
  > header img {
    width: 45px;
    margin-left: 7px;
  }
  > header p {
    font-size: 18px;
  }
  > footer {
    font-size: 16px;
  }
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
`;
