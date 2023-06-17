import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import ImagePath from "../../assets/ImagePath";
import { COLORS } from "../../config/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MoviesCategory = ({ route }) => {
  const type = route?.params?.type;
  const data = route?.params?.data;
  const [categoryData, setCategoryData] = useState("");
  console.log("ff", data);
  const navigation = useNavigation();

  useEffect(() => {
    LiveCategoryList();
  }, []);
  const LiveCategoryList = async () => {
    Api.call(
      `http://ky-iptv.com/player_api.php?username=${await AsyncStorage.getItem(
        "userName"
      )}&password=${await AsyncStorage.getItem("password")}&action=${
        type == "LIVE TV"
          ? "get_live_streams"
          : type == "MOVIES"
          ? "get_vod_streams"
          : "get_series"
      }&category_id=${data.category_id}`,
      "GET",
      null,
      true
    ).then((res) => {
      console.log(res);
      setCategoryData(res);
    });
  };
  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10, marginTop: wp(2), marginLeft: wp(2) }}>
        <TouchableOpacity
          onPress={() => {
            console.log(item);

            navigation.navigate("VideoScreen", {
              videoUrl: item.stream_id,
              type: type,
            });
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.orange,
              width: wp(14),
              // height: wp(16),
              borderRadius: wp(3),
              justifyContent: "center",
              borderColor: COLORS.white,
              borderWidth: 1,

              // justifyContent: "flex-end",
            }}
          >
            {/* <View style={{height:wp(15),width:wp(14),marginBottom:wp(2)}}/> */}

            {/* <View style={{}}> */}

            {/* </View> */}
            <Image
              source={{ uri: item?.stream_icon }}
              style={{
                width: wp(13),
                height: wp(17),
                borderRadius: wp(3),
                marginHorizontal: wp(0.5),
                // position: "absolute",
                // right: wp(2.5),
                // bottom: wp(5),
              }}
            />
            <View style={{ paddingHorizontal: wp(1), marginVertical: wp(1) }}>
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: 14,
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {item?.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: COLORS.black, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={ImagePath.BackArrow}
                style={{ height: wp(3), width: wp(3), marginHorizontal: wp(2) }}
              />
            </TouchableOpacity>
            <View style={{ paddingHorizontal: wp(2) }}>
              <Image source={ImagePath.HomeScreenLogo} />
            </View>
          </View>
          <Text style={{ color: "white", fontSize: wp(3), marginRight: wp(8) }}>
            {data?.category_name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={ImagePath.Search}
              style={{ height: wp(3), width: wp(3), marginRight: wp(4) }}
            />
            <Image
              source={ImagePath.AppDrawer}
              style={{ height: wp(3), width: wp(3), marginRight: wp(2) }}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: wp(2) }}>
          <FlatList
            data={categoryData}
            renderItem={renderItem}
            numColumns={5}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoviesCategory;
