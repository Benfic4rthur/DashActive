import styled from 'styled-components';
interface ILegendProps {
  color: string;
}
export const Container = styled.div`
  color: ${props => props.theme.colors.white};
  width: 49%;
  min-height: 260px;
  margin-top: 10px;
  margin-bottom: -15px;
  background-color: ${props => props.theme.colors.terciary};
  border-radius: 10px;
  display: flex;
`;
export const SideLeft = styled.div`
  padding: 30px 20px;
  > h2 {
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: 22px;
  }
`;
export const SideRight = styled.div`
  flex: 1;
  min-height: 150px;
  height: 260px;
  width: 100px;
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const LegendContainer = styled.ul`
  max-height: 175px;
  list-style: none;
  padding: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.terciary};
  }
`;
export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  > div {
    background-color: ${props => props.color};
    width: 50px;
    height: 40px;
    border-radius: 5px;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
