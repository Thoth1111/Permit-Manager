import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import MyTextInput from '../components/MyTextInput.js';

// Formik
import { Formik } from 'formik';

// Styled Components
import { Container, InnerContainer, AppLogo, PageTitle, SubHeading, FormArea, StyledButton, ButtonText, Colors, MsgBox,
    Line, ExtraView, ExtraText, TextLink, TextLinkContent
} from '../components/styles';

// Colors
const { platinum } = Colors;

const SignUp = () => {
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <Container>
            <StatusBar style="light" />
            <InnerContainer>
                <PageTitle>COUNTY LICENSE MANAGER</PageTitle>
                <SubHeading>Register</SubHeading>
                <Formik
                    initialValues = {{ id_number:'', phone_number:'', password:'', confirm_password:'' }}
                    onSubmit = {(values) => {
                        console.log(values);
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
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
                            <Line />
                            <ExtraView>
                                <ExtraText>Already have an account?</ExtraText>
                                <TextLink>
                                    <TextLinkContent>Sign In</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </FormArea>
                    )}
                </Formik>
            </InnerContainer>
        </Container>
    )
}



export default SignUp;