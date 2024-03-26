import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import MyTextInput from '../components/MyTextInput.js';

// Formik
import { Formik } from 'formik';

// Styled Components
import {
    Container, InnerContainer, PageTitle, SubHeading, FormArea, StyledButton, ButtonText, Colors, MsgBox,
    Line, ExtraView, ExtraText, TextLink, TextLinkContent
} from '../components/styles.js';

// Keyboard Averse Wrapper
import KeyboardAverseWrapper from '../components/KeyboardAverseWrapper.js';

// Colors
const { platinum, green } = Colors;

const SignUp = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [loading, setLoading] = useState(false)

    return (
        <KeyboardAverseWrapper>
            <Container color={green}>
                <StatusBar style="light" />
                <InnerContainer color={green}>
                    <PageTitle>BUSINESS LICENSE MANAGER</PageTitle>
                    <SubHeading>Register</SubHeading>
                    <Formik
                        initialValues={{ email: '', national_id_number: '', phone_number: '', password: '', confirm_password: '' }}
                        onSubmit={(values) => {
                            setLoading(true)
                            if (values.email === '' || values.national_id_number === '' || values.phone_number === '' || values.password === '' || values.confirm_password === '') {
                                console.log('Please fill in all the required fields')
                                setLoading(false)
                                // return
                            } else if (values.national_id_number.length < 8 || values.password.length < 8) {
                                console.log('National Id Number and Password must be at least 8 characters long')
                                setLoading(false)
                                // return
                            } else if (values.password !== values.confirm_password) {
                                console.log('Passwords do not match')
                                setLoading(false)
                                // return
                            } else {
                                console.log('Submitting...')
                                setLoading(false)                               
                            }
                            console.log(values);
                        }}
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