import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const ProfileView = () => {
  const friends = [
    {
      id: 1,
      avatar:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "avatar_1",
      age: "30",
    },
    {
      id: 2,
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "avatar_2",
      age: "30",
    },
    {
      id: 3,
      avatar:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "avatar_3",
      age: "30",
    },
    {
      id: 4,
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "avatar_4",
      age: "30",
    },
    {
      id: 5,
      avatar:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "avatar_5",
      age: "30",
    },
    {
      id: 6,
      avatar:
        "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "avatar_6",
      age: "30",
    },
    
  ];

  const handleEditPress = () => {
    // Implement your edit functionality here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.coverPhoto}
          // Image size - 250*250
          source={{
            uri: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={{
              uri: "https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <Text style={styles.nameText}>Saranga Chamod</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.bioText}>Senior Graphic Designer</Text>
      </View>

      <View style={styles.section}>
        <ScrollView horizontal contentContainerStyle={styles.friendsScroll}>
          {friends.map(({ avatar, id }) => (
            <View style={styles.friendCard} key={id}>
              <Image style={styles.friendImage} source={{ uri: avatar }} />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={handleEditPress}>
          <Text style={styles.buttonText}>Settigns</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleEditPress}>
          <Text style={styles.buttonText}>More details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
  },
  coverPhoto: {
    width: "100%",
    height: 180,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -70,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#fff",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
    textAlign: "center",
    color: "#A9A9A9",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 5,
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: "#343434",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  friendCard: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 2,
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  friendsScroll: {
    paddingBottom: 10,
  },
};

export default ProfileView;
