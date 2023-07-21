import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 400, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "https://canopylab.com/wp-content/uploads/2020/05/Working-with-adaptive-quizzes-A-beginners-guide.jpg",
        }}
      />

      <View style={{ padding: 10 }}>
        <Text
          style={{
            textAlign: "center",
            color: '#F11A7B',
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          #ATTENTION!!! Rules You must know before begins.
        </Text>

        <View
          style={{
            padding: 10,
            backgroundColor: '#4FC0D0',
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: '#6554AF',
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              Every Corrected answer, you get 1 point.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#6554AF",
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              There is no go back previus opition available.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#6554AF",
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              You can not navigate through questions without answering.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#6554AF",
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              You will have 10 Second to answer each questions.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#6554AF",
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              It is compulsory to answer all the questions to proceed.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white" }}></Text>
            <Text
              style={{
                marginLeft: 120,
                color: "#F86F03",
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              GOOD LUCK!
            </Text>
          </View>
        </View>
      </View>
      

      <Pressable
      onPress={() => navigation.navigate("Quiz")}
        style={{
          backgroundColor:'#F11A7B',
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Start Quiz</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#6528F7',
  },
});