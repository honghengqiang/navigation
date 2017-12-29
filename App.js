/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components';
import Boy from './Boy';


export default class App extends Component<{}> {
    constructor(props){
      super(props);
      this.state={
        selectedTab:'tb_popular'
      }
    }

    render() {
        return (
            /*<TabNavigator>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_popular'}
                  selectedTitleStyle={{color:'red'}}
                  title="最热"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
                  badgeText="1"
                  onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
                  <View style={styles.page1}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_trending'}
                  selectedTitleStyle={{color:'yellow'}}
                  title="趋势"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_trending.png')} />}
                  onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
                <View style={styles.page2}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_favorite'}
                  selectedTitleStyle={{color:'green'}}
                  title="收藏"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'green'}]} source={require('./res/images/ic_favorite.png')} />}
                  onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
                <View style={styles.page3}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_my'}
                  selectedTitleStyle={{color:'blue'}}
                  title="我的"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/ic_my.png')} />}
                  onPress={() => this.setState({ selectedTab: 'tb_my' })}>
                <View style={styles.page4}></View>
              </TabNavigator.Item>
            </TabNavigator>*/
        <Navigator
            initialRoute={
                {component:Boy}
            }
            renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component navigator={navigator}{...route.params}/>
            }}>

        </Navigator>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
      backgroundColor:'#f5fcff',
  },

    page1:{
      flex:1,
        backgroundColor:'red',
    },
    page2:{
        flex:1,
        backgroundColor:'yellow',
    },
    page3:{
        flex:1,
        backgroundColor:'green',
    },
    page4:{
        flex:1,
        backgroundColor:'blue',
    },
    image:{
      height:22,
        width:22,
    }

});

