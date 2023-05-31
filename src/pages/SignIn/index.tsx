import React, { useState } from 'react';
import { Container, Logo, Form, FormTitle } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';


const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {sigIn} = useAuth();
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt='Carteira-Financeira' />
        <h2>Minha Carteira</h2>
      </Logo>
      <Form onSubmit={() => sigIn(email, password)}>
        <FormTitle>Entrar</FormTitle>
        <Input required type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <Input required type='password'placeholder='senha' onChange={(e) => setPassword(e.target.value)}/>
        <Button type='submit'>Entrar</Button>
      </Form>
    </Container>
  );
};
export default SignIn;
