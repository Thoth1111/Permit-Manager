import React, { useState, useContext } from 'react'
import { ActivityIndicator } from 'react-native'
import * as Icon from 'react-native-feather'
import { Container, InnerContainer, PageTitle, CardContainer, Line, StyledButton, ButtonText, Colors } from '../components/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserContext } from '../components/UserContext'
import { logoutUser } from '../API/userRequests'

const { green } = Colors

const Account = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const { userData, setUserData } = useContext(UserContext);
  const { id_number } = userData

  const clearUserData = () => {
    AsyncStorage.removeItem('userSessionData')
      .then(() => {
        setUserData(null)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleLogout = () => {
    setLoading(true);
    logoutUser(id_number, clearUserData, setLoading);
  }

  return (
    <Container>
      <InnerContainer>
        <PageTitle color={green}>Account</PageTitle>
        {loading ? (
          <ActivityIndicator size="large" color={green} />
        ) : (
          <CardContainer>
            <Line />
            <StyledButton onPress={handleLogout} style={{ flexDirection: 'row' }}>
              <Icon.LogOut size={50} color={green} />
              <ButtonText>Log Out</ButtonText>
            </StyledButton>
            <Line />
          </CardContainer>
        )}
      </InnerContainer>
    </Container>
  )
}

export default Account