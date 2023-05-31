import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink, Button } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import { useAuth } from '../../hooks/auth';


const Aside: React.FC = () => {
    const { signOut } = useAuth();
    return (
        <div>
            <Container>
                <Header>
                    <LogImg src={logoImg} alt='Logo aplicação' />
                    <Title>Minha Carteira</Title>
                </Header>
                <MenuContainer>
                    <MenuItemLink to ='dashboard'>
                        {' '}
                        <MdDashboard />
                        Dashboard
                    </MenuItemLink>
                    <MenuItemLink to ='lists/entradas'>
                        {' '}
                        <MdArrowDownward />
                        Entradas
                    </MenuItemLink>
                    <MenuItemLink to ='lists/saidas'>
                        <MdArrowUpward />
                        Saídas
                    </MenuItemLink>
                    <Button onClick={signOut}>
                        <MdExitToApp />
                        Sair
                    </Button>
                </MenuContainer>
            </Container>
        </div>
    );
};

export default Aside;
