import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const List_Of_Blog_Posts_2 = () => {
  const posts = [
    {
      id: 1,
      title: "New Post 1",
      image:
        "https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg",
      author: "Alice Smith",
      date: "April 15, 2024",
      excerpt:
        "This is the excerpt for the first new post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "New Post 2",
      image:
        "https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg",
      author: "Bob Johnson",
      date: "April 16, 2024",
      excerpt:
        "This is the excerpt for the second new post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "New Post 3",
      image:
        "https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg",
      author: "Charlie Brown",
      date: "April 17, 2024",
      excerpt:
        "This is the excerpt for the third new post. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 4,
        title: "New Post 4",
        image:
          "https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg",
        author: "Charlie Brown",
        date: "April 17, 2024",
        excerpt:
          "This is the excerpt for the fourth new post. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
  ];

  return (
    <ScrollView>
      {posts.map((post) => (
        <TouchableOpacity key={post.id} style={styles.post}>
          <Image source={{ uri: post.image }} style={styles.postImage} />
          <View style={styles.postContent}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postMeta}>
              by {post.author} | {post.date}
            </Text>
            <Text style={styles.postExcerpt}>{post.excerpt}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
  },
  postContent: {
    padding: 20,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  postMeta: {
    fontSize: 14,
    color: "#999",
    marginBottom: 10,
  },
  postExcerpt: {
    fontSize: 14,
  },
});

export default List_Of_Blog_Posts_2;
