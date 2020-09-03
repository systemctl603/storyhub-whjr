import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import { Appbar } from "react-native-paper";
import { db } from "../firebase.conf";

export default function WriteStory() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <KeyboardAvoidingView>
      <Appbar.Header>
        <Appbar.Content title="Story Hub" />
      </Appbar.Header>
      <TextInput
        style={styles.textinput}
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Author"
        onChangeText={(text) => setAuthor(text)}
      />
      <TextInput
        style={styles.contentinput}
        placeholder="Content"
        onChangeText={(text) => setContent(text)}
        multiline={true}
      />
      <View style={{ marginTop: "20px", marginHorizontal: "10px" }}>
        <Button
          title="Submit"
          onPress={() =>
            db.collection("stories").add({
              author,
              content,
              title,
            })
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textinput: {
    borderWidth: "2px",
    borderColor: "black",
    minHeight: "50px",
    fontSize: "25px",
    marginTop: "10px",
    marginBottom: "20px",
    marginHorizontal: "20px",
  },
  contentinput: {
    marginTop: "10px",
    borderWidth: "2px",
    borderColor: "black",
    minHeight: "25rem",
    fontSize: "25px",
    marginHorizontal: "20px",
  },
});
