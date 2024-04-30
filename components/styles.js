import styled from 'styled-components';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

// Colors
export const Colors = {
    jet: "#353535",
    amber: "#FFA07A",
    white: "#ffffff",
    platinum: "#d9d9d9",
    red: "#FF0000",
    green: "#013D1E",
    yellow: "#FFCA0A",
    lime: "#32CD32"
};

const { jet, white, platinum, green, yellow } = Colors;

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
export const InnerScrollView = styled.ScrollView`
    flex: 1;
    width: 100%;
    background-color: ${props => props.color ? props.color : white};
    scroll-behavior: smooth;
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
    font-weight: bold;
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
    padding-vertical: 15px;
    padding-horizontal: 55px;
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
`
export const ListContainer = styled.TouchableOpacity`
    flex-direction: row;
    background-color: ${white};
    width: 98%;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 0px;
    margin: 2px;
`
export const PayContainer = styled.TouchableOpacity`
    flex-direction: row;
    background-color: ${white};
    width: 98%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 0px;
    border-bottom-width: 1px;
    border-bottom-color: ${platinum};
`
export const SectionView = styled.View`
    width: 15%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const PayDate = styled.View`
    width: 25%;
    height: 100%;
    justify-content: center;
    align-items: center;

`
export const PayBusiness = styled.View`
    width: 75%;
    height: fit-content;
    justify-content: center;
    align-items: center;
`
export const MidSectionView = styled.View`
    width: 70%;
    height: fit-content;
    justify-content: center;
    align-items: flex-start;
`
export const SectionLabel = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${jet};    
`
export const SectionText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${jet};    
`
export const SectionValue = styled.Text`
    font-size: 14px;
    color: ${green};    
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
    padding-horizontal: 10px;
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
    padding-vertical: 10px;
    padding-horizontal: 5px;
    border: 1px solid ${jet};
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${jet};
`
export const PayTextInput = styled.TextInput`
    background-color: ${white};
    width: 60%;
    padding: 8px;
    border: 1px solid ${jet};
    border-radius: 5px;
    font-size: 16px;
    height: 50px;
    margin-bottom: 30px;
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
export const DatesTable = styled.View`
    width: 60%;
    height: fit-content;
    margin-vertical: 10px;
    border-top-width: 1px;
    border-top-color: ${jet};
    border-right-width: 1px;
    border-right-color: ${jet};
    border-left-width: 1px;
    border-left-color: ${jet};
`
export const DatesRow = styled.View`
    flex-direction: row;
    margin: 0;
    border-bottom-width: 1px;
    border-bottom-color: ${jet};
`
export const DatesCell = styled.View`
    font-weight: bold;
    width: ${props => props.width ? props.width : '50%'};
    border-right-width: 1px;
    border-right-color: ${props => props.color ? props.color : jet};
    padding: 5px;
    text-align: center;
`
export const DatesText = styled.Text`
    font-size: 11px;
    font-weight: bold;
    color: ${props => props.color ? props.color : green};
`
export const Banner = styled.View`
    flex-direction: row;
    width: 100%;
    height: fit-content;
    gap: 10px;
    justify-content: center;
    align-items: start;
`
export const BannerLogo = styled.Image`
    width: 75px;
    height: 75px;
    margin: 2px;
    border-radius: 35px;
`
export const BannerText = styled.View`
    width: 60%;
    justify-content: center;
    align-items: center;
`
export const BannerTitle = styled.Text`
    font-size: 21px;
    font-weight: bold;
    color: ${green};
`
export const BannerSubTitle = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${green};
`
export const DeclarationText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${green};
    margin-top: 10px;
    align-self: flex-start;
`
export const SidedTable = styled.View`
    width: 100%;
    margin-bottom: 25px;
`
export const SideTableRow = styled.View`
    flex-direction: row;
    margin: 0.5px;
    border: 1px solid ${jet};
    padding: 2px;
`
export const SideTableCell = styled.View`
    font-weight: bold;
    width: '50%';
    border-right-width: 1px;
    border-right-color: ${props => props.color ? props.color : jet};
    padding-right: 5px;
    margin: 0;
    text-align: center;
`
export const SideTableText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${green};
    padding: 5px;
`
export const StatusText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.color ? props.color : platinum};
    padding: 10px;
`
export const LicenseStateContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    align-items: start;
`
export const StampBox = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: fit-content;
    border: 1px solid ${jet};
`
export const PayWindow = styled.View`
    margin-top: 40px;
    width: 100%;
    height: fit-content;
    justify-content: start;
    align-items: center;
`
export const PayOptionRow = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`
export const ReceiptRow = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`
export const PayOptionView = styled.TouchableOpacity`
    flex-direction: row;
    width: 40%;
    height: 80px;
    justify-content: space-around;
    align-items: center;
    border: 2px solid ${props => props.color ? props.color : platinum};
    border-radius: 8px;
    padding: 5px;
    margin: 2px;
`
export const AmountRow = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const AmountView = styled.TouchableOpacity`
    flex-direction: row;
    width: 40%;
    height: 60px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${jet};
    border-radius: 8px;
    padding: 5px;
    margin-horizontal: 10px;
`
export const AmountText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${green};
`
export const PayOptionText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${jet};
    margin-bottom: 10px;
`
export const PayOptionIcon = styled.Image`
    width: 100px;
    height: 80px;
    border-radius: 25px;   
`
export const ReceiptIcon = styled.Image`
    width: 100px;
    height: 80px;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 40px;   
`
export const LabelText = styled.Text`
    align-self: flex-start;
    font-size: 14px;
    font-weight: bold;
    color: ${jet};
    margin-top: 30px;
    margin-bottom: 10px;
`
export const QRCodeView = styled.Image`
    width: 200px;
    height: 200px;
    margin-top: 30px;
`
export const FloatDownloader = styled.TouchableOpacity`
    background-color: ${yellow};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10%;
    right: 2%;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    elevation: 5;
    z-index: 10;
    border: 1px solid ${green};
`
