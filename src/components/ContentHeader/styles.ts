import styled from 'styled-components';

interface IContainerProps {
    linecolor: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`;
export const TitleContainer = styled.div<IContainerProps>`
    >h2{
        color: ${props => props.theme.colors.white};
        &::after{
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.linecolor};
        }
    }
`;
export const Controllers = styled.div`
    display: flex;
`;