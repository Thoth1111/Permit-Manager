import React from 'react';
import { StatusBar } from 'expo-status-bar';

// Formik
import { Formik } from 'formik';

import {
    Container,
    InnerContainer,
    AppLogo,
    PageTitle,
    SubHeading,
    FormArea
} from '../components/styles';

const Login = () => {
    return (
        <Container>
            <StatusBar style="light" />
            <InnerContainer>
                <AppLogo resizeMode="cover" source={require('../assets/images/cityLogo.jpg')} />
                <PageTitle>COUNTY LICENSE MANAGER</PageTitle>
                <SubHeading>Sign In</SubHeading>
                <Formik
                    initialValues = {{ email:'', password:'' }}
                    onSubmit = {(values) => {
                        console.log(values);
                    }}
                >
                    {(handleChange, handleBlur, handleSubmit, values) => (
                        <FormArea>

                        </FormArea>
                    )}
                </Formik>
            </InnerContainer>
        </Container>
    )
}

export default Login;