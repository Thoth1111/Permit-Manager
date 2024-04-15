import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Icon from 'react-native-feather'
import {
    Container, InnerContainer, SubHeading, ListsView, Line, Colors, CardContainer, CardView, FittedContainer,
    FloatingButton, ButtonText, InnerScrollView
} from '../components/styles'
import LicenseForm from '../components/LicenseForm';
import DueList from '../components/DueList';
import { addLicense } from '../redux/licenseSlice';
import KeyboardAverseWrapper from '../components/KeyboardAverseWrapper.js';

const { green, red, amber } = Colors;

const Licenses = ({ navigation }) => {
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
                        <CardView onPress={() => setNewLicense(true)} style={{ flexDirection: 'row' }}>
                            <ButtonText>Add A License</ButtonText>
                        </CardView>
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
                            _id={license._id}
                            expiryDate={license.expiry_date}
                            navigation={navigation}
                        />
                    ))}
                </ListsView>
            </InnerContainer>
        </Container >
    )
}

export default Licenses