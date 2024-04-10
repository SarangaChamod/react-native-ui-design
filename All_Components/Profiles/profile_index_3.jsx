import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";


// Define AppButton outside of ProfileIndex3
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const ProfileIndex3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://shorturl.at/ghAR9",
          }}
        />

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>16</Text>
            <Text style={styles.statLabel}>posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>436</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>263</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>Saranga Chamod</Text>
        <Text style={styles.tag}>@Saranga_chamod</Text>
        <Text style={styles.bio}>
          Turning dreams into plans. 🚀 | Adventure seeker | Coffee enthusiast
          ☕
        </Text>
      </View>
      <View style={styles.buttons}>
        {/* Use the AppButton component */}
        {/* Install this -  npx react-native init CustomButtonDemo */}
        <AppButton
          onPress={() => console.log("Button pressed")}
          title="Edit profile"
        />
        <AppButton
          onPress={() => console.log("Button pressed")}
          title="Share profile"
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: "100%",
    width: "100%",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  tag: {
    color: "#999",
    fontSize: 15,
    color: "#fff",
  },
  stats: {
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: 40,
  },
  stat: {
    flex: 1,
    alignSelf: "flex-end",
  },
  statLabel: {
    color: "#999",
    fontSize: 14,
    color: "#fff",
  },
  statValue: {
    fontSize: 18,
    color: "#fff",
  },
  bio: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
    color: "#fff",
  },
  buttons: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
  },
  appButtonContainer: {
    backgroundColor: "#222025",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 50,
    alignItems: "center",
    marginHorizontal: 5,
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ProfileIndex3;
