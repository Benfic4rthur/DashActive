import React from 'react';
import { Container } from './styles';
import { TitleContainer, Controllers } from './styles';
import SelectInput from '../../components/SelectInput';

interface ItitleContainerProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}
const ContentHeader: React.FC<ItitleContainerProps> = ( {title, lineColor, children} ) => {

    return (
        <div>
            <Container >
                <TitleContainer linecolor={lineColor}>
                    <h2>{title}</h2>
                </TitleContainer>
                <Controllers>
                    {children}
                </Controllers>  
            </Container>
        </div>
    );
};

export default ContentHeader;
