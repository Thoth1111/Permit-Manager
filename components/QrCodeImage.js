import React from 'react';
import { Buffer } from 'buffer';
import { QRCodeView } from './styles';

const QrCodeImage = ({ qrCodeBuffer }) => {
    const qrUri = `data:image/png;base64,${Buffer.from(qrCodeBuffer.data).toString('base64')}`;
    return (
        <QRCodeView source={{ uri: qrUri }}/>        
    )
}

export default QrCodeImage;