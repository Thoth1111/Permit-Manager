import React from 'react';
import { Text } from 'react-native';
import { Container, InnerContainer, Colors } from '../components/styles';

const MyLicense = ({ route }) => {
    const { license } = route.params;
    console.log(license)
    return (
        <Container >
            <InnerContainer>
                <Text>License Details</Text>
            </InnerContainer>
        </Container>
    )
}

export default MyLicense;