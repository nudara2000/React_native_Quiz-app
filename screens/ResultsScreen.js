import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Pressable,
    FlatList,
  } from "react-native";
  import React from "react";
  import { useRoute } from "@react-navigation/native";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  const ResultsScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    // console.log(route.params);
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Your Results</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 4,
            }}
          >
            <Text>Share</Text>
            <AntDesign
              style={{ marginLeft: 4 }}
              name="sharealt"
              size={18}
              color="black"
            />
          </View>
        </View>
  
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text>Questions Answered</Text>
          <Text>(5/5)</Text>
        </View>
  
        <Pressable
          style={{
            backgroundColor: '#A076F9',
            height: 500,
            borderRadius: 20,
            marginTop: 50,
            marginLeft:10,
            marginRight:10,
            padding:10
          }}
        >
          <Text
            style={{
              color:"black",
              fontSize: 18,
              fontWeight: "500",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Results Sheet
          </Text>
          <FlatList
            numColumns={2}
            data={route.params.answers}
            renderItem={({ item, i }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft:"auto",
                  marginRight:"auto"
                }}
              >
                <Text>{item.question}</Text>
                {item.answer === true ? (
                  <AntDesign style={{marginLeft:5}} name="checkcircle" size={20} color='#AED8CC' />
                ) : (
                  <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color='#982176' />
                )}
              </View>
            )}
          />
  
          <Pressable
           onPress={() => navigation.navigate("Home")}
           style={{backgroundColor:'#F11A7B',padding:8,marginLeft:"auto",marginRight:"auto",marginBottom:20,borderRadius:5}}>
            <Text style={{color:"white",textAlign:"center"}}>Continue</Text>
          </Pressable>
        </Pressable>
      </SafeAreaView>
    );
  };
  
  export default ResultsScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6528F7', 
    },
  });