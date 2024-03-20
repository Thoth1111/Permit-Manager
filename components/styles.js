import styled from 'styled-components';
import { view, Image, Text } from 'react-native';
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
    background-color: ${green};
    padding-top: ${statusBarHeight + 10}px;
`
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`
export const AppLogo = styled.Image`
    width: 250px;
    height: 250px;
`
export const PageTitle = styled.Text`
    font-size: 24px;
    text-align: center;
    font-weight: semibold;
    color: ${white};
    padding: 10px;
`
