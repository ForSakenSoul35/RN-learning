import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View } from 'react-native';

export default class ListViewDemo extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:ds.cloneWithRows(data),
    };
    const ds= new ListView.DataSource({
      // 初始化数据源 rowHasChanged是优化的一种手段 只有当r1!== r2时才会重新渲染
      rowHasChanged:(r1,r2)=>r1 !== r2
    });
  }
  render(){
    return(
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        ></ListView>
      </View>
    )
  }
  _renderRow=(rowData)=>{
    return(
      <TouchableOpacity>
        <Image source={rowData.image} style={styles.image}/>
        <Text style={style.title}>{rowData.title}</Text>
      </TouchableOpacity>
    )
  }
}
/*
使用步骤
1.创建一个ListView.DataSource数据源 然后给他传递一个普通的数组

*/