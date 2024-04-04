import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Container, InnerContainer, AppLogo, PageTitle, Colors } from '../components/styles'

const { green } = Colors

const Splash = () => {
    return (
        <Container color={green}>
            <StatusBar style="light" />
            <InnerContainer color={green}>
                <AppLogo resizeMode="cover" source={require('../assets/images/cityLogo.jpg')}/>
                <PageTitle style={{ marginTop: '4%' }}>BUSINESS LICENSE MANAGER</PageTitle>
            </InnerContainer>
        </Container>
    )
}

export default Splash