import React from 'react';
import { Container } from './styles';
import arrowUp from '../../assets/arrow-down.svg';
import arrowDown from '../../assets/arrow-up.svg';
import dolar from '../../assets/dollar.svg';
import CountUp from 'react-countup';

interface IWalletBoxprops {
  titlelabel: string;
  amount: number;
  footerlabel: string;
  icon: 'dolar' | 'arrowUp' | 'arrowDown';
  color: string;
}

const WalletBox: React.FC<IWalletBoxprops> = ({ titlelabel, amount, footerlabel, icon, color }) => {
  return (
    <Container color={color}>
      <span>{titlelabel}</span>
      <h1>
        <CountUp end={amount}
          prefix={'R$ '}
          separator='.'
          decimal=','
          decimals={2}
        ></CountUp>
      </h1>
      <small>{footerlabel}</small>
      <img
        src={icon === 'dolar' ? dolar : icon === 'arrowUp' ? arrowUp : arrowDown}
        alt={titlelabel}
      />
    </Container>
  );
};

export default WalletBox;
