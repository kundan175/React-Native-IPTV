import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import ImagePath from "../../assets/ImagePath";
import { COLORS } from "../../config/Constants";

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View style={{ backgroundColor: COLORS.black, flex: 1 }}>
        <View style={{ padding: wp(2), paddingHorizontal: wp(4) }}>
          <Image
            style={{  }}
            source={ImagePath.HomeScreenLogo}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: wp(2),
            paddingHorizontal: wp(4),justifyContent:'space-between'
          }}
        >
          <View style={{ flexDirection: "row",marginTop:wp(2) }}>
            <TouchableOpacity onPress={() => navigation.navigate('ListCategory',{headerName:'LIVE TV'})}>
              <Image source={ImagePath.LiveIcon}style={{height:wp(16),width:wp(16)}} />
              <Image
                source={ImagePath.LiveTvIcon}
                style={{ position: "absolute", left: wp(2), top: wp(1) }}
              />
              <Text
                style={{
                  color: "#C13C03",
                  fontSize: wp(3),
                  position: "absolute",
                  top: wp(11),
                  left: wp(3),
                  fontWeight: "600",
                }}
              >
                Live Tv
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ListCategory',{headerName:'MOVIES'})} style={{ marginLeft: wp(2) }}>
              <Image source={ImagePath.LiveIcon}style={{height:wp(16),width:wp(16)}}  />
              <Image
                source={ImagePath.MoviesPopcorn}
                style={{ position: "absolute", left: wp(2), top: wp(1) }}
              />
              <Text
                style={{
                  color: "#C13C03",
                  fontSize: wp(3),
                  position: "absolute",
                  top: wp(11),
                  left: wp(3),
                  fontWeight: "600",
                }}
              >
                Movies
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ListCategory',{headerName:'SERIES'})} style={{ marginLeft: wp(2) }}>
              <Image source={ImagePath.LiveIcon}style={{height:wp(16),width:wp(16)}}  />
              <Image
                source={ImagePath.SeriesIcon}
                style={{ position: "absolute", left: wp(2), top: wp(1) }}
              />
              <Text
                style={{
                  color: "#C13C03",
                  fontSize: wp(3),
                  position: "absolute",
                  top: wp(11),
                  left: wp(4),
                  fontWeight: "600",
                }}
              >
                Series
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop:wp(2), }}>
            <TouchableOpacity
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
                style={{ color: "#C13C03", fontSize: 17, fontWeight: "600" }}
              >
                Settings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: "#4690EB",
                height: hp(10),
                width: wp(24),
                borderWidth: 1,
                borderRadius: wp(10),
                justifyContent: "center",
                alignItems: "center",
                marginTop: wp(1),
              }}
            >
              <Text
                style={{ color: "#C13C03", fontSize: 17, fontWeight: "600" }}
              >
                Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: "#4690EB",
                height: hp(10),
                width: wp(24),
                borderWidth: 1,
                borderRadius: wp(10),
                justifyContent: "center",
                alignItems: "center",
                marginTop: wp(1),
              }}
            >
              <Text
                style={{ color: "#C13C03", fontSize: 17, fontWeight: "600" }}
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

export default Login;
