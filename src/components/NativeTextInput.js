import React, {useState, Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../config/Constants';

export default class NativeTextInput extends Component {
  // const NativeInputFields = ({ label, value, onChangeText, placeHolder, secureTextEntry, editable, keyboardType, returnKeyType, onSubmitEditing, ref, blurOnSubmit }) => {
  // const [borderColor, setBorderColor] = useState('white')
  constructor(props) {
    super(props);
    // this.state = {
    //   visibility: this.props.type && this.props.type == 'password',
    //   borderColor: 'white',
    // };
  }
  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }

  onSubmitEditing() {
    this.props.onSubmitEditing();
  }

  focus() {
    this.textInput.focus();
  }

  render() {
    return (
      <View
        style={{
          alignItem: 'center',
        }}>
        <TextInput
          style={{
            height: hp(10),
            width: wp(50),
            borderRadius: hp(5),
            borderWidth: 1,
            paddingHorizontal: 15,
            marginTop: 5,
            color: COLORS.white,
            borderColor: '#4690EB',
          }}
          editable={this.props.editable}
          onChangeText={this.props.onChangeText}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
          value={this.props.value}
          autoCorrect={false}
          placeholderTextColor={COLORS.white}
          ref={input => (this.textInput = input)}
          returnKeyType={this.props.returnKeyType}
          blurOnSubmit={this.props.blurOnSubmit}
          onSubmitEditing={this.onSubmitEditing.bind(this)}
          placeholder={this.props.placeHolder}
          maxLength={this.props.maxLength}
        />
      </View>
    );
  }
}
