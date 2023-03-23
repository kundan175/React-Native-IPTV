import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { COLORS } from "../../config/Constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImagePath from "../../assets/ImagePath";
import { Shadow } from "react-native-shadow-2";
import NativeTextInput from "../../components/NativeTextInput";
import { useNavigation } from "@react-navigation/native";
import Api from "../../config/Api";

const Login = () => {
  const navigation = useNavigation();
  const [url, setUrl] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const LoginApi = async () => {
    Api.call(
      `${url}/player_api.php?username=${userName}&password=${password}&type=m3u_plus&output=ts`
    ).then((res) => {
      if (res) {
        console.log("response =>>", res);
        navigation.navigate("Home");
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.black, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: wp(15), width: wp(15) }}
            source={ImagePath.AppLogo}
          />
          <View style={{ marginTop: wp(3) }}>
            <Shadow
              startColor={"#FE753A"}
              distance={8}
              style={{ borderRadius: wp(5) }}
            >
              <View style={{ padding: 20 }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: wp(3),
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                >
                  LOGIN WITH XTREAM CODES API
                </Text>
                <View style={{ marginTop: wp(1) }}>
                  <NativeTextInput
                    placeHolder={"Enter Username"}
                    onSubmitEditing={() => {}}
                    returnKeyType="next"
                    value={userName}
                    onChangeText={(value) => setUserName(value)}
                  />
                </View>
                <View style={{ marginTop: wp(1) }}>
                  <NativeTextInput
                    placeHolder={"Enter Password"}
                    onSubmitEditing={() => {}}
                    returnKeyType="next"
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                  />
                </View>
                <View style={{ marginTop: wp(1) }}>
                  <NativeTextInput
                    placeHolder={"Enter URL"}
                    onSubmitEditing={() => {}}
                    returnKeyType="next"
                    value={url}
                    onChangeText={(value) => setUrl(value)}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => LoginApi()}
                  style={{
                    height: hp(10),
                    width: wp(25),
                    backgroundColor: "#FE7702",
                    marginTop: wp(4),
                    marginHorizontal: wp(5),
                    borderRadius: wp(2),
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>Login</Text>
                </TouchableOpacity>
              </View>
            </Shadow>
          </View>
          <View />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
