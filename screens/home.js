import React, { useEffect, useCallback, useContext, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import * as Icon from 'react-native-feather';
import {
  Container, InnerContainer, CardContainer, CardView, CardTitle, Colors, Line, PageTitle, SubHeading,
  ListsView, FittedContainer
} from '../components/styles'
import { UserContext } from '../components/UserContext';
import { getAllLicenses } from '../API/licenseRequests';
import { filteredLicenses } from '../redux/selectors';
import { saveLicenses } from '../redux/licenseSlice';
import DueList from '../components/DueList';

const { green, red, amber } = Colors

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { userData } = useContext(UserContext);
  const dispatch = useDispatch();
  const dueLicenses = useSelector(filteredLicenses);

  const fetchLicenses = useCallback(() => {
    setLoading(true);
    getAllLicenses(userData.refreshToken, setLoading, setLicenseState)
  }, [userData, dispatch]);

  const setLicenseState = (incomingLicenses) => {
    dispatch(saveLicenses(incomingLicenses));
  }

  const handleColorAlerts = (expiry_date) => {
    const expiryDate = new Date(expiry_date);
    const today = new Date();
    const timeDiff = expiryDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    console.log(`Days diff: ${daysDiff}, Expiry Date: ${expiryDate}`)
    if (daysDiff <= 0) {
      return red;
    }
    return amber;;
  }

  useEffect(() => {
    fetchLicenses();
  }, [fetchLicenses]);

  return (
    <Container isWhite={true}>
      <StatusBar style="dark" />
      <InnerContainer isWhite={true}>
        <PageTitle color={green}>Welcome</PageTitle>
        <CardContainer>
          <Line />
          <CardView onPress={() => navigation.navigate('Licenses')}>
            <Icon.Folder size={50} color={green} />
            <CardTitle>Licenses</CardTitle>
          </CardView>
          <CardView onPress={() => navigation.navigate('Payments')}>
            <Icon.CreditCard size={50} color={green} />
            <CardTitle>Payments</CardTitle>
          </CardView>
          <CardView onPress={() => navigation.navigate('Account')}>
            <Icon.Tool size={50} color={green} />
            <CardTitle>Account</CardTitle>
          </CardView>
          <Line />
        </CardContainer>
        <ListsView>
          <SubHeading color={green} >Renewals Due</SubHeading>
          {loading ? (
            <ActivityIndicator size="large" color={green} />
          ) : (
            <>
              {dueLicenses.length > 0 && dueLicenses.map((license, i) => (
                <DueList
                  key={i}
                  color={handleColorAlerts(license.expiry_date)}
                  businessName={license.business_name}
                  expiryDate={license.expiry_date}
                  // onPress={() => navigation.navigate('License', { license })}
                />
              ))}
            </>
          )}
        </ListsView>
      </InnerContainer>
    </Container>
  )
}

export default Home