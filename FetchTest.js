/**
 * Created by honghengqiang on 2017/12/29.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';
import NavigationBar from './NavigationBar';
import HttpUtil from './HttpUtil';

export default class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        }
    }

    onLoad(url) {
        HttpUtil.get(url)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                })
            })
        // fetch(url)
        //     .then(response => response.json())
        //     .then(result => {
        //         this.setState({
        //             result: JSON.stringify(result)})
        //             .catch(error=>{
        //                 this.setState({
        //                     result: JSON.stringify(error)})
        //             })
        //     }
        // )

    }

    onSubmit(url, data) {
        HttpUtil.post(url,data)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
                    .catch(error => {
                        this.setState({
                            result: JSON.stringify(error)
                        })
                    })
            })

        // fetch(url, {
        //     method: 'POST',
        //     header: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => response.json())
        //     .then(result => {
        //         this.setState({
        //             result: JSON.stringify(result)
        //         })
        //             .catch(error => {
        //                 this.setState({
        //                     result: JSON.stringify(error)
        //                 })
        //             })
        //     })
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='Fetch使用'
                />

                <Text
                    onPress={() => this.onLoad('http://v.juhe.cn/weather/citys?key=18d3ba9c4d614e2e9ab17111fd4cfecb')}>获取数据</Text>
                <Text
                    onPress={() => this.onSubmit('http://v.juhe.cn/weather/citys?key=18d3ba9c4d614e2e9ab17111fd4cfecb', {
                        username: '小明',
                        password: '123456'
                    })}>提交数据</Text>

                <Text>返回结果:{this.state.result}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    }
})