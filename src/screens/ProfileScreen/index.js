import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import { Auth } from 'aws-amplify'

const ProfileScreen = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => Auth.signOut()}>
        <View style={{flexDirection:"row"}}>
          <Entypo name="log-out" size={24} color="black" />
          <Text style={{color:"black", fontSize:20}}> Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen