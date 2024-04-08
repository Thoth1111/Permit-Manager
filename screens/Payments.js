import React from 'react'
// Styled Components
import { Container, InnerContainer, PageTitle, CardContainer, Line, CardView, ButtonText, ListsView, SubHeading, Colors } from '../components/styles'

// Feather Icons
import * as Icon from 'react-native-feather'

const { green } = Colors
const Payments = ({ navigation }) => {
    return (
        <Container >
            <InnerContainer>
                <PageTitle color={green}>Payments & Receipts</PageTitle>
                <CardContainer>
                    <Line />
                    <CardView style={{ flexDirection: 'row' }}>
                        <ButtonText>New Payment</ButtonText>
                    </CardView>
                    <Line />
                </CardContainer>
                <ListsView>
                    <SubHeading color={green}>Transactions</SubHeading>
                </ListsView>
            </InnerContainer>
        </Container>
    )
}

export default Payments