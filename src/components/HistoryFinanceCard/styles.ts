import styled from 'styled-components';

interface ItagProps {
    color: string;
}
export const Container = styled.li`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.terciary};
    border-radius: 10px;
    margin: 10px;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    opacity: 1;
    &:hover {
        opacity: 0.7;
        transform: translateX(10px);
        outline: 5px solid ${props => props.theme.colors.primary};
        transition: 0.4s;
    }
    position: relative;
    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }
    > div span {
        font-weight: 500;
        font-size: 16px;
    }
`;
export const Tag = styled.div<ItagProps>`
    background-color: ${props => props.color};
    width: 13px;
    height: 60%;
    position: absolute;
    left: 0;
    border-radius: 3px;
`;
