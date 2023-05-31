import React from 'react';
import { Container } from './styles';
import happy from '../../assets/happy.svg';
import sad from '../../assets/sad.svg';
import grinning from '../../assets/grinning.svg';
import opps from '../../assets/thinking.png';

interface ImessageBoxProps {
  title: string;
  description: string;
  footertext: string;
  icon: string;
}

const MessageBox: React.FC<ImessageBoxProps> = ({ title, description, footertext, icon }) => {
  return (
    <Container>
      <header>
        <h1>
          {title}
          <img src={icon === 'happy' ? happy : icon === 'sad' ? sad : icon === 'grinning' ? grinning : icon === 'opps' ? opps : ''} alt={title} />
        </h1>
        <p>{description}</p>
      </header>
      <footer>{footertext}</footer>
    </Container>
  );
};

export default MessageBox;
