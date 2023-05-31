import styled from 'styled-components';
interface ILegendProps {
  color: string;
}
export const Container = styled.div`
  width: 32%;
  height: 240px;
  margin: 10px 0;
  background-color: ${props => props.theme.colors.terciary};
  border-radius: 10px;
  color: ${props => props.theme.colors.white};
  display: flex;
`;
export const Sideleft = styled.aside`
  padding: 30px 20px;
  > h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 500;
  }
`;
export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: left;

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
