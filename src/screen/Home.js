import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import ImagePath from '../assets/ImagePath';
import { COLORS } from '../config/Constants';

const Login = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black, marginTop: StatusBar.currentHeight }}
    >
      <View style={{ backgroundColor: COLORS.black, flex: 1 }}>
        <View style={{ padding: wp(2),paddingHorizontal:wp(4) }}>

          <Image
            style={{ height: wp(10), width: wp(10) }}
            source={ImagePath.AppLogo}
          />
        </View>
        <View style={{ flexDirection: 'row', padding: wp(2),paddingHorizontal:wp(4) }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image source={ImagePath.LiveIcon} />
              <Image source={ImagePath.LiveTvIcon} style={{ position: 'absolute', left: wp(2), top: wp(1) }} />
              <Text style={{ color: '#C13C03', fontSize: wp(3), position: 'absolute', top: wp(11), left: wp(3), fontWeight: '600' }}>Live Tv</Text>
            </View>
            <View style={{ marginLeft: wp(2) }}>
              <Image source={ImagePath.LiveIcon} />
              <Image source={ImagePath.MoviesPopcorn} style={{ position: 'absolute', left: wp(2), top: wp(1) }} />
              <Text style={{ color: '#C13C03', fontSize: wp(3), position: 'absolute', top: wp(11), left: wp(3), fontWeight: '600' }}>Movies</Text>
            </View>
            <View style={{ marginLeft: wp(2) }}>
              <Image source={ImagePath.LiveIcon} />
              <Image source={ImagePath.SeriesIcon} style={{ position: 'absolute', left: wp(2), top: wp(1) }} />
              <Text style={{ color: '#C13C03', fontSize: wp(3), position: 'absolute', top: wp(11), left: wp(3), fontWeight: '600' }}>Series</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: wp(4) }}>
            <TouchableOpacity style={{ borderColor: '#4690EB', height: hp(10), width: wp(20), borderWidth: 1, borderRadius: wp(10), justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#C13C03', fontSize: 17, fontWeight: '600' }}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderColor: '#4690EB', height: hp(10), width: wp(20), borderWidth: 1, borderRadius: wp(10), justifyContent: 'center', alignItems: 'center', marginTop: wp(1) }}>
              <Text style={{ color: '#C13C03', fontSize: 17, fontWeight: '600' }}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderColor: '#4690EB', height: hp(10), width: wp(20), borderWidth: 1, borderRadius: wp(10), justifyContent: 'center', alignItems: 'center', marginTop: wp(1) }}>
              <Text style={{ color: '#C13C03', fontSize: 17, fontWeight: '600' }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{marginTop: wp(3)}}>
          <Shadow startColor={'#FE753A'} distance={8} 
          style={{borderRadius:wp(7)}}>
            <View style={{padding: 20}}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: wp(3),
                  fontWeight: '400',
                }}>
                LOGIN WITH XTREAM CODES API
              </Text>
              <View style={{marginTop:wp(2)}}>
              <NativeTextInput
                placeHolder={'Enter Username'}
                onSubmitEditing={() => {}}
                returnKeyType="next"
                onChangeText={value => console.log(value)}
              />
              </View>
              <View style={{marginTop:wp(2)}}>
              <NativeTextInput
                placeHolder={'Enter Password'}
                onSubmitEditing={() => {}}
                returnKeyType="next"
                onChangeText={value => console.log(value)}
              />
              </View>
              <View style={{marginTop:wp(2)}}>
              <NativeTextInput
                placeHolder={'Enter URL'}
                onSubmitEditing={() => {}}
                returnKeyType="next"
                onChangeText={value => console.log(value)}
              />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{height:hp(4),width:wp(40),backgroundColor:'#FE7702',marginVertical:wp(4),marginHorizontal:wp(5),borderRadius:wp(20),justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',fontSize:15}}>Login</Text>
              </TouchableOpacity>
            </View>
          </Shadow>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;
