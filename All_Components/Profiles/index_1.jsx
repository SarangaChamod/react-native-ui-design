import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const index_1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.avatarDescription}>Senior Graphic Designer</Text>
        </View>
      </View>

      <View style={styles.profileDetail}>
        <View style={styles.detailContent}>
          <Text style={styles.count}>1000</Text>
          <Text style={styles.title}>Followers</Text>
        </View>
        <View style={styles.verticalRule} />
        <View style={styles.detailContent}>
          <Text style={styles.count}>1200</Text>
          <Text style={styles.title}>Following</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ADD8E6",
    borderRadius: 20,
  },
  verticalRule: {
    borderLeftWidth: 1,
    borderColor: "white",
    height: "100%", // Adjust this height as needed
  },
  headerContent: {
    padding: 60,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 2,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  avatarDescription: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "400",
  },
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
  title: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  count: {
    fontSize: 15,
    color:'#FFFFFF',
    fontWeight: "bold",
    paddingRight:4
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    marginTop: 40,
  },
  
  description: {
    fontSize: 20,
    color: "#00CED1",
    marginTop: 10,
    textAlign: "center",
  },
});

export default index_1;
