import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = (p) => {
  return (
    <View style={styles.header}>
      <Ionicons name={p.name} size={24} color="black" />
    </View>
  );
};

export default () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="md-musical-notes-outline" />
        <IconButton name="ios-settings-outline" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "lightgreen",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  header: {
    paddingHorizontal: 6,
  },
});
