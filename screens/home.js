import React from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Icon from 'react-native-feather';

// Styled components
import { Container, InnerContainer, ExtraText, CardContainer, CardView, CardTitle, Colors, Line, PageTitle, SubHeading,
LicenseDatesView
} from '../components/styles'

const { green, platinum } = Colors

const Home = ({ navigation }) => {
  return (
    <Container isWhite={true}>
      <StatusBar style="dark" />
      <InnerContainer isWhite={true}>
        <PageTitle color={green}>Manage Your Licenses</PageTitle>
        <CardContainer>
          <Line />
          <CardView>
            <Icon.Folder size={50} color={green} />
            <CardTitle>Licenses</CardTitle>
          </CardView>
          <CardView>
            <Icon.CreditCard size={50} color={green} />
            <CardTitle>Payments</CardTitle>
          </CardView>
          <CardView>
            <Icon.Tool size={50} color={green} />
            <CardTitle>Account</CardTitle>
          </CardView>
          <Line />
        </CardContainer>        
        <LicenseDatesView>
          <SubHeading color={platinum} >Upcoming Payments</SubHeading>
        </LicenseDatesView>
      </InnerContainer>
    </Container>
  )
}

export default Home