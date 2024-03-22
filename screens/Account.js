import React from 'react'
import * as Icon from 'react-native-feather'
import { Container, InnerContainer, PageTitle, CardContainer, Line, StyledButton, ButtonText, Colors } from '../components/styles'

const { green } = Colors

const Account = ({ navigation }) => {
  return (
    <Container>
        <InnerContainer>
            <PageTitle color={green}>Account</PageTitle>
            <CardContainer>
                <Line />
                <StyledButton style={{ flexDirection: 'row' }}>
                    <Icon.LogOut size={50} color={green} />
                    <ButtonText>Log Out</ButtonText>
                </StyledButton>
                <Line />
            </CardContainer>
        </InnerContainer>
    </Container>
  )
}

export default Account