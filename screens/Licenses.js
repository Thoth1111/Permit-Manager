import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Icon from 'react-native-feather'
import { Container, InnerContainer, PageTitle, SubHeading, ListsView, Line, Colors, CardContainer, FittedContainer,
    FloatingButton, StyledButton, ButtonText, CardView, CardTitle 
} from '../components/styles'
import LicenseForm from '../components/LicenseForm';
import DueList from '../components/DueList';
import { addLicense } from '../redux/licenseSlice';

const { green, platinum, red, amber } = Colors;

const Licenses = () => {
    const [newLicense, setNewLicense] = useState(false)
    const Licenses = useSelector(state => state.licenses)
    const dispatch = useDispatch()

    const closeForm = (license) => {
        setNewLicense(false);
        dispatch(addLicense(license));
    }

    const handleColorAlerts = (expiry_date) => {
        const expiryDate = new Date(expiry_date);
        const today = new Date();
        const timeDiff = expiryDate - today;
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        console.log(`Days diff: ${daysDiff}, Expiry Date: ${expiryDate}`)
        if (daysDiff <= 0) {
          return red;
        } else if (daysDiff <= 30) {
        return amber;
        }
        return;
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
                    <SubHeading color={green} >Saved Licenses</SubHeading>
                    {Licenses.length > 0 && Licenses.map((license, i) => (
                        <DueList 
                            key={i}
                            color={handleColorAlerts(license.expiry_date)}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                            businessName={license.business_name} 
                            expiryDate={license.expiry_date} 
                        />
                    ))}
                </ListsView>
            </InnerContainer>
        </Container >
    )
}

export default Licenses