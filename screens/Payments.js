import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
// Styled Components
import { Container, InnerContainer, CardContainer, Line, CardView, ButtonText, ListsView, SubHeading, Colors } from '../components/styles'
import PayView from '../components/PayView';
import { getPayments } from '../API/paymentRequests'
import { UserContext } from '../components/UserContext'


const { green } = Colors

const Payments = ({ navigation }) => {
    const payments = useSelector(state => state.payments).sort((a, b) => new Date(b.expiry_date) - new Date(a.expiry_date));
    const { userData, setUserData } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const fetchPayments = async () => {
        setLoading(true);
        await getPayments(userData, setLoading, dispatch, setUserData)
    }

    useEffect(() => {
        fetchPayments();
    }, [])

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
                    {loading ? (
                        <ActivityIndicator size="large" color={green} />
                    ) : (
                        <>
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
                        </>
                    )}
                </ListsView>
            </InnerContainer>
        </Container>
    )
}

export default Payments