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
    background-color: ${props => props.color ? props.color : white};
    padding-top: ${statusBarHeight + 30}px;
`
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${props => props.color ? props.color : white};
`
export const AppLogo = styled.Image`
    width: 250px;
    height: 250px;
    border-radius: 125px;
    margin-top: 15%;
`
export const PageTitle = styled.Text`
    font-size: 24px;
    text-align: center;
    font-weight: semibold;
    color: ${props => props.color ? props.color : white};
    padding: 10px;
`
export const SubHeading = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${props => props.color ? props.color : yellow};
`
export const FormArea = styled.View`
    width: 90%;
`
export const AuthTextInput = styled.TextInput`
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
export const AuthInputLabel = styled.Text`
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
    margin-vertical: 5px;
    background-color: ${platinum};
`
export const ExtraView = styled.View`
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
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    height: fit-content;
    justify-content: center;
    margin-vertical: 10px;
`
export const FittedContainer = styled.View`
    width: 100%;
    height: fit-content;
    justify-content: center;
    align-text: center;
`
export const FloatingButton = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;
    width: fit-content;
    height: fit-content;
    padding: 5px;
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
export const ListsView = styled.View`
    flex: 1;
    width: 100%;
    padding: 8px;
    justify-content: start;
    align-items: center;
    overflow: hidden;
`
export const ModalView = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    marginTop: 22px;
    backgroundColor: ${green};
`
export const ModalContentView = styled.Modal`
    background-color: ${yellow};
    padding: 20px;
    margin: 20px;
    border-radius: 15px;
    align-items: center;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    };
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
`
export const StyledTextInput = styled.TextInput`
    background-color: ${white};
    padding: 10px;
    padding-left: 5px;
    padding-right: 5px;
    border: 1px solid ${jet};
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${jet};
`
export const StyledInputLabel = styled.Text`
    color: ${jet};
    font-size: 13px;
    text-align: left;
`
export const RowedView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-vertical: 10px;
    height: fit-content;
    padding: 10px;
`