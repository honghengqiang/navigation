/**
 * Created by honghengqiang on 2017/12/29.
 */
/**
 * Created by honghengqiang on 2017/12/29.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
}from 'react-native';
import NavigationBar from '../common/NavigationBar';
import DataRepository from '../expand/dao/DataRepository';
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';


export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result: '',
        }
    }

    onLoad() {
        let url = this.genUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
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

    }

    genUrl(key) {
        return URL + key + QUERY_STR;
    }

    render() {
        return <View>
            <NavigationBar
                statusBar={{backgroundColor:'#6495ed'}}
                style={{backgroundColor: '#6495ed'}}
                title='最热'/>
            <Text style={styles.tips}
                  onPress={() => {
                      this.onLoad()
                  }
                  }
            >获取数据</Text>
            <TextInput style={{height: 40, borderWidth: 1}}
                       onchangetext={text => this.text = text}/>

            <Text style={{height: 500}}>{this.state.result}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    tips: {
        fontSize: 29
    }

})