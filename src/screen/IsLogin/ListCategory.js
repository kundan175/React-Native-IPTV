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
import Api from "../../config/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

const ListCategory = ({ route }) => {
  const headerName = route?.params?.headerName;
  const navigation = useNavigation();
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    LiveCategoryList();
  }, []);

  const LiveCategoryList = async () => {
    Api.call(
      `http://ky-iptv.com:25461/player_api.php?username=${await AsyncStorage.getItem(
        "userName"
      )}&password=${await AsyncStorage.getItem("password")}&action=${
        headerName == "LIVE TV"
          ? "get_live_categories"
          : headerName == "MOVIES"
          ? "get_vod_categories"
          : "get_series_categories"
      }`,
      "GET",
      null,
      true,
      dispatch
    ).then((res) => {
      setData(res);
    });
  };
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          padding: 10,
          flex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MoviesCategory", {
              type: headerName,
              data: item,
            })
          }
          style={{
            backgroundColor: COLORS.orange,

            borderRadius: wp(3),
            padding: wp(2),
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {item?.category_name}
          </Text>
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
            {headerName}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={ImagePath.Search}
              style={{ height: wp(3), width: wp(3), marginRight: wp(2) }}
            />
            {/* <Image
              source={ImagePath.AppDrawer}
              style={{ height: wp(3), width: wp(3), marginRight: wp(2) }}
            /> */}
          </View>
        </View>
        <View
          style={{
            marginTop: wp(2),
            marginHorizontal: wp(2),
            flex: 1,
          }}
        >
          <FlatList data={data} renderItem={renderItem} numColumns={3} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListCategory;
