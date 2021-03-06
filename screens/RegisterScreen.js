import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Text, Image } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://thumbs.dreamstime.com/b/man-icon-person-vector-worker-162495520.jpg",
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal Account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        ></Input>

        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></Input>

        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></Input>

        <Input
          placeholder="Profile Picture (Optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        ></Input>
      </View>
      <br></br>
      <Button
        title="Register"
        onPress={register}
        containerStyle={styles.button}
      />
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
  },
});
