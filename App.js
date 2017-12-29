/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import setup from './js/pages/setup';

/*
export default class App extends Component<{}> {
    constructor(props){
      super(props);
      this.state={
        selectedTab:'tb_popular'
      }
    }

    render() {
        return (
            /!*<TabNavigator>
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
            </TabNavigator>*!/
            /!*<Navigator
            initialRoute={
                {component:Boy}
            }
            renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component navigator={navigator}{...route.params}/>
            }}>

        </Navigator>
        );*!/
            <FetchTest/>
        )
    }
}*/

