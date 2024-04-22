import React from 'react';
import { useSelector } from 'react-redux';
import { Container, InnerContainer, ReceiptRow, SectionLabel, SectionValue, ReceiptIcon, FittedContainer } from '../components/styles';
import { formatDate } from '../helpers/dateFormatter';

const MyPayment = ({ route }) => {
    const { _id } = route.params;
    const payment = useSelector(state => state.payments.find(payment => payment._id === _id));
    console.log(payment);
    const paidAmount = payment.amount.toLocaleString();
    const transactionDate = new Date(payment.transaction_date);
    const formattedDate = new Date(payment.transaction_date).toLocaleDateString('en-GB',
        {
            day: '2-digit', month: '2-digit', year: 'numeric'
        }
    );
    const previousExpiry = new Date(payment.expiry_previous).toLocaleDateString('en-GB',        
        {
            day: '2-digit', month: '2-digit', year: 'numeric'
        }
    );
    const formattedTime = transactionDate.toLocaleTimeString(
        'en-US',
        {
            hour: '2-digit', minute: '2-digit'
        }
    );

    return (
        <Container>
            <InnerContainer>
                <FittedContainer>
                    <ReceiptIcon source={require(`../assets/images/Mpesa.png`)} />
                    <ReceiptRow>
                        <SectionLabel>Entity:</SectionLabel>
                        <SectionValue>{payment.business_name}</SectionValue></ReceiptRow>
                    <ReceiptRow>
                        <SectionLabel>Amount Paid:</SectionLabel>
                        <SectionValue>Kshs {paidAmount}</SectionValue>
                    </ReceiptRow>
                    <ReceiptRow>
                        <SectionLabel>Transaction Date:</SectionLabel>
                        <SectionValue>{formattedDate} {formattedTime}</SectionValue>
                    </ReceiptRow>
                    <ReceiptRow>
                        <SectionLabel>Transaction ID:</SectionLabel>
                        <SectionValue>{payment.transaction_id}</SectionValue>
                    </ReceiptRow>
                    <ReceiptRow>
                        <SectionLabel>expiry date before payment :</SectionLabel>
                        <SectionValue>{previousExpiry}</SectionValue>
                    </ReceiptRow>
                    <ReceiptRow>
                        <SectionLabel>Extension Duration:</SectionLabel>
                        <SectionValue>{payment.extension}</SectionValue>
                    </ReceiptRow>
                </FittedContainer>
            </InnerContainer>
        </Container>
    )
}

export default MyPayment;