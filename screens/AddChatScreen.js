import React, { useLayoutEffect, useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Icon } from "react-native-elements";
import { auth, db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a New Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };
  return (
    <View stye={styles.container}>
      <Input
        placeholder="Enter a chat Name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={<Icon name="sc-telegram" type="evilicon" color="#517fa4" />}
      ></Input>
      <Button onPress={createChat} title="Create new Chat"></Button>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    padding: 30,
  },
});
