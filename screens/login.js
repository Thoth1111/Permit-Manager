import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
// Styled Components
import MyTextInput from '../components/MyTextInput.js';
import {
    Container, InnerContainer, PageTitle, SubHeading, FormArea, StyledButton, ButtonText, Colors, MsgBox,
    Line, ExtraView, ExtraText, TextLink, TextLinkContent
} from '../components/styles.js';
// Keyboard Averse Wrapper
import KeyboardAverseWrapper from '../components/KeyboardAverseWrapper.js';
// Formik
import { Formik } from 'formik';
// Helpers
import { validateNationalId, validatePassword } from '../helpers/validations.js';

const URL = process.env.CLM_API_URL;
const { platinum, green } = Colors;

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [loading, setLoading] = useState(false)

    const handleLogin = async (values) => {
        if (validateNationalId(values.national_id_number) && validatePassword(values.password, values.password)) {
            setLoading(true)
            await axios.post(`${URL}/user/login`, values)
                .then((response) => {
                    if (response.status === 200) {
                        setLoading(false);
                        console.log(response.status);
                        navigation.navigate('Home');
                    } else {
                        setLoading(false);
                        alert('Error logging in. Check server logs')
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        }
    }

    return (
        <KeyboardAverseWrapper>
            <Container color={green}>
                <StatusBar style="light" />
                <InnerContainer color={green}>
                    <PageTitle>BUSINESS LICENSE MANAGER</PageTitle>
                    <SubHeading>Sign In</SubHeading>
                    <Formik
                        initialValues={{ national_id_number: '', password: '' }}
                        onSubmit={(values) => {
                            setLoading(true)
                            handleLogin(values)
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <FormArea style={{ marginTop: '15%' }}>
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
                                <MsgBox>...</MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>
                            </FormArea>
                        )}
                    </Formik>
                    <ExtraView style={{ marginTop: '5%', justifyContent: 'start' }}>
                        <TextLink>
                            <TextLinkContent>Forgot Password?</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                    <Line style={{ marginTop: '42%' }} />
                    <ExtraView>
                        <ExtraText>Don't have an account?</ExtraText>
                        <TextLink onPress={() => navigation.navigate('SignUp')}>
                            <TextLinkContent>Sign Up</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </InnerContainer>
            </Container>
        </KeyboardAverseWrapper>
    )
}



export default Login;