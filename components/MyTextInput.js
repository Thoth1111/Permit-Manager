import React from 'react';
import { StyledInputLabel, StyledTextInput, FittedContainer } from './styles';

const MyTextInput = ({label, ...props}) => {
    return (
        <FittedContainer>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
        </FittedContainer>
    )
}

export default MyTextInput;