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

    return (
        <KeyboardAverseWrapper>
            <Container color={green}>
                <StatusBar style="light" />
                <InnerContainer color={green}>
                    <PageTitle>COUNTY LICENSE MANAGER</PageTitle>
                    <SubHeading>Register</SubHeading>
                    <Formik
                        initialValues={{ email: '', national_id_number: '', phone_number: '', password: '', confirm_password: '' }}
                        onSubmit={(values) => {
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