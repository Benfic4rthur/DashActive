import React from 'react';
import { Container, ChartContainer, LegendContainer, Legend, Header } from './styles';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import formatCurrency from '../../utils/formatCurrency';

interface IhystoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutPut: number;
  }[];
  lineColoramountOutPut: string;
  lineColoramountEntry: string;
}
const HistoryBox: React.FC<IhystoryBoxProps> = ({
  data,
  lineColoramountOutPut,
  lineColoramountEntry,
}) => (
  <Container>
    <Header>
      <h2>Histórico de saldo</h2>
      <LegendContainer>
        <Legend color={lineColoramountEntry}>
          <div></div>
          <span>Entradas</span>
        </Legend>
        <Legend color={lineColoramountOutPut}>
          <div></div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </Header>
    <ChartContainer>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray={'3 3'} stroke='#cecece' />
          <XAxis dataKey='month' stroke='#cecece' />
          <Tooltip formatter={value => formatCurrency(Number(value))} />
          <Line
            type='monotone'
            dataKey='amountEntry'
            name='Entradas'
            stroke={lineColoramountEntry}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type='monotone'
            dataKey='amountOutPut'
            name='Saídas'
            stroke={lineColoramountOutPut}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  </Container>
);

export default HistoryBox;
