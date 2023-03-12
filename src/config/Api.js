import AsyncStorage from "@react-native-async-storage/async-storage";
import { customAlertfuction } from "../store/counterSlice";

export default Api = {
  call: async function (
    url,
    method = "POST",
    bodyData = null,
    hastoken = true
  ) {
    var header = {};
    var fullUrl = url;
    var storedUserToken = await AsyncStorage.getItem("token");
    if (storedUserToken) {
      global.token = storedUserToken;
    }

    if (bodyData instanceof FormData) {
      if (hastoken) {
        header = {
          Authorization: "Bearer" + " " + global.token,
        };
      } else {
        header = {
          Accept: "application/json",
        };
      }
    } else {
      if (hastoken) {
        header = {
          "Content-Type": "application/json",
          Authorization: "Bearer" + " " + global.token,
        };
      } else {
        header = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };
      }
    }

    console.log("url===>", fullUrl);
    console.log("body===>", bodyData);
    console.log("token===>", "Bearer" + " " + global.token);

    return await fetch(fullUrl, {
      method: method,
      body: bodyData,
      headers: header,
    })
      .then((response) => {
        console.log("response.status", response.status);
        if (response.status == 201 || response.status == 200) {
          return response.json();
        } else {
          console.log("errr", response.json());
        }
      })
      .catch((err) => {
        console.log("error ====", err.message);
      });
  },
};
