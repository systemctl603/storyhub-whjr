import React from "react";
import { Text, View } from "react-native";
import { Appbar, Card } from "react-native-paper";
import { SearchBar } from "react-native-elements";
import { db } from "../firebase.conf";

export default function ReadStory() {
  const [search, setSearch] = React.useState("");
  const [stories, setStories] = React.useState([]);

  async function handleSearch(text) {
    setSearch(text);
    var list = await db.collection("/stories").where("title", "==", text).get();
    var data = [];
    list.docs.map((doc) => {
      data.push(doc.data());
    });
    console.log(data);
    setStories(data);
  }

  return (
    <View>
      <SearchBar
        placeholder="Type Here"
        value={search}
        onChangeText={handleSearch}
      />
      {stories.map((story) => (
        <Card>
          <Card.Title title={story.title} subtitle={`By: ${story.author}`} />
        </Card>
      ))}
    </View>
  );
}
