import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';
import { FormArea, StyledButton, ButtonText, FittedContainer, Colors } from './styles';
import MyTextInput from './MyTextInput';
import { addLicense } from '../API/licenseRequests';
import { demoLicenses } from '../API/demoRequests';
import { UserContext } from './UserContext';
import { validateBusinessId } from '../helpers/validations';

const { green, platinum } = Colors;

const LicenseForm = ({ closeForm }) => {
    const [loading, setLoading] = useState(false);
    const { userData, setuserData } = useContext(UserContext);
    const dispatch = useDispatch();

    const handleRetrieve = (id) => {
        if (validateBusinessId(id)) {
            setLoading(true)
            const userLicenseInfo = demoLicenses.find(userLicense => userLicense.user_id === userData.id_number && userLicense.license_info.business_id === id)
            if (userLicenseInfo) {
                const license = userLicenseInfo.license_info
                addLicense(license, userData, setLoading, dispatch, closeForm, setuserData)
            } else {
                alert('License not found')
                setLoading(false)
            }
        } 
        return;
    }

    return (
        <FittedContainer>
            <Formik
                initialValues={{ business_id: '' }}
                onSubmit={(values) => {
                    handleRetrieve(values.business_id)
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <FormArea>
                        <MyTextInput
                            label="Business ID"
                            placeholder="Enter Business ID"
                            placeholderTextColor={platinum}
                            onChangeText={handleChange('business_id')}
                            onBlur={handleBlur('business_id')}
                            value={values.business_id}
                            keyboardType="numeric"
                        />
                        {loading ? (
                            <StyledButton disabled={true}>
                                <ActivityIndicator size="large" color={green} />
                            </StyledButton>
                        ) : (
                            <StyledButton onPress={handleSubmit} >
                                <ButtonText>Find & Save </ButtonText>
                            </StyledButton>
                        )}
                    </FormArea>
                )}
            </Formik>
        </FittedContainer>
    )
}

export default LicenseForm;