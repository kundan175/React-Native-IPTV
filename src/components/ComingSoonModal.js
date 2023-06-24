import React, { useState } from "react";
import { View, Text, Modal, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ComingSoonModal = ({ visible, onPress }) => {
  return (
    <View>
      <Modal transparent={true} visible={visible}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
        >
          <View
            style={{
              width: "35%",
              backgroundColor: "#1F1422",
              borderRadius: 20,
              paddingHorizontal: 4,
              paddingVertical: 15,
              alignItems: "center",
              borderWidth: 0.5,
              borderColor: "#FE753A",
            }}
          >
            <View style={{ marginLeft: 10, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Coming Soon
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => onPress()}
              style={{
                height: hp(10),
                width: "30%",
                backgroundColor: "#FE7702",
                marginHorizontal: wp(5),
                borderRadius: wp(2),
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginTop: wp(3),
              }}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ComingSoonModal;
