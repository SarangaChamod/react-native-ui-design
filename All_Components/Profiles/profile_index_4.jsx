import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  MaterialIcons,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const IndexScreen = () => {
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
          <Text style={styles.name}>Saranga Chamod</Text>
        </View>
        <View style={styles.profileDetail}>
          <View style={styles.detailContent}>
            <Text style={styles.count}>24</Text>
            <Text style={styles.title}>My wishlist</Text>
          </View>
          <View style={styles.verticalRule} />
          <View style={styles.detailContent}>
            <Text style={styles.count}>03</Text>
            <Text style={styles.title}>Followed stores</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.subTitles}>My Orders</Text>
        <View style={styles.typeOfOrder}>
          <View style={styles.OrderItems}>
            <MaterialIcons name="payment" size={30} color="#3b444b" />
            <Text style={styles.typeOfOrderName}>To Pay</Text>
          </View>
          <View style={styles.OrderItems}>
            <Entypo name="box" size={30} color="#3b444b" />
            <Text style={styles.typeOfOrderName}>To Ship</Text>
          </View>
          <View style={styles.OrderItems}>
            <MaterialIcons name="local-shipping" size={30} color="#3b444b" />
            <Text style={styles.typeOfOrderName}>To Receive</Text>
          </View>
          <View style={styles.OrderItems}>
            <Ionicons
              name="chatbox-ellipses-outline"
              size={30}
              color="#3b444b"
            />
            <Text style={styles.typeOfOrderName}>To Review</Text>
          </View>
        </View>
        <View style={styles.point}>
          <Text style={styles.subTitles}>My Points</Text>
          <View style={styles.typeOfPoint}>
            <View style={styles.pointItem}>
              <Text style={styles.pointText}>Points</Text>
              <Text style={styles.pointNum}>78</Text>
            </View>
            <View style={styles.pointItem}>
              <Text style={styles.pointText}>Vouchers</Text>
              <Text style={styles.pointNum}>5</Text>
            </View>
          </View>
        </View>
        <View style={styles.services}>
          <Text style={styles.subTitles}>My Services</Text>
          <View style={styles.typeOfservices}>
            <View style={styles.sections}>
              <View style={styles.OrderItems}>
                <Ionicons name="mail-outline" size={30} color="black" />
                <Text style={styles.typeOfOrderName}>My Messages</Text>
              </View>
              <View style={styles.OrderItems}>
                <MaterialIcons name="card-travel" size={30} color="black" />
                <Text style={styles.typeOfOrderName}>Payment</Text>
                <Text style={styles.typeOfOrderName}>Options</Text>
              </View>
              <View style={styles.OrderItems}>
                <Ionicons name="help-circle-outline" size={30} color="black" />
                <Text style={styles.typeOfOrderName}>Help Center</Text>
              </View>
              <View style={styles.OrderItems}>
                <MaterialCommunityIcons
                  name="face-agent"
                  size={30}
                  color="black"
                />
                <Text style={styles.typeOfOrderName}>Chat with Us</Text>
              </View>
            </View>
            <View style={styles.sections}>
              <View style={styles.OrderItems}>
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={30}
                  color="#3b444b"
                />
                <Text style={styles.typeOfOrderName}>My Reviews</Text>
              </View>
              <View style={styles.OrderItems}>
                <MaterialCommunityIcons
                  name="hand-coin-outline"
                  size={30}
                  color="black"
                />
                <Text style={styles.typeOfOrderName}>Influencer Hub</Text>
              </View>
              <View style={styles.OrderItems}>
              <MaterialCommunityIcons name="candy-outline" size={30} color="black" />
                <Text style={styles.typeOfOrderName}>App Candy</Text>
              </View>
              <View style={styles.OrderItems}>
              <Entypo name="stopwatch" size={30} color="black" />
                <Text style={styles.typeOfOrderName}>PayLater</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#A9A9A9",
    borderRadius: 30,
  },
  verticalRule: {
    borderLeftWidth: 1,
    borderColor: "white",
    height: "80%",
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
  profileDetail: {
    alignSelf: "center",
    marginTop: 235,
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
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingRight: 4,
  },
  body: {
    margin: 8,
  },
  subTitles: {
    fontSize: 17,
    fontWeight: "400",
    margin: 8,
  },
  typeOfOrder: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  OrderItems: {
    alignItems: "center",
  },
  typeOfOrderName: {
    color: "#3b444b",
    fontSize: 14,
  },
  typeOfPoint: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-around",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  pointItem: {
    alignItems: "center",
  },
  pointText: {
    fontSize: 16,
    fontWeight: "400",
  },
  pointNum: {
    fontSize: 19,
    fontWeight: "500",
  },
  sections: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});

export default IndexScreen;
