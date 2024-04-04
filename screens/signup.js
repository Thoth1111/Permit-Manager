import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import MyTextInput from '../components/MyTextInput.js';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Container, InnerContainer, PageTitle, SubHeading, FormArea, StyledButton, ButtonText, Colors, MsgBox,
    Line, ExtraView, ExtraText, TextLink, TextLinkContent
} from '../components/styles.js';
import KeyboardAverseWrapper from '../components/KeyboardAverseWrapper.js';
import { UserContext } from '../components/UserContext.js';

import { validateEmail, validateNationalId, validatePhoneNumber, validatePassword } from '../helpers/validations.js';

import { createAccount } from '../API/userRequests.js';

// Colors
const { platinum, green } = Colors;

const SignUp = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [loading, setLoading] = useState(false)
    // const navigateCallback = (screen) => navigation.navigate(screen);
    const { setUserData } = useContext(UserContext);

    const sessionPersist = (incomingUserData) => {
        AsyncStorage.setItem('userSessionData', JSON.stringify(incomingUserData))
        .then(()=> {
            setUserData(incomingUserData)
            console.log(incomingUserData)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleSignUp = (values) => {
        if (validateEmail(values.email) && validateNationalId(values.national_id_number) && validatePhoneNumber(values.phone_number) && validatePassword(values.password, values.confirm_password)) {            
            setLoading(true)
            createAccount(values, setLoading, sessionPersist)
        }
        return;
    }

    return (
        <KeyboardAverseWrapper>
            <Container color={green}>
                <StatusBar style="light" />
                <InnerContainer color={green}>
                    <PageTitle>BUSINESS LICENSE MANAGER</PageTitle>
                    <SubHeading>Register</SubHeading>
                    <Formik
                        initialValues={{ email: '', national_id_number: '', phone_number: '', password: '', confirm_password: '' }}
                        onSubmit={(values) => handleSignUp(values)
                        }
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <FormArea>
                                <MyTextInput
                                    label="Email"
                                    placeholder=""
                                    placeholderTextColor={platinum}
                                    iconName="Mail"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />
                                <MyTextInput
                                    label="National Id Number"
                                    placeholder="e.g 12345678"
                                    placeholderTextColor={platinum}
                                    iconName="User"
                                    onChangeText={handleChange('national_id_number')}
                                    onBlur={handleBlur('national_id_number')}
                                    value={values.national_id_number}
                                    keyboardType="numeric"
                                />
                                <MyTextInput
                                    label="Phone Number"
                                    placeholder="e.g 0712345678"
                                    placeholderTextColor={platinum}
                                    iconName="Smartphone"
                                    onChangeText={handleChange('phone_number')}
                                    onBlur={handleBlur('phone_number')}
                                    value={values.phone_number}
                                    keyboardType="numeric"
                                />
                                <MyTextInput
                                    label="Password"
                                    placeholder="* * * * * * * *"
                                    placeholderTextColor={platinum}
                                    iconName="Key"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    isPassword={true}
                                    secureTextEntry={hidePassword}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MyTextInput
                                    label="Confirm Password"
                                    iconName="Key"
                                    onChangeText={handleChange('confirm_password')}
                                    onBlur={handleBlur('confirm_password')}
                                    value={values.confirm_password}
                                    secureTextEntry={true}
                                />
                                <MsgBox>...</MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Register</ButtonText>
                                </StyledButton>
                            </FormArea>
                        )}
                    </Formik>
                    <Line />
                    <ExtraView>
                        <ExtraText>Already have an account?</ExtraText>
                        <TextLink onPress={() => navigation.navigate('Login')}>
                            <TextLinkContent>Sign In</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </InnerContainer>
            </Container>
        </KeyboardAverseWrapper>
    )
}



export default SignUp;