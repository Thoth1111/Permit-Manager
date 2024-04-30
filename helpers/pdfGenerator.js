import * as FileSystem from 'expo-file-system';
import * as Print from 'expo-print';
import * as IntentLauncher from 'expo-intent-launcher';
import { generateLicensePDFContent } from '../templates/licensePdfTemplate';

const openDownloadedPDF = async (filePath) => {
    try {
        const contentUri = await FileSystem.getContentUriAsync(filePath);
        await IntentLauncher.startActivityAsync(
            'android.intent.action.VIEW', 
            {
                data: contentUri,
                flags: 1,
                type: 'application/pdf',
            }
        );
    } catch (error) {
        console.error(`Error opening PDF: ${error}`);
    }
};

export const getLicensePDF = async (licenseDetails) => {
    try {
        const htmlContent = generateLicensePDFContent(licenseDetails);
        const { uri } = await Print.printToFileAsync({ html: htmlContent });
        const fileName = `${licenseDetails.business_name}.pdf`;
        const fileUri = `${FileSystem.documentDirectory}${fileName}`;
        await FileSystem.copyAsync({ from: uri, to: fileUri });
        console.log(`License saved to ${fileUri}`);
        openDownloadedPDF(fileUri);
    } catch (error) {
        console.error(`Error generating and saving license: ${error}`);
    }
};