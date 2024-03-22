import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// Styled Components
import MyTextInput from '../components/MyTextInput.js';
import {
    Container, InnerContainer, AppLogo, PageTitle, SubHeading, FormArea, StyledButton, ButtonText, Colors, MsgBox,
    Line, ExtraView, ExtraText, TextLink, TextLinkContent
} from '../components/styles.js';

// Keyboard Averse Wrapper
import KeyboardAverseWrapper from '../components/KeyboardAverseWrapper.js';

// Colors
const { platinum, green } = Colors;

// Formik
import { Formik } from 'formik';

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <KeyboardAverseWrapper>
            <Container color={green}>
                <StatusBar style="light" />
                <InnerContainer color={green}>
                    <AppLogo resizeMode="cover" source={require('../assets/images/cityLogo.jpg')} />
                    <PageTitle>COUNTY LICENSE MANAGER</PageTitle>
                    <SubHeading>Sign In</SubHeading>
                    <Formik
                        initialValues={{ id_number: '', password: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                            navigation.navigate('Home')
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <FormArea>
                                <MyTextInput
                                    label="Id Number"
                                    placeholder="e.g 12345678"
                                    placeholderTextColor={platinum}
                                    iconName="User"
                                    onChangeText={handleChange('id_number')}
                                    onBlur={handleBlur('id_number')}
                                    value={values.id_number}
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
                                <Line />
                                <ExtraView>
                                    <ExtraText>Don't have an account?</ExtraText>
                                    <TextLink onPress={()=> navigation.navigate('SignUp')}>
                                        <TextLinkContent>Sign Up</TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </FormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </Container>
        </KeyboardAverseWrapper>
    )
}



export default Login;