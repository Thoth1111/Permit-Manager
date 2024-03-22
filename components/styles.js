import styled from 'styled-components';
import { View, Image, Text, TextInput } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

// Colors
export const Colors = {
    jet: "#353535ff",
    caribbean: "#3c6e71ff",
    white: "#ffffffff",
    platinum: "#d9d9d9ff",
    indigo: "#284b63ff",
    green: "#013D1E",
    yellow: "#FFCA0A"
};

const { jet, caribbean, white, platinum, indigo, green, yellow } = Colors;

// Container
export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${ props => props.color ? props.color : white };
    padding-top: ${statusBarHeight + 30}px;
`
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${ props => props.color ? props.color : white };
`
export const AppLogo = styled.Image`
    width: 250px;
    height: 250px;
    border-radius: 125px;
`
export const PageTitle = styled.Text`
    font-size: 24px;
    text-align: center;
    font-weight: semibold;
    color: ${ props => props.color ? props.color : white };
    padding: 10px;
`
export const SubHeading = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${ props => props.color ? props.color : yellow };
`
export const FormArea = styled.View`
    width: 90%;
`
export const StyledTextInput = styled.TextInput`
    background-color: ${white};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${jet};
`
export const StyledInputLabel = styled.Text`
    color: ${white};
    font-size: 13px;
    text-align: left;
`
export const LeftIcon = styled.View`
    position: absolute;
    top: 40px;
    left: 15px;
    z-index: 1;
`
export const RightIcon = styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    right: 15px;
    z-index: 1;
`
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${yellow};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`
export const ButtonText = styled.Text`
    color: ${green};
    font-size: 16px;
    font-weight: bold;
`
export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`
export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${platinum};
    margin-vertical: 10px;
`
export const ExtraView =  styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`
export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    color: ${white};
    font-size: 15px;
`
export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`
export const TextLinkContent = styled.Text`
    color: ${yellow};
    font-size: 15px;
`
export const CardContainer = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
export const CardView = styled.TouchableOpacity`
    background-color: ${yellow};
    border: ${platinum};
    align-items: center;
    justify-content: center;
    width: 95px;
    height: 95px;
    margin: 8px;
    padding: 10px;
    border-radius: 20px;
`
export const CardTitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${jet};
`
export const LicenseDatesView = styled.View`
    flex: 3;
    width: 100%;
    padding: 8px;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;
`