import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./src/Header";
import Myprofile from "./src/Myprofile";
import { myProfile } from "./src/data";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Myprofile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 30,
    // paddingLeft: 10,
  },
});
