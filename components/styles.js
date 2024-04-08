import styled from 'styled-components';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

// Colors
export const Colors = {
    jet: "#353535ff",
    amber: "#FFA07A",
    white: "#ffffffff",
    platinum: "#d9d9d9ff",
    red: "#FF0000",
    green: "#013D1E",
    yellow: "#FFCA0A"
};

const { jet, amber, white, platinum, red, green, yellow } = Colors;

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
    margin-vertical: 10px;
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
    border: 1px solid ${green};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    };
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
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
export const ListContainer = styled.TouchableOpacity`
    flex-direction: row;
    background-color: ${white};
    width: 98%;
    height: 15%;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 0px;
    margin: 2px;
`
export const SectionView = styled.View`
    width: 25%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const MidSectionView = styled.View`
    width: 50%;
    height: fit-content;
    justify-content: center;
    align-items: flex-start;
`
export const SectionText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${jet};    
`
export const SectionDate = styled.Text`
    font-size: 14px;
    color: ${props => props.color ? props.color : jet};
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
    border: ${green};
    align-items: center;
    justify-content: center;
    height: 50px;
    width: fit-content;
    margin: 6px;
    paddingHorizontal: 10px;
    border-radius: 5px;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    };
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
`
export const CardTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${green};
`
export const IconView = styled.View`
margin-right: 10px;
`
export const ListsView = styled.View`
    flex: 1;
    width: 110%;
    padding: 0px;
    justify-content: start;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    background-color: ${platinum};
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
    justify-content: start;
    align-items: center;
    width: fit-content;
    gap: 10px;
    margin-top: 15px;
    height: fit-content;
`