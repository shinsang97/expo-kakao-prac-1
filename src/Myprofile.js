import { View, Image, Text } from "react-native";

export default (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: props.uri }}
        style={{ width: 50, height: 50, borderRadius: 20 }}
      />
      <View style={{}}>
        <Text>{props.name}</Text>
        <Text>{props.introduction}</Text>
      </View>
    </View>
  );
};
