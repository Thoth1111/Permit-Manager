import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SelectList } from 'react-native-dropdown-select-list';
import { RadioButton } from 'react-native-paper';
import { Container, InnerContainer, Colors, PayOptionRow, PayOptionView, PayOptionIcon, LabelText } from '../components/styles';

const { green, platinum } = Colors;
const Plans = [
    { label: '3 months', value: '3 months' },
    { label: '6 months', value: '6 months' },
    { label: '1 year', value: '1 year' }
]

const PayAction = () => {
    const Licenses = useSelector(state => state.licenses);

    const LicenseOptions = Licenses.map(license => {
        return {
            value: license.business_name
        }
    });

    const [paymentMethod, setPaymentMethod] = useState('Mpesa');
    const [applicableFee, setApplicableFee] = useState(0);

    const [newPayment, setNewPayment] = useState({
        license_id: '',
        extensionPlan: '',
        amount: ''
    });

    const handleLicenseSelection = (selected) => {
        const license = Licenses.find(license => license.business_name === selected);
        setNewPayment({
            ...newPayment,
            license_id: license._id,
        });
        setApplicableFee(license.fee);
    };

    const calculateAmount = () => {
        let amount = 0;
        switch (newPayment.extensionPlan) {
            case '3 months':
                amount = (applicableFee / 4) + (applicableFee * 0.05);
                break;
            case '6 months':
                amount = (applicableFee / 2) + (applicableFee * 0.025);
                break;
            case '1 year':
                amount = applicableFee;
                break;
            default:
                break;
        }
        setNewPayment({
            ...newPayment,
            amount
        });
    };

    return (
        <Container>
            <InnerContainer>
                <LabelText>PAYMENT FOR:</LabelText>
                <SelectList
                    placeholder="Choose License"
                    data={LicenseOptions}
                    setSelected={(selected) =>
                        handleLicenseSelection(selected)
                    }
                />
                <LabelText>EXTENSION PERIOD:</LabelText>
                <SelectList
                    placeholder="Choose Plan"
                    data={Plans}
                    setSelected={(selected) =>
                        setNewPayment({
                            ...newPayment,
                            extensionPlan: selected
                        })
                    }
                />
                <LabelText>PAYMENT METHOD:</LabelText>
                <PayOptionRow>
                    <RadioButton.Group
                        onValueChange={value => setPaymentMethod(value)}
                        value={paymentMethod}
                    >
                        <PayOptionView>
                            <RadioButton value={Mpesa} />
                            <PayOptionIcon source={require('../assets/images/Mpesa.png')} />
                        </PayOptionView>
                        <PayOptionView>
                            <RadioButton value={Airtel} />
                            <PayOptionIcon source={require('../assets/images/Airtel.png')} />
                        </PayOptionView>
                    </RadioButton.Group>
                </PayOptionRow>
            </InnerContainer>
        </Container>
    )
}

export default PayAction