import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const profile_index_6 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.card, styles.profileCard]}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <Text style={styles.name}>Alex Johnson</Text>
        </View>

        <View style={styles.cardOne}>
          <Text style={styles.cardTittle}>Description</Text>
          <Text>
            Lover of art, music, and spontaneous adventures. Always seeking
            inspiration in the bustling streets and hidden corners of the world.
            Freelancing in graphic design, with a passion for blending
            aesthetics with functionality.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTittle}>Profile Placeholder</Text>
          <Text> Exploring the World Through Creativity</Text>
        </View>

        <View style={styles.photosCard}>
          <Text style={styles.cardTittle}>Friends</Text>
          <View style={styles.photosContainer}>
            <TouchableOpacity>
              <Image
                style={styles.photo}
                source={{
                  uri: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.photo}
                source={{
                  uri: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.photo}
                source={{
                  uri: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.photo}
                source={{
                  uri: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.photo}
                source={{
                  uri: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.photo}
                source={{
                  uri: "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#DCDCDC",
  },
  cardTittle: {
    color: "#808080",
    fontSize: 22,
    marginBottom: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  cardOne: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    height: 140,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    height: 100,
    marginTop: 10,
  },
  profileCard: {
    height: 200,
    alignItems: "center",
    marginTop: 20,
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    color: "#808080",
  },
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "auto",
  },
  photosCard: {
    marginTop: 10,
  },
  photo: {
    width: 113,
    height: 113,
    marginTop: 5,
    marginRight: 5,
  },
});

export default profile_index_6;
