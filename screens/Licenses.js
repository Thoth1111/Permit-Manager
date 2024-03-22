import React from 'react'
import * as Icon from 'react-native-feather'
import { Container, InnerContainer, PageTitle, SubHeading, LicenseListsView, Line, Colors, CardContainer, StyledButton, ButtonText } from '../components/styles'

const { green, platinum } = Colors;

const Licenses = ({ navigation }) => {
    return (
        <Container >
            <InnerContainer>
                <PageTitle color={green}>Your Licenses</PageTitle>
                <CardContainer>
                    <Line />
                    <StyledButton style={{ flexDirection: 'row' }}>
                        <Icon.FilePlus size={50} color={green} />
                        <ButtonText>Add</ButtonText>
                    </StyledButton>
                    <Line />
                </CardContainer>
                <LicenseListsView>
                    <SubHeading color={platinum}>Current Licenses</SubHeading>
                </LicenseListsView>
            </InnerContainer>
        </Container>
    )
}

export default Licenses