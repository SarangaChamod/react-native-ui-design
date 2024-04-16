import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { AntDesign, Foundation } from "@expo/vector-icons";

const List_Of_Blog_Posts = () => {
  const data = [
    {
      id: 1,
      title: "A JavaScript Interview Question That 90% of People Get Wrong",
      time: "2023-01-01 15:15 pm",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*2uQv_hlxKIIaFb3ckYXpqQ.png",
      description:
        "Did you think of an answer immediately? Hold on before you respond. Perhaps you’re already familiar with type conversions, but how do we calculate the length of the toString function? And how is the length of a normal function calculated",
      credit: "medium.com/ Awwwesssooooome",
    },
    {
      id: 2,
      title: "How musicians are fighting AI for fair wages",
      time: "2024-11-04 09:00 pm",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/0*59GSLjrfibr5iN6c",
      description:
        "It’s signed by over 200 big hitters in the music industry, including Billie Eilish, Smokey Robinson, Kacey Musgraves, Elvis Costello, Katy Perry, and even the estate of Frank Sinatra, whose voice has been a ubiquity in the “AI generated covers” trend. (This one of “Call Me Maybe” is particularly haunting.)",
      credit: "medium.com/ The Daily Edition",
    },
    {
      id: 3,
      title: "You can’t over-engineer success",
      time: "2024-02-05 12:21 pm",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/0*uT7W_oLY-POqVLan",
      description:
        " Typewriters are the ancestors of keyboards, which were instrumental in the creation of early computers. So, in a sense, typewriters are what we have to thank for our ability to make lots of things — and put more of ourselves into the world — today.",
      credit: "medium.com/ The Daily Edition",
    },
    {
      id: 4,
      title:
        "What We’re Reading: An eclipse, Easter and other spring traditions",
      time: "2024-03-12 12:00 pm",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*pEfKD37vJFGDq5XRPkOduA.png",
      description:
        "If you are writing about a refresh or a clearing out, I’d love to read the piece. Be sure to respond to this post with the link or include the tag “Spring Clean 2024” in the story and I’ll be sure to find it.",
      credit: "medium.com/ Awwwesssooooome",
    },
    {
      id: 5,
      title: "All the publications who came to Pub Crawl",
      time: "2021-05-09 12:24 pm",
      image:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Zg_u3A-SoUfBtp4kf76ATQ.jpeg",
      description:
        "If you are writing about a refresh or a clearing out, I’d love to read the piece. Be sure to respond to this post with the link or include the tag “Spring Clean 2024” in the story and I’ll be sure to find it.",
      credit: "medium.com/ Tony Stubblebine",
    },
    {
      id: 6,
      title:
        "Our curation team’s approach to keeping AI-generated content out of your recommendations",
      time: "2018-08-12 12:56 pm",
      image:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*341GB-y_zy2ZV9rYxuXuLA.jpeg",
      description:
        "If you are writing about a refresh or a clearing out, I’d love to read the piece. Be sure to respond to this post with the link or include the tag “Spring Clean 2024” in the story and I’ll be sure to find it.",
      credit: "medium.com/ Terrie Schweitzer",
    },
  ];

  const [posts, setPosts] = useState(data);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={posts}
        keyExtractor={(item) => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={(post) => {
          const item = post.item;
          return (
            <View style={styles.card}>
              <Image style={styles.cardImage} source={{ uri: item.image }} />
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <View style={styles.creditContainer}>
                    <Text style={styles.time}>Credit: {item.credit}</Text>
                  </View>
                  <View style={styles.timeContainer}>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton}>
                      <AntDesign
                        name="like1"
                        size={24}
                        color="#0437F2"
                        style={styles.icon}
                      />

                      <Text style={styles.socialBarLabel}>78</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton}>
                      <Foundation
                        name="comment"
                        size={24}
                        color="#0437F2"
                        style={styles.icon}
                      />
                      <Text style={styles.socialBarLabel}>25</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton}>
                      <AntDesign
                        name="eye"
                        size={26}
                        color="#0437F2"
                        style={styles.icon}
                      />
                      <Text style={styles.socialBarLabel}>78</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },

  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: "#EEEEEE",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },

  title: {
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: "#888",
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: "row",
  },

  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  creditContainer: {
    fontSize: 15,
    color: "#888",
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default List_Of_Blog_Posts;
