import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Functional component named index_1
const index_1 = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {/* User Avatar */}
          <Image
            style={styles.avatar}
            source={{
              uri: "https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          {/* User Name */}
          <Text style={styles.name}>Saranga Chamod</Text>
          {/* User Description */}
          <Text style={styles.avatarDescription}>Senior Graphic Designer</Text>
        </View>
      </View>

      {/* Profile Details Section */}
      <View style={styles.profileDetail}>
        <View style={styles.detailContent}>
          {/* Followers Count */}
          <Text style={styles.count}>1000</Text>
          {/* Followers Title */}
          <Text style={styles.title}>Followers</Text>
        </View>
        {/* Vertical Rule Separator */}
        <View style={styles.verticalRule} />
        <View style={styles.detailContent}>
          {/* Following Count */}
          <Text style={styles.count}>1200</Text>
          {/* Following Title */}
          <Text style={styles.title}>Following</Text>
        </View>
      </View>

      {/* Body Section */}
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          {/* Description */}
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>
        </View>
      </View>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  // Header styles
  header: {
    backgroundColor: "#A9A9A9",
    borderRadius: 20,
  },
  // Vertical Rule styles
  verticalRule: {
    borderLeftWidth: 1,
    borderColor: "white",
    height: "100%", // Adjust this height as needed
  },
  headerContent: {
    padding: 60,
    alignItems: "center",
  },
  // Avatar styles
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 2,
  },
  // User Name styles
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  // Avatar Description styles
  avatarDescription: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  // Profile Detail styles
  profileDetail: {
    alignSelf: "center",
    marginTop: 255,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  detailContent: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  // Title styles
  title: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  // Count styles
  count: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingRight: 4,
  },
  // Body Content styles
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    marginTop: 40,
  },
  // Description styles
  description: {
    fontSize: 20,
    color: "#00CED1",
    marginTop: 10,
    textAlign: "center",
  },
});

export default index_1;
