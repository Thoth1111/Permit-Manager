import React from 'react';
import * as Icon from 'react-native-feather';
import { ListContainer, SectionView, MidSectionView, SectionText, SectionDate, Colors, RowedView } from './styles';
import { formatDate } from '../helpers/dateFormatter';

const { jet, white } = Colors;

const DueList = ({ color, _id, businessName, expiryDate, navigation }) => {

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
                        <SectionDate color={color ? color : jet}>{formatDate(expiryDate)}</SectionDate>
                    </RowedView>
                </MidSectionView>
                <SectionView>
                    <Icon.MoreVertical size={50} color={jet} />
                </SectionView>
            </ListContainer>
    )
}

export default DueList;