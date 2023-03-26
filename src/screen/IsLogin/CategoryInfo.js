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
import { COLORS, FONTS } from "../../config/Constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CategoryInfo = ({ route }) => {
  const item = route?.params?.item;
  const type = route?.params?.type;
  const navigation = useNavigation();
  console.log("dd", item);
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
                style={{ height: wp(3), width: wp(3), marginLeft: wp(2) }}
              />
            </TouchableOpacity>
            <View style={{ paddingHorizontal: wp(2) }}>
              <Image
                source={ImagePath.HomeScreenLogo}
                style={{ height: wp(5), width: wp(15) }}
              />
            </View>
          </View>
          <Text style={{ color: "white", fontSize: wp(3), marginRight: wp(8) }}>
            Movies Info
          </Text>
          <View style={{ width: wp(10), height: wp(5) }} />
        </View>
        <View
          style={{
            marginTop: wp(5),
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginHorizontal: wp(5),
          }}
        >
          <Image
            source={{ uri: item?.stream_icon }}
            style={{ height: wp(25), width: wp(20) }}
          />
          <View
            style={{
              justifyContent: "space-between",
              marginHorizontal: wp(10),
              flex: 1,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: Colors.white, fontSize: 22 }}>
                Series Name:
              </Text>
              <Text style={{ color: Colors.white, fontSize: 22 }}>
                Night Manager
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: Colors.white, fontSize: 22 }}>
                Director:
              </Text>
              <Text style={{ color: Colors.white, fontSize: 22 }}>
                Rahul Shetri
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: Colors.white, fontSize: 22 }}>
                Release date:
              </Text>
              <Text style={{ color: Colors.white, fontSize: 22 }}>16/sept</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#27BBEE",
                  width: wp(15),
                  height: wp(4),
                  borderRadius: 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Series</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#27BBEE",
                  width: wp(15),
                  height: wp(4),
                  borderRadius: 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Episodes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryInfo;
