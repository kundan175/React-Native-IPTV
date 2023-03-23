import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,FlatList
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import ImagePath from "../../assets/ImagePath";
import { COLORS } from "../../config/Constants";
import Api from "../../config/Api";

const ListCategory = ({route}) => {
    const headerName = route?.params?.headerName
  const navigation = useNavigation();
// const dispatch = useDispatch()
useEffect(() => {
  LiveCategoryList()
},[])

const DATA = [
    {
        id:0,
        title:'hello'
    },
    {
        id:1,
        title:'hello'
    },
    {
        id:2,
        title:'hello'
    },
    {
        id:3,
        title:'hello'
    },
    {
        id:4,
        title:'hello'
    },
    {
        id:5,
        title:'hello'
    },
    {
        id:6,
        title:'hello'
    },
    {
        id:7,
        title:'hello'
    },
    {
        id:8,
        title:'hello'
    },

]

const LiveCategoryList = async() => {
  Api.call(`http://ky-iptv.com:25461/player_api.php?username=mustest555&password=22334455&action=get_live_categories`,'GET',null,true).then(res => {
    console.log('->',res)
  })
}
const renderItem = ({item}) =>{
    return(
        <View style={{padding:12,marginTop:wp(2),}}>
            <TouchableOpacity onPress={() => navigation.navigate('MoviesCategory')} style={{backgroundColor:COLORS.orange,width:wp(25),height:wp(7),borderRadius:wp(3),padding:wp(1),justifyContent:'center'}}>
                <Text style={{color:COLORS.white,fontSize:wp(3),textAlign:'center'}}>{item?.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View style={{ backgroundColor: COLORS.black, flex: 1 }}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={ImagePath.BackArrow} style={{height:wp(3),width:wp(3),marginHorizontal:wp(2)}}/>
        </TouchableOpacity>
        <View style={{  paddingHorizontal: wp(2) }}>
          <Image
            source={ImagePath.HomeScreenLogo}
          />
          </View>
        </View>
        <Text style={{color:'white',fontSize:wp(3),marginRight:wp(8)}}>{headerName}</Text>
        <View style={{flexDirection:'row',}}>
        <Image source={ImagePath.Search} style={{height:wp(3),width:wp(3),marginRight:wp(4)}}/>
        <Image source={ImagePath.AppDrawer} style={{height:wp(3),width:wp(3),marginRight:wp(2)}}/>
        </View>
        </View>
        <View style={{marginTop:wp(2),marginHorizontal:wp(2)}}>
     <FlatList
     data={DATA}
     renderItem={renderItem}
     numColumns={3}
     />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default ListCategory;
