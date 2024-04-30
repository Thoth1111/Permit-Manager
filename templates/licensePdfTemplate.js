import { Buffer } from 'buffer';
import * as FileSystem from 'expo-file-system';
import { Colors } from '../components/styles';
import { formatDate } from '../helpers/dateFormatter';

const numWords = require('num-words');
const { green, jet } = Colors;

const generateLicensePDFContent = async (licenseDetails) => {
    const qrUri = `data:image/png;base64,${Buffer.from(licenseDetails.qr_code_buffer.data).toString('base64')}`;
    const logoPath = '../assets/splash_city_logo.png';
    const init_date = formatDate(licenseDetails.effective_date)
    const end_date = formatDate(licenseDetails.expiry_date)

    try {
        const logoBase64 = await FileSystem.readAsStringAsync(logoPath, {
            encoding: FileSystem.EncodingType.Base64        
        })
        const logoUri = `data:image/png;base64,${logoBase64}`;

        return `
            <html>
                <body>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: start; color: ${green}; font-weight: bold; padding: 20px;">
                        <section style="display: flex; flex-direction: row; align-items: center; justify-content: center; width: 98%; gap: 50px; margin-top: 10px; padding: 5px;">
                            <div>
                                <img src="${logoUri}" style="width: 100px; height: 100px; border-radius: 50px;" alt="City Logo"/>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: start; justify-content: center; gap: 2px;">
                                <h1 style="font-size: 20px;">N**** CITY COUNTY</h1>
                                <h2 style="font-size: 16px;">SINGLE BUSINESS PERMIT</h2>
                            </div>
                        </section>
                        <section style="flex-direction: column; align-items: center; justify-content: center; font-size: 12px; margin-top: 20px; width: 98%; padding: 0;">
                            <table style="margin-left: auto; border-collapse: collapse; font-weight: bold; align-self: end;">
                                <tr>
                                    <td style="border: 1px solid ${jet}; padding: 5px;">Effective Date:</td>
                                    <td style="border: 1px solid ${jet}; padding: 5px;">${init_date}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid ${jet}; padding: 5px;">Expiry Date:</td>
                                    <td style="border: 1px solid ${jet}; padding: 5px;">${end_date}</td>
                                </tr>
                            </table>
                        </section>
                        <section style="display: flex; flex-direction: column; border: 1px solid ${jet}; justify-content: center; gap:2px; font-size: 12px; margin-top: 20px; width: 98%; padding: 5px;">
                            <p>Applicant/Business/Commercial Name:  ${licenseDetails.business_name.toUpperCase()}</p>
                            <p>KRA Pin:  ${licenseDetails.kra_pin}</p>
                            <p>Business ID:  ${licenseDetails.business_id}</p>
                        </section>
                        <section style=" display: flex; flex-direction: column; border: 1px solid ${jet}; justify-content: center; gap:2px; font-size: 12px; margin-top: 10px; width: 98%; padding: 5px;">
                            <p>To engage in the activity/business/profession or Occupation of:<br>  Occupation/Profession/Activity</p>
                            <p>Activity Code:  ${licenseDetails.activity_code}</p>
                        </section>
                        <section style="display: flex; flex-direction: column; border: 1px solid ${jet}; justify-content: center; gap: 2px; font-size: 12px; margin-top: 10px; width: 98%; padding: 5px;">
                                <p>Having Paid a Business Permit Fee of: KES ${licenseDetails.fee.toLocaleString()}<br><br>
                                    Amount in words: ***${numWords(licenseDetails.fee)} shillings only***
                                </p>
                        </section>
                        <section style="display: flex; flex-direction: column; border: 1px solid ${jet}; justify-content: center; gap: 2px; font-size: 12px; margin-top: 10px; width: 98%; padding: 5px;">
                            <p>Business under this permit shall be conducted at the address as indicated below:</p>
                            <div style="display: flex; flex-direction: row; gap: 10px; width: 98%; align-items: center;">
                                <p>Plot Number:  ${licenseDetails.location.plot_number}</p>
                                <p>Road/Street:  ${licenseDetails.location.road_street}</p>
                            </div>
                            <div style="display: flex; flex-direction: row; gap: 10px; width: 98%; align-items: center;">
                                <p>Building:  ${licenseDetails.location.building}</p>
                                <p>Floor:  ${licenseDetails.location.floor}</p>
                            </div>
                            <p>Door/Stall No:  ${licenseDetails.location.stall_number}</p>
                        </section>
                        <section style="display: flex; flex-direction: column; border: 1px solid ${jet}; align-items: center; justify-content: center; font-size: 12px; margin-top: 10px; width: 98%; padding: 5px;">
                            <p style="margin-right: auto;">By order of:</p>
                            <img style="width: 200px; height: 200px; margin-left: auto;" src=${qrUri} alt="QR Code Image" />
                        </section>
                    </div>
                </body>
            </html>
    `;
    } catch (error) {
        console.log(`Error generating license PDF content: ${error}`);
        return null;
    }
}

export { generateLicensePDFContent };