/**
 * Created by honghengqiang on 2017/12/29.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage';
import AsyncStorageTest from  '../../AsyncStorageTest';
import MyPage from './my/MyPage';


export default class HomePage extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_popular'}
                    selectedTitleStyle={{color: '#6495ed'}}
                    title="最热"
                    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#6495ed'}]}
                                                     source={require('../../res/images/ic_polular.png')}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'tb_popular'})}>
                    <PopularPage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_trending'}
                    selectedTitleStyle={{color: 'yellow'}}
                    title="趋势"
                    renderIcon={() => <Image style={styles.image}
                                             source={require('../../res/images/ic_trending.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}
                                                     source={require('../../res/images/ic_trending.png')}/>}
                    onPress={() => this.setState({selectedTab: 'tb_trending'})}>
                    <AsyncStorageTest/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_favorite'}
                    selectedTitleStyle={{color: 'green'}}
                    title="收藏"
                    renderIcon={() => <Image style={styles.image}
                                             source={require('../../res/images/ic_favorite.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'green'}]}
                                                     source={require('../../res/images/ic_favorite.png')}/>}
                    onPress={() => this.setState({selectedTab: 'tb_favorite'})}>
                    <View style={styles.page3}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_my'}
                    selectedTitleStyle={{color: 'blue'}}
                    title="我的"
                    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_my.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'blue'}]}
                                                     source={require('../../res/images/ic_my.png')}/>}
                    onPress={() => this.setState({selectedTab: 'tb_my'})}>
                    <MyPage {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
            /*<Navigator
             initialRoute={
             {component:Boy}
             }
             renderScene={(route,navigator)=>{
             let Component = route.component;
             return <Component navigator={navigator}{...route.params}/>
             }}>

             </Navigator>
             );*/
            /*<FetchTest/>*/
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
    },
    page3: {
        flex: 1,
        backgroundColor: 'green',
    },
    image: {
        height: 22,
        width: 22,
    }

});

