import React, { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';

import TextIconInput from '../components/TextIconInput.js';

import {
    Container, InnerContainer, PageTitle, SubHeading, FormArea, StyledButton, ButtonText, Colors, MsgBox,
    Line, ExtraView, ExtraText, TextLink, TextLinkContent
} from '../components/styles.js';
import KeyboardAverseWrapper from '../components/KeyboardAverseWrapper.js';
import { UserContext } from '../components/UserContext.js';

import { loginUser } from '../API/userRequests.js';

import { validateNationalId, validatePassword } from '../helpers/validations.js';
const { platinum, green } = Colors;

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [loading, setLoading] = useState(false)

    const { setUserData } = useContext(UserContext);
   
    const sessionPersist = (incomingUserData) => {
        AsyncStorage.setItem('userSessionData', JSON.stringify(incomingUserData))
            .then(() => {
                setUserData(incomingUserData)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    const handleLogin = (values) => {
        if (validateNationalId(values.national_id_number) && validatePassword(values.password, values.password)) {
            setLoading(true)
            loginUser(values, setLoading, sessionPersist)
        }
        return;
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
                        onSubmit={(values) => handleLogin(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <FormArea style={{ marginTop: '15%' }}>
                                <TextIconInput
                                    label="National Id Number"
                                    placeholder="e.g 12345678"
                                    placeholderTextColor={platinum}
                                    iconName="User"
                                    onChangeText={handleChange('national_id_number')}
                                    onBlur={handleBlur('national_id_number')}
                                    value={values.national_id_number}
                                    keyboardType="numeric"
                                />
                                <TextIconInput
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
                                {loading ? (
                                    <StyledButton disabled={true}>
                                        <ActivityIndicator size="large" color={green} />
                                    </StyledButton>
                                ) : (
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>
                                )}
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