import React, { useEffect, useCallback, useContext, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import {
  Container, InnerContainer, CardContainer, CardView, CardTitle, Colors, Line, PageTitle, SubHeading,
  ListsView, IconView
} from '../components/styles'
import { UserContext } from '../components/UserContext';
import { getAllLicenses } from '../API/licenseRequests';
import { filteredLicenses } from '../redux/selectors';
import DueList from '../components/DueList';

const { green, red, amber } = Colors

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const dispatch = useDispatch();
  const dueLicenses = useSelector(filteredLicenses);

  const fetchLicenses = useCallback(() => {
    setLoading(true);
    getAllLicenses(userData, setLoading, dispatch, setUserData)
  }, [userData, dispatch]);

  const handleColorAlerts = (expiry_date) => {
    const expiryDate = new Date(expiry_date);
    const today = new Date();
    const timeDiff = expiryDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
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
        <CardContainer>
          <Line />
          <CardView onPress={() => navigation.navigate('Licenses')}>
            <CardTitle>Licenses</CardTitle>
          </CardView>
          <CardView onPress={() => navigation.navigate('Payments')}>
            <CardTitle>Payments</CardTitle>
          </CardView>
          <CardView onPress={() => navigation.navigate('Account')}>
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
                  _id={license._id}
                  expiryDate={license.expiry_date}
                  navigation={navigation}
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