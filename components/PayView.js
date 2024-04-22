import React from 'react';
import { PayContainer, PayDate, PayBusiness, SectionText } from './styles';
import { formatDate } from '../helpers/dateFormatter';

const PayView = ({ _id, businessName, transactionDate, amount, navigation }) => {

    const handlePaymentSelection = (_id) => {
        navigation.navigate('MyPayment', { _id: _id });
    }

    return (
            <PayContainer onPress={()=> handlePaymentSelection(_id) }>
                <PayDate>
                    <SectionText>{formatDate(transactionDate)}</SectionText>
                </PayDate>
                <PayBusiness>
                    <SectionText>{businessName.toUpperCase()}</SectionText>
                </PayBusiness>
            </PayContainer>
    )
}

export default PayView;