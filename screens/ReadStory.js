import React from "react";
import { FlatList, Text, View } from "react-native";
import { Appbar, Card } from "react-native-paper";
import { SearchBar } from "react-native-elements";
import { db } from "../firebase.conf";

export default function ReadStory() {
  const [search, setSearch] = React.useState("");
  const [fetchedStories, setFetchedStories] = React.useState([]);
  const [stories, setStories] = React.useState([]);

  var item = ({ item: story }) => {
    console.log(story);
    return (
      <Card>
        <Card.Title title={story.title} subtitle={`By: ${story.author}`} />
      </Card>
    );
  };

  React.useEffect(() => {
    var list = db
      .collection("/stories")
      .get()
      .then((list) => {
        var data = [];
        list.docs.map((doc) => {
          data.push(doc.data());
        });
        setFetchedStories(data);
      });
  }, []);

  async function handleSearch(text) {
    setSearch(text);
    var regex = new RegExp(text);
    var filteredData = fetchedStories.filter(
      (story) => story.title.match(regex) !== null
    );
    setStories(filteredData);
  }

  return (
    <View>
      <SearchBar
        placeholder="Type Here"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList data={stories} renderItem={item} />
    </View>
  );
}
