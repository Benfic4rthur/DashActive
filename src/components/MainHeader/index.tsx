import React, { useState } from 'react';
import { Container, Profile, UserName } from './styles';
import Toggle from '../Toggle'
import { useTheme } from '../../hooks/theme'; 

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    const handleChange = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }
    return (
        <div>
            <Container>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                isChecked={darkTheme}
                onChange={handleChange}
            />
            <Profile>
                <p>Olá,</p>
                <UserName>Arthur Benfica </UserName>
            </Profile>
            </Container>
        </div>
    );
};
export default MainHeader;
