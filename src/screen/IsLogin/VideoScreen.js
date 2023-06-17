import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import VideoPlayer from "react-native-video-controls";

const VideoScreen = ({ route }) => {
  const videoUrl = route?.params?.videoUrl;
  const type = route?.params?.type;
  const [mainUrl, setMainUrl] = useState();
  const navigation = useNavigation();

  useEffect(async () => {
    let url = `http://ky-iptv.com/${
      type == "LIVE TV" ? "live" : type == "MOVIES" ? "movie" : "series"
    }/${await AsyncStorage.getItem("userName")}/${await AsyncStorage.getItem(
      "password"
    )}/${videoUrl}.${type == "LIVE TV" ? "m3u8" : "mkv"}`;
    console.log(url);
    setMainUrl(url);
  }, []);

  return (
    <View style={styles.container}>
      {mainUrl ? (
        <VideoPlayer
          source={{
            uri: mainUrl,
          }}
          tapAnywhereToPause
          onBack={() => {
            navigation.goBack();
          }}
        />
      ) : (
        <ActivityIndicator size="large" color="white" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default VideoScreen;
