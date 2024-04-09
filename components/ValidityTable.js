import React from 'react';
import { DatesTable, DatesRow, DatesCell, DatesText, Colors } from './styles';
import { formatDate } from '../helpers/dateFormatter';

const { jet, white } = Colors;  

const ValidityTable = ({ effectiveDate, expiryDate}) => {
    const init_date = formatDate(effectiveDate)
    const end_date =  formatDate(expiryDate)
    const duration = Math.floor((new Date(expiryDate) - new Date(effectiveDate)) / (1000 * 60 * 60 * 24 * 30))

    return (
        <DatesTable>
            <DatesRow>
                <DatesCell>
                    <DatesText>Effective Date</DatesText>
                </DatesCell>
                <DatesCell
                    color={white}
                >
                    <DatesText color={jet}>{init_date}</DatesText>
                </DatesCell>
            </DatesRow>
            <DatesRow>
                <DatesCell>
                    <DatesText>Expiry Date</DatesText>
                </DatesCell>
                <DatesCell
                    color={white}
                >
                    <DatesText>{end_date}</DatesText>
                </DatesCell>
            </DatesRow>
            <DatesRow>
                <DatesCell>
                    <DatesText>Duration</DatesText>
                </DatesCell>
                <DatesCell
                    color={white}
                >
                    <DatesText>{duration} Months</DatesText>
                </DatesCell>
            </DatesRow>
        </DatesTable>
    )
}

export default ValidityTable;