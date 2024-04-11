import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SelectList } from 'react-native-dropdown-select-list'
import { Container, InnerContainer, Colors } from '../components/styles';

const { green, yellow } = Colors;

const PayAction = () => {
    const Licenses = useSelector(state => state.licenses)
    const selectionList = Licenses.map(license => {
        return {
            value: license.business_name,
            id: license._id
        }
    })
    const [newPayment, setNewPayment] = useState({
        license_id: '',
        extension_period: '',
        phone_number: '',
        amount: '',
    })

    return (
        <Container>
            <InnerContainer>
                <SelectList
                    placeholder="Choose License"
                    data={selectionList}
                    setSelected={(selected) => {
                        setNewPayment({
                            ...newPayment,
                            license_id: selected.id
                        })
                    }}
                />
            </InnerContainer>
        </Container>
    )
}

export default PayAction;