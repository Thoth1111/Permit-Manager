import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as Icon from 'react-native-feather'
import { Container, InnerContainer, PageTitle, SubHeading, ListsView, Line, Colors, CardContainer, FittedContainer,
    FloatingButton, StyledButton, ButtonText, CardView, CardTitle 
} from '../components/styles'
import LicenseForm from '../components/LicenseForm';

const { green, platinum } = Colors;

const Licenses = () => {
    const [newLicense, setNewLicense] = useState(false)
    const Licenses = useSelector(state => state.licenses)

    const closeForm = () => {
        setNewLicense(false)
    }

    return (
        <Container >
            <InnerContainer>
                <PageTitle color={green}>Your Licenses</PageTitle>
                <CardContainer>
                    <Line />
                    {newLicense ? (
                        <FittedContainer>
                            <FloatingButton onPress={() => setNewLicense(false)} >
                                <Icon.X size={30} color={green} />
                            </FloatingButton>
                            <LicenseForm closeForm={closeForm} />
                        </FittedContainer>
                    ) : (
                        <StyledButton onPress={() => setNewLicense(true)} style={{ flexDirection: 'row' }}>
                            <Icon.FilePlus size={50} color={green} />
                            <ButtonText>Add A License</ButtonText>
                        </StyledButton>
                    )}
                    <Line />
                </CardContainer>
                <ListsView>
                    <SubHeading color={platinum} >Saved Licenses</SubHeading>
                    {Licenses.length > 0 && Licenses.map((license, i) => (
                        <FittedContainer key={i}>
                            {/* <Line /> */}
                            {/* <CardView onPress={() => navigation.navigate('License', { license })}> */}
                            <CardView>
                                <Icon.FileText size={50} color={green} />
                                <CardTitle>{license.business_name}</CardTitle>
                            </CardView>
                            <Line />
                        </FittedContainer>
                    ))}
                </ListsView>
            </InnerContainer>
        </Container >
    )
}

export default Licenses