/**
 * Created by honghengqiang on 2017/12/29.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';
import NavigationBar from '../common/NavigationBar';
import HomePage from './HomePage';

export default class WelcomePage extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.timer = setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            })
        },2000);
    }

    componentWillUnmount() {
        this.timer&&clearTimeout(this.timer);
    }

    render(){
        return <View>
            <NavigationBar
            title={'欢迎'}/>
            <Text>欢迎</Text>
        </View>
    }
}