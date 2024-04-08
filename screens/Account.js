import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import * as Icon from 'react-native-feather'
import { Container, InnerContainer, PageTitle, CardContainer, Line, CardView, ButtonText, Colors } from '../components/styles'
import { UserContext } from '../components/UserContext'
import { logoutUser } from '../API/userRequests'
const { green } = Colors

const Account = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { userData, setUserData } = useContext(UserContext);
  const { id_number } = userData

  const handleLogout = () => {
    setLoading(true);
    logoutUser(id_number, setLoading, dispatch, setUserData);
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
            <CardView onPress={handleLogout} style={{ flexDirection: 'row' }}>
              <Icon.LogOut size={50} color={green} />
              <ButtonText>Log Out</ButtonText>
            </CardView>
            <Line />
          </CardContainer>
        )}
      </InnerContainer>
    </Container>
  )
}

export default Account