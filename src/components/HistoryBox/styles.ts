import styled, { keyframes } from 'styled-components';


const animate = keyframes`
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

interface ILegendProps {
  color: string;
}
export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  margin: 10px 0;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  border-radius: 10px;
  animation: ${animate} .5s;
`;
export const ResponsiveContainer = styled.div``;
export const ChartContainer = styled.div`
  flex: 1;
  height: 210px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > h2 {
    margin-bottom: 10px;
    margin-left: 20px;
  }
`;
export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
`;
export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  margin-left: 7px;

  > div {
    background-color: ${props => props.color};
    width: 30px;
    height: 30px;
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
