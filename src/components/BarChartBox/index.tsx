import React from 'react';
import { Container, SideLeft, SideRight, LegendContainer, Legend } from './styles';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import formatCurrency from '../../utils/formatCurrency';
import CountUp from 'react-countup';

interface IBarChartBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data }) =>  (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
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
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey='amount' name={title}>
              {data.map(item => (
                <Cell key={item.name} fill={item.color} cursor={'pointer'}/>
              ))}
            </Bar>
            <Tooltip formatter={value => formatCurrency(Number(value))} cursor={{fill: 'none'}}/>
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );

export default BarChartBox;
