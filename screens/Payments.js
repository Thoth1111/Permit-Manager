import React from 'react'
// Styled Components
import { Container, InnerContainer, CardContainer, Line, CardView, ButtonText, ListsView, SubHeading, Colors } from '../components/styles'

const { green } = Colors

const Payments = ({ navigation }) => {
    return (
        <Container >
            <InnerContainer>
                <CardContainer>
                    <Line />
                    <CardView onPress={() => navigation.navigate('PayAction')} style={{ flexDirection: 'row' }}>
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