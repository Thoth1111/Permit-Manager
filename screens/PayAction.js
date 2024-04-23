import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, BackHandler } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SelectList } from 'react-native-dropdown-select-list';
import { RadioButton } from 'react-native-paper';
import KeyboardAverseWrapper from '../components/KeyboardAverseWrapper.js';
import { Container, InnerContainer, Colors, PayWindow, PayOptionRow, PayOptionView, PayOptionIcon, LabelText, AmountView, AmountText, AmountRow, PayTextInput, StyledButton, ButtonText, PageTitle } from '../components/styles';
import { validatePhoneNumber } from '../helpers/validations.js';
import { UserContext } from '../components/UserContext.js';
import { initiatePayment, makeBypassPayment } from '../API/paymentRequests.js';

const { green, platinum, jet } = Colors;

const PayAction = ({ navigation }) => {
    const dispatch = useDispatch();
    const Licenses = useSelector(state => state.licenses);
    const { userData, setUserData } = useContext(UserContext);

    const LicenseOptions = Licenses.map(license => {
        return {
            value: license.business_name
        }
    });

    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('Mpesa');
    const [applicableFee, setApplicableFee] = useState(0);

    const [newPayment, setNewPayment] = useState({
        license_id: '',
        business_name: '',
        extension_plan: '1 year',
        phone_number: '',
        amount: ''
    });

    const redirectToHome = () => {
        navigation.navigate('Home');
    }

    const handleLicenseSelection = (selected) => {
        const license = Licenses.find(license => license.business_name === selected);
        setNewPayment({
            ...newPayment,
            license_id: license._id,
            business_name: selected
        });
        setApplicableFee(license.fee);
    };

    const handlePhoneInput = (text) => {
        setNewPayment({
            ...newPayment,
            phone_number: text
        });
    };

    const handlePayment = (newPayment) => {
        if(newPayment.license_id === ''){
            alert('Please select a license');
            return;
        }
        else if(validatePhoneNumber(newPayment.phone_number)){
            setLoading(true);
            initiatePayment(newPayment, userData, setLoading, dispatch, setUserData, redirectToHome);
        }
        return;
    }


    const calculateAmount = () => {
        let amount = 0;
        switch (newPayment.extension_plan) {
            case '3 months':
                amount = (applicableFee / 4) + (applicableFee * 0.025);
                break;
            case '6 months':
                amount = (applicableFee / 2) + (applicableFee * 0.015);
                break;
            case '1 year':
                amount = applicableFee;
                break;
            default:
                break;
        }
        setNewPayment({
            ...newPayment,
            amount: amount
        });
    };
    useEffect(() => {
        if (loading) {
            const backAction = () => { return true; };
            BackHandler.addEventListener('hardwareBackPress', backAction);
            return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
        }
    }, [loading]);

    useEffect(() => {
        calculateAmount();
    }, [newPayment.extension_plan, applicableFee]);

    return (
        <KeyboardAverseWrapper>
            <Container>
                <InnerContainer>
                    <PageTitle color={jet}>New Payment</PageTitle>
                    <PayWindow>
                        <AmountRow>
                            <LabelText>KES:</LabelText>
                            <AmountView>
                                <AmountText>
                                    {newPayment.amount ? newPayment.amount.toLocaleString() : '0'}
                                </AmountText>
                            </AmountView>
                        </AmountRow>
                        <LabelText>PAYMENT FOR:</LabelText>
                        <SelectList
                            placeholder="Choose License"
                            data={LicenseOptions}
                            setSelected={(selected) =>
                                handleLicenseSelection(selected)
                            }
                        />
                        <LabelText>EXTENSION PERIOD:</LabelText>
                        <RadioButton.Group
                            onValueChange={value =>
                                setNewPayment({
                                    ...newPayment,
                                    extension_plan: value
                                })
                            }
                            value={newPayment.extension_plan}
                        >
                            <PayOptionRow>
                                <RadioButton.Item label="3 months" value="3 months" />
                                <RadioButton.Item label="6 months" value="6 months" />
                                <RadioButton.Item label="1 year" value="1 year" />
                            </PayOptionRow>
                        </RadioButton.Group>
                        <LabelText>PAYMENT METHOD:</LabelText>
                        <PayOptionRow>
                            <PayOptionView
                                onPress={() => setPaymentMethod('Mpesa')}
                                color={paymentMethod === 'Mpesa' ? green : platinum}
                            >
                                <PayOptionIcon source={require(`../assets/images/Mpesa.png`)} />
                            </PayOptionView>
                            <PayOptionView
                                // onPress={() => setPaymentMethod('Airtel')}
                                color={paymentMethod === 'Airtel' ? green : platinum}
                            >
                                <PayOptionIcon source={require(`../assets/images/Airtel.png`)} />
                            </PayOptionView>
                        </PayOptionRow>
                        <LabelText>Phone Number:</LabelText>
                        <PayTextInput
                            placeholder="0*********"
                            placeholderTextColor={platinum}
                            onChangeText={handlePhoneInput}
                            value={newPayment.phone_number}
                            keyboardType="numeric"
                        />
                        {loading ? (
                            <StyledButton disabled={true}>
                                <ActivityIndicator size="large" color={green} />
                            </StyledButton>
                        ) : (
                            <StyledButton onPress={() => handlePayment(newPayment)}>
                                <ButtonText>Pay Now</ButtonText>
                            </StyledButton>
                        )}
                    </PayWindow>
                </InnerContainer>
            </Container>
        </KeyboardAverseWrapper>
    )
}

export default PayAction