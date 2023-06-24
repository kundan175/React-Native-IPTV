import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Linking,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import ImagePath from "../../assets/ImagePath";
import { COLORS } from "../../config/Constants";
import { useDispatch } from "react-redux";
import { iscomingModalOpen } from "../../store/counterSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: COLORS.black, flex: 1 }}>
        <View style={{ padding: wp(2), paddingHorizontal: wp(4) }}>
          <Image style={{}} source={ImagePath.HomeScreenLogo} />
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: wp(2),
            paddingHorizontal: wp(4),
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", marginTop: wp(2) }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ListCategory", { headerName: "LIVE TV" })
              }
            >
              <Image
                source={ImagePath.LiveIcon}
                style={{ height: wp(20), width: wp(20) }}
              />
              <Image
                source={ImagePath.LiveTvIcon}
                style={{ position: "absolute", left: wp(2), top: wp(1) }}
              />
              <Text
                style={{
                  color: "#C13C03",
                  fontSize: wp(3),
                  position: "absolute",
                  top: wp(14),
                  left: wp(5),
                  fontWeight: "600",
                }}
              >
                Live Tv
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ListCategory", { headerName: "MOVIES" })
              }
              style={{ marginLeft: wp(2) }}
            >
              <Image
                source={ImagePath.LiveIcon}
                style={{ height: wp(20), width: wp(20) }}
              />
              <Image
                source={ImagePath.MoviesPopcorn}
                style={{ position: "absolute", left: wp(2), top: wp(1) }}
              />
              <Text
                style={{
                  color: "#C13C03",
                  fontSize: wp(3),
                  position: "absolute",
                  top: wp(14),
                  left: wp(5),
                  fontWeight: "600",
                }}
              >
                Movies
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={
                () => dispatch(iscomingModalOpen())

                // navigation.navigate("ListCategory", { headerName: "SERIES" })
              }
              style={{ marginLeft: wp(2) }}
            >
              <Image
                source={ImagePath.LiveIcon}
                style={{ height: wp(20), width: wp(20) }}
              />
              <Image
                source={ImagePath.SeriesIcon}
                style={{ position: "absolute", left: wp(2), top: wp(1) }}
              />
              <Text
                style={{
                  color: "#C13C03",
                  fontSize: wp(3),
                  position: "absolute",
                  top: wp(14),
                  left: wp(5),
                  fontWeight: "600",
                }}
              >
                Series
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://iptvsmartflixplayer.com")}
              style={{
                borderColor: "#4690EB",
                height: hp(10),
                width: wp(24),
                borderWidth: 1,
                borderRadius: wp(10),
                justifyContent: "center",
                alignItems: "center",
                marginBottom: wp(2),
              }}
            >
              <Text
                style={{ color: "#C13C03", fontSize: 23, fontWeight: "400" }}
              >
                Website
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("http://webtv.iptvsmartflixplayer.com/")
              }
              style={{
                borderColor: "#4690EB",
                height: hp(10),
                width: wp(24),
                borderWidth: 1,
                borderRadius: wp(10),
                justifyContent: "center",
                alignItems: "center",
                marginBottom: wp(2),
              }}
            >
              <Text
                style={{ color: "#C13C03", fontSize: 23, fontWeight: "400" }}
              >
                Webtvplayer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                AsyncStorage.clear();
                global.user = "";
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Login" }],
                });
              }}
              style={{
                borderColor: "#4690EB",
                height: hp(10),
                width: wp(24),
                borderWidth: 1,
                borderRadius: wp(10),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#C13C03", fontSize: 23, fontWeight: "400" }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{height:wp(2),width:wp(2),backgroundColor:'red'}}/> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
