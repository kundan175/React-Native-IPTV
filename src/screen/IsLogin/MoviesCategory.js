import React from "react";
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

const MoviesCategory = ({ route }) => {
  const headerName = route?.params?.headerName;
  const navigation = useNavigation();

  const DATA = [
    {
      id: 0,
      title: "hello",
    },
    {
      id: 1,
      title: "hello",
    },
    {
      id: 2,
      title: "hello",
    },
    {
      id: 3,
      title: "hello",
    },
    {
      id: 4,
      title: "hello",
    },
    {
      id: 5,
      title: "hello",
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10, marginTop: wp(2) }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.orange,
            width: wp(20),
            height: wp(15),
            borderRadius: wp(3),
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: wp(3),
              textAlign: "center",
            }}
          >
            {item?.title}
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
            M
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
          <FlatList data={DATA} renderItem={renderItem} numColumns={3} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoviesCategory;
