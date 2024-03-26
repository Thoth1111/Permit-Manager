import React from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Icon from 'react-native-feather';

// Styled components
import { Container, InnerContainer, CardContainer, CardView, CardTitle, Colors, Line, PageTitle, SubHeading,
LicenseListsView
} from '../components/styles'

const { green, platinum } = Colors

const Home = ({ navigation }) => {
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
        <LicenseListsView>
          <SubHeading color={platinum} >Upcoming Payments</SubHeading>
        </LicenseListsView>
      </InnerContainer>
    </Container>
  )
}

export default Home