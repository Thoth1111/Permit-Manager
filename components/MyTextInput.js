import React from 'react';
import { View } from 'react-native';
import * as Icon from 'react-native-feather';
import { StyledInputLabel, StyledTextInput, LeftIcon, RightIcon, Colors } from './styles';

const { platinum, green } = Colors;

const MyTextInput = ({label, iconName, isPassword, hidePassword, setHidePassword, ...props}) => {
    const DynamicIcon = Icon[iconName];
    const EyeOn = Icon.Eye;
    const EyeOff = Icon.EyeOff;
    return (
        <View>
            <LeftIcon>
                <DynamicIcon size={25} color={platinum} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
                    { hidePassword ? (
                        <EyeOff size={30} color={platinum} />
                    ) : (
                        <EyeOn size={30} color={green} />
                    )}
                </RightIcon>
            )}
        </View>
    )
}

export default MyTextInput;