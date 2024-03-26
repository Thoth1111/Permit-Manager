import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Container, InnerContainer, AppLogo, PageTitle, StyledButton, ButtonText, Colors } from '../components/styles'

const { green } = Colors

const Splash = ({ navigation }) => {
    return (
        <Container color={green}>
            <StatusBar style="light" />
            <InnerContainer color={green}>
                <AppLogo resizeMode="cover" source={require('../assets/images/cityLogo.jpg')}/>
                <PageTitle style={{ marginTop: '4%' }}>BUSINESS LICENSE MANAGER</PageTitle>
                <StyledButton onPress={() => navigation.navigate('Login')} style={{ width: '100%', marginTop:'40%' }}>
                    <ButtonText>Login</ButtonText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('SignUp')} style={{ width: '100%', marginTop:'6%' }}>
                    <ButtonText>Register</ButtonText>
                </StyledButton>
            </InnerContainer>
        </Container>
    )
}

export default Splash