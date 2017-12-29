/**
 * Created by honghengqiang on 2017/12/29.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native';
import Girl from './Girl';
import NavigationBar from './NavigationBar';


export  default class Boy extends Component{
    constructor(props){
        super(props);
        this.state={
            word:''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <NavigationBar
                    title={'Boy'}
                    statusBar={{
                        backgroundColor:'red',
                    }}
                    style={{backgroundColor:'red'}}
                />

                <Text style={styles.text}>I am boy</Text>
                <Text style={styles.text} onPress={
                    ()=>{
                        this.props.navigator.push({
                            component:Girl,
                            params:{
                                word:'一支玫瑰',
                                onCallback:(word)=>{
                                    this.setState({
                                        word:word,
                                    })
                                }
                            }
                        })
                    }
                }>送女孩一支玫瑰</Text>
                <Text style={styles.text}>{this.state.word}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:20,
    }
})