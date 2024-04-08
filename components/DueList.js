import React from 'react';
import * as Icon from 'react-native-feather';
import { ListContainer, SectionView, MidSectionView, SectionText, SectionDate, Colors, RowedView } from './styles';

const { jet, white } = Colors;

const DueList = ({ color, _id, businessName, expiryDate, navigation }) => {
    
    const handleDateFormat = (fullDate) => {
        const date = new Date(fullDate)
        const year = date.getFullYear();
        const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
        const day = new Date(fullDate).getDate();

        return `${day} - ${month} - ${year}`
    }

    const handleLicenseSelection = (_id) => {
        navigation.navigate('MyLicense', { _id: _id });
    }

    return (
            <ListContainer onPress={()=> handleLicenseSelection(_id) }>
                <SectionView>
                    <Icon.AlertTriangle size={50} color={color ? color : white} />
                </SectionView>
                <MidSectionView>
                    <SectionText>{businessName.toUpperCase()}</SectionText>
                    <RowedView>
                        <SectionText style={{fontWeight: 'normal'}}>Expires:</SectionText>
                        <SectionDate color={color ? color : jet}>{handleDateFormat(expiryDate)}</SectionDate>
                    </RowedView>
                </MidSectionView>
                <SectionView>
                    <Icon.MoreVertical size={50} color={jet} />
                </SectionView>
            </ListContainer>
    )
}

export default DueList;