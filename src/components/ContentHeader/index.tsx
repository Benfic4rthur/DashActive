import React from 'react';

import { 
    Container,
    TitleContainer,
    Controllers 
}  from './styles';

interface IContentHeaderProps {
    title: string;
    linecolor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, linecolor, children
}) => (
    <Container>
        <TitleContainer linecolor={linecolor}>
            <h1>{title}</h1>                
        </TitleContainer>
        <Controllers>
            {children}
        </Controllers>
    </Container>
);


export default ContentHeader;