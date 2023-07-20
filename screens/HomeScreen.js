import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{marginTop:50}}>
     <Image style = {{height:400,width:470,resizeMode:"contain"}}
      source={{uri: "https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg"}}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})