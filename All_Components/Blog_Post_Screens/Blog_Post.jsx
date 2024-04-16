import React from "react";
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from "react-native";

const BlogPost = () => {
  const post = {
    comments: [
      {
        id: 1,
        author: "Jane Doe",
        authorAvatar: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Great post!",
      },
      {
        id: 2,
        author: "John Smith",
        authorAvatar: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I agree, this was very informative and well-written.",
      },
    ],
    relatedPosts: [
      {
        id: 2,
        title: 'The Dark Knight (2008) Review — The Batman Project',
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/0*8tDfUFXS3xVewkdx.jpg',
      },
      {
        id: 3,
        title: '“Feeding the Dark Knight: A Peek into Batman’s Balanced Life”',
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*1olXlNbJTvCzTp1uiXNeTg.png',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        The Dark Knight Rises (2012) Review — The Batman Project
      </Text>
      <Text style={styles.subtitle}>
        Broken backs, questionable audio, Dickens, Catwoman. We are in for a
        show tonight.
      </Text>
      <View style={styles.postOwnerProfile}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
        <View>
          <View style={styles.postOwnerProfileText}>
            <Text style={styles.postOwnerProfileName}>Darren Zouga</Text>
            <Text style={styles.postOwnerProfileFollow}> · Follow</Text>
          </View>
          <Text style={styles.postOwnerProfileTime}>
            9 min read · 14 days ago
          </Text>
        </View>
      </View>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6q9q0DQhnHGGBR4W1vrC_YIiBVXNtDnRYxg&s",
        }}
        style={styles.image}
      />
      <Text style={styles.content}>
        The most flawed entry in Christopher Nolan’s seminal trilogy packs a
        hell of a punch.
      </Text>
      <Text style={styles.content}>
        Welcome back to The Batman Project, where we look at our favorite
        nocturnal mammalian vigilante’s adventures, as well as…
      </Text>
      <Text style={styles.sectionTitle}>Comments</Text>
      <FlatList
        data={post.comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Image source={{ uri: item.authorAvatar }} style={styles.avatar} />
            <View style={styles.commentTextContainer}>
              <Text style={styles.commentAuthor}>{item.author}</Text>
              <Text style={styles.commentText}>{item.text}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.sectionTitle}>Related Posts</Text>
      <FlatList
        data={post.relatedPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.relatedPostContainer}>
            <Image source={{ uri: item.image }} style={styles.relatedPostImage} />
            <Text style={styles.relatedPostTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: "#454545",
  },
  postOwnerProfile: {
    flexDirection: "row",
    marginTop: 15,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 50,
    marginRight: 10,
  },
  postOwnerProfileText: {
    flexDirection: "row",
  },
  postOwnerProfileName: {
    fontWeight: "bold",
  },
  postOwnerProfileFollow: {
    fontWeight: "500",
    color: "#097969",
  },
  postOwnerProfileTime: {
    fontSize: 12,
  },
  image: {
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
  },
  content: {
    marginBottom: 5,
  },
  sectionTitle: {
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  commentContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  commentTextContainer: {
    marginLeft: 3,
  },
  commentAuthor: {
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    fontSize: 13,
  },
  relatedPostContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  relatedPostImage: {
    width: 45,
    height: 45,
  },
  relatedPostTitle: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight:'500'
  },
});

export default BlogPost;
