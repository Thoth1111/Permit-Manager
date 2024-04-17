import React from 'react'
import { useSelector } from 'react-redux'
// Styled Components
import { Container, InnerContainer, CardContainer, Line, CardView, ButtonText, ListsView, SubHeading, Colors } from '../components/styles'
import PayView from '../components/PayView'

const { green } = Colors

const Payments = ({ navigation }) => {
    const payments = useSelector(state => state.payments)

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
                    {payments.length > 0 && payments.map((payment, i) => (
                        <PayView
                            key={i}
                            businessName={payment.business_name}
                            _id={payment._id}
                            transactionDate={payment.transaction_date}
                            amount={payment.amount}
                            navigation={navigation}
                        />
                    ))}
                </ListsView>
            </InnerContainer>
        </Container>
    )
}

export default Payments