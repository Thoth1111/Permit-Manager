import React from 'react';
import { ListContainer, SectionView, MidSectionView, SectionText, SectionDate } from './styles';
import { formatDate } from '../helpers/dateFormatter';

const PayView = ({ _id, businessName, transactionDate, amount, navigation }) => {

    const handlePaymentSelection = (_id) => {
        navigation.navigate('MyPayment', { _id: _id });
    }

    return (
            <ListContainer onPress={()=> handlePaymentSelection(_id) }>
                <SectionView>
                    <SectionText>{formatDate(transactionDate)}</SectionText>
                </SectionView>
                <SectionView>
                    <SectionText>{businessName.toUpperCase()}</SectionText>
                </SectionView>
                <SectionView>
                    <SectionText>Kshs {amount}</SectionText>
                </SectionView>
            </ListContainer>
    )
}

export default PayView;