import React, { useState } from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';

interface ItoogleContext {
    labelLeft: string;
    labelRight: string;
    isChecked: boolean;
    onChange(): void;   
}

const Toggle: React.FC<ItoogleContext> = ({
    labelLeft,
    labelRight,
    isChecked,
    onChange
}) => {
    return (
        <Container>
            <ToggleLabel>{labelLeft}</ToggleLabel>
            <ToggleSelector
                checked={isChecked}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={onChange}
            />
            <ToggleLabel>{labelRight}</ToggleLabel>
        </Container>
    );
};

export default Toggle;
