import React from 'react'
// Styled Components
import { Container, InnerContainer, PageTitle, CardContainer, Line, StyledButton, ButtonText, LicenseListsView, SubHeading, Colors } from '../components/styles'

// Feather Icons
import * as Icon from 'react-native-feather'

const { green, platinum } = Colors
const Payments = ({ navigation }) => {
    return (
        <Container >
            <InnerContainer>
                <PageTitle color={green}>Payments & Receipts</PageTitle>
                <CardContainer>
                    <Line />
                    <StyledButton style={{ flexDirection: 'row' }}>
                        <ButtonText>New Payment</ButtonText>
                    </StyledButton>
                    <Line />
                </CardContainer>
                <LicenseListsView>
                    <SubHeading color={platinum}>Transactions</SubHeading>
                </LicenseListsView>
            </InnerContainer>
        </Container>
    )
}

export default Payments