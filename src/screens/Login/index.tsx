import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '@ant-design/react-native';
import {connect} from 'react-redux';

const Login: React.FC = () => {
  return (
    <View style={{backgroundColor: '#ffff', height: '100%'}}>
      <Text>Hello</Text>
      <Button>Press</Button>
    </View>
  );
};

const map = state => ({
  login: state.user.login,
});

export default connect(map)(Login);
