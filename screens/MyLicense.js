import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as Icon from 'react-native-feather';
import { Container, InnerScrollView, Colors, DeclarationText, SidedTable, SideTableRow, SideTableText, SideTableCell, LicenseStateContainer, StatusText, StampBox, FloatDownloader } from '../components/styles';
import { getLicensePDF } from '../helpers/pdfGenerator';
import ValidityTable from '../components/ValidityTable';
import LicenseBanner from '../components/LicenseBanner';
import DetailsTable from '../components/DetailsTable';
import { formatDate } from '../helpers/dateFormatter';
import QrCodeImage from '../components/QrCodeImage';

const numWords = require('num-words');
const { lime, white, red, green } = Colors;

const MyLicense = ({ route }) => {
    const { _id } = route.params;
    const [expired, setExpired] = useState(false);
    const licenses = useSelector(state => state.licenses);
    const license = licenses.find(license => license._id === _id)
    
    const licenseDetails = {
        business_name: license.business_name,
        kra_pin: license.kra_pin,
        business_id: license.business_id,
        activity_code: license.activity_code,
        fee: license.fee,
        location: license.location,
        effective_date: license.effective_date,
        expiry_date: license.expiry_date,
        qr_code_buffer: license.qr_code_buffer
    }

    const checkValidity = (expiry_date) => {
        const expiryDate = new Date(expiry_date);
        const today = new Date();
        const timeDiff = expiryDate - today;
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        if (daysDiff <= 0) {
            setExpired(true);
        } else {
            setExpired(false);
        }
    }

    useEffect(() => {
        checkValidity(license.expiry_date);
    }, []);

    return (
        <Container >
            <FloatDownloader onPress={()=> getLicensePDF(licenseDetails)}>
                <Icon.Download size={25} color={green} />
            </FloatDownloader>
            <InnerScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <LicenseBanner />
                <LicenseStateContainer>
                    <StatusText color={ expired ? `${red}` : `${lime}`}>
                        { expired ? 'EXP' : 'VAL' }
                    </StatusText> 
                    <ValidityTable
                        effectiveDate={license.effective_date}
                        expiryDate={license.expiry_date}
                    />
                </LicenseStateContainer>                
                <DeclarationText>
                    N**** City County grant this Business Permit to
                </DeclarationText>
                <DetailsTable
                    textBox1={`Applicant/Business/Commercial Name \n${license.business_name.toUpperCase()}`}
                    textBox2={`KRA Pin   ${license.kra_pin}`}
                    textBox3={`Business ID    ${license.business_id}`}
                />
                <DetailsTable
                    textBox1={'To engage in the activity/business/profession or Occupation of...'}
                    textBox2={'Occupation/Profession/Activity'}
                    textBox3={`Activity Code    ${license.activity_code}`}
                />
                <SidedTable>
                    <SideTableRow>
                        <SideTableText>
                            Having Paid a Business Permit Fee of KES {license.fee.toLocaleString()}
                        </SideTableText>
                    </SideTableRow>
                    <SideTableRow>
                        <SideTableText>
                            Amount in words   ***{numWords(license.fee)} shillings only***
                        </SideTableText>
                    </SideTableRow>
                </SidedTable>
                <SidedTable>
                    <SideTableRow>
                        <SideTableText>
                            Business under this permit shall be condicted at the address as indicated below
                        </SideTableText>
                    </SideTableRow>
                    <SideTableRow>
                        <SideTableCell>
                            <SideTableText>
                                Plot Number:   {license.location.plot_number}
                            </SideTableText>
                        </SideTableCell>
                        <SideTableCell color={white}>
                            <SideTableText>
                                Road/Street:   {license.location.road_street}
                            </SideTableText>
                        </SideTableCell>
                    </SideTableRow>
                    <SideTableRow>
                        <SideTableCell>
                            <SideTableText>
                                Building:   {license.location.building}
                            </SideTableText>
                        </SideTableCell>
                        <SideTableCell color={white}>
                            <SideTableText>
                                Floor:   {license.location.floor}
                            </SideTableText>
                        </SideTableCell>
                    </SideTableRow>
                    <SideTableRow>
                        <SideTableCell>
                            <SideTableText>
                                Door/Stall No:   {license.location.stall_number}
                            </SideTableText>
                        </SideTableCell>
                        <SideTableCell color={white}>
                            <SideTableText>
                                Date of Issue {formatDate(license.effective_date)}
                            </SideTableText>
                        </SideTableCell>
                    </SideTableRow>
                </SidedTable>
                <StampBox>
                    <SideTableText>
                        By order of
                    </SideTableText>
                    <QrCodeImage
                        qrCodeBuffer={license.qr_code_buffer}
                    />
                </StampBox>
            </InnerScrollView>
        </Container>
    )
}

export default MyLicense;