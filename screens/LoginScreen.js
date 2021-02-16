import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, StatusBar } from "react-native";
import { View, Text } from "react-native";
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/4/4f/Signal_Blue_Icon.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <br></br>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autofocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Password"
          secureTextEntryw
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title="Log In" onPress={signIn} containerStyle={styles.button} />

      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
        type="outline"
        containerStyle={styles.button}
      />
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
