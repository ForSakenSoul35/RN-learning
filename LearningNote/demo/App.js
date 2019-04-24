import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HelloWorldApp extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize:30}}>Hello xhb </Text>
          {/* fontSize 的值 是数值 不用加引号 */}
        </View>
    );
  }
}
/**
 涉及的知识点
 Text,View 组件
 样式写法
 flex布局
 JSX语法
 */