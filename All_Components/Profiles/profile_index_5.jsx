import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default profile_index_5 = () => {
  const optionList = [
    {
      id: 1,
      color: "#20B2AA",
      icon: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "John Doe",
      tags: [
        "programming",
        "web development",
        "JavaScript",
        "React",
        "Node.js",
      ],
    },
    {
      id: 2,
      color: "#20B2AA",
      icon: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jane Smith",
      tags: ["design", "graphic design", "UI/UX", "Adobe Creative Suite"],
    },
    {
      id: 3,
      color: "#20B2AA",
      icon: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Michael Johnson",
      tags: [
        "data science",
        "machine learning",
        "Python",
        "TensorFlow",
        "NumPy",
      ],
    },
    {
      id: 4,
      color: "#20B2AA",
      icon: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      name: "Emily Brown",
      tags: ["mobile app development", "iOS", "Swift", "Android", "Kotlin"],
    },
    {
      id: 5,
      color: "#20B2AA",
      icon: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daniel Wilson",
      tags: ["game development", "Unity", "C#", "3D modeling", "Blender"],
    },
    {
      id: 6,
      color: "#20B2AA",
      icon: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sophia Lee",
      tags: ["art", "illustration", "painting", "digital art"],
    },
    {
      id: 7,
      color: "#20B2AA",
      icon: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      name: "David Garcia",
      tags: [
        "photography",
        "photo editing",
        "Adobe Lightroom",
        "Adobe Photoshop",
      ],
    },
    {
      id: 8,
      color: "#20B2AA",
      icon: "https://images.unsplash.com/photo-1512663150964-d8f43c899f76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      name: "Olivia Martinez",
      tags: ["content writing", "copywriting", "blogging", "creative writing"],
    },
    {
      id: 9,
      color: "#20B2AA",
      icon: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Liam Rodriguez",
      tags: [
        "music production",
        "audio engineering",
        "FL Studio",
        "Ableton Live",
      ],
    },
  ];

  const [options, setOptions] = useState(optionList);
  const [query, setQuery] = useState();

  const cardClickEventListener = (item) => {
    Alert.alert(item.name);
  };

  const tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  };

  const renderTags = (item) => {
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={styles.btnColor}
          onPress={() => tagClickEventListener(tag)}
        >
          <Text>{tag}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <Feather
            name="search"
            size={25}
            color="#6D6D6D"
            style={[styles.icon, styles.inputIcon]}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Search..."
            underlineColorAndroid="transparent"
            onChangeText={(q) => setQuery(q)}
          />
        </View>
      </View>

      <FlatList
        style={styles.notificationList}
        data={options}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[styles.card, { borderColor: item.color }]}
              onPress={() => {
                cardClickEventListener(item);
              }}
            >
              <View style={styles.cardContent}>
                <Image
                  style={[styles.image, styles.imageContent]}
                  source={{ uri: item.icon }}
                />
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View style={[styles.cardContent, styles.tagsContent]}>
                {renderTags(item)}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
  formContent: {
    flexDirection: "row",
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 12,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    borderTopWidth: 40,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: "row",
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: "wrap",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: "#eee",
    marginTop: 5,
  },
});
