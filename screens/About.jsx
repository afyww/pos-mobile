import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function About() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>About</Text>
      <Button title="go home" onPress={() => navigation.navigate("home")} />
    </View>
  );
}
