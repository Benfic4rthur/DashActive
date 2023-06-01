import React from 'react';

import { Container }  from './styles';

interface Ichildren {
    children: React.ReactNode;
}
const Content: React.FC<Ichildren> = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default Content;