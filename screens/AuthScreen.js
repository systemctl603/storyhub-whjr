import React from "react";
import { View, TextInput, StyleSheet, Alert, Button } from "react-native";
import { Title } from "react-native-paper";
import { auth } from "../firebase.conf";

export default function AuthScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  navigation.setOptions({ tabBarVisible: false });

  async function login() {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("Write Story"))
      .catch((err) => {
        Alert.alert("Error: Login process failed");
        console.log(err);
      });
  }
  return (
    <View style={styles.container}>
      <Title>Login</Title>
      <TextInput
        style={styles.input}
        placeholder="Input Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Input Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <View style={{ marginTop: "50px" }}></View>
      <Button title="Submit" onPress={() => login()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: "10px",
    minWidth: "10rem",
  },
});
