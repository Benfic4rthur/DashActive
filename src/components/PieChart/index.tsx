import React from 'react';
import { Container, Sideleft, SideRight, LegendContainer, Legend } from './styles';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import CountUp from 'react-countup';

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <Sideleft>
      <h2>Relação Mês</h2>
      <LegendContainer>
        {data.map(item => (
          <Legend color={item.color} key={item.name}>
            <div>
              <CountUp
                end={item.percent}
                prefix={' '}
                suffix={'%'}
                separator='.'
                decimal=','
                decimals={0}
              ></CountUp>
            </div>
            <span>{item.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </Sideleft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Tooltip />
          <Pie data={data} dataKey='percent'>
            {data.map(item => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieChartBox;
