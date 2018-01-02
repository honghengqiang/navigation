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
    ListView,
    RefreshControl,
    TouchableOpacity,
}from 'react-native';
import RespositoryCell from '../common/RespositoryCell';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
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
        return <View style={styles.container}>
            <NavigationBar
                statusBar={{backgroundColor:'#6495ed'}}
                style={{backgroundColor: '#6495ed'}}
                title='最热'/>
            <ScrollableTabView
                tabBarBackgroundColor="#6495ed"
                tabBarActiveTextColor="white"
                tabBarInactiveTextColor="mintcream"
                tabBarUnderlineStyle={{backgroundColor:'#e7e7e7',height:2}}
                renderTabBar={()=><ScrollableTabBar/>}
            >
                <PopularTab style={{color:'red'}} tabLabel="Java">JAVA</PopularTab>
                <PopularTab tabLabel="iOS">iOS</PopularTab>
                <PopularTab tabLabel="Android">android</PopularTab>
                <PopularTab tabLabel="Javascript">js</PopularTab>
            </ScrollableTabView>
        </View>
    }
}

class PopularTab extends Component{
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result: '',
            dataSource : new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!==r2,
            }),
            isLoading:false,
        }
    }

    onLoad() {
        this.setState({
            isLoading:true,
        })
        let url = this.genUrl();
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(result.items),
                    isLoading:false,
                })
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                })
            })

    }

    componentDidMount() {
        this.onLoad();
    }

    genUrl() {
        return URL + this.props.tabLabel + QUERY_STR;
    }


    renderRow(data){
        return <RespositoryCell data={data}/>
    }

    render(){
        return <View style={{flex:1}}>
            <ListView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={()=>this.onLoad()}
                        colors={['#2196f3']}
                        tintColor={'#2196f3'}
                        title={'Loding...'}
                        titleColor={'#2196f3'}
                    />
                }
                dataSource={this.state.dataSource}
                renderRow={(data)=>this.renderRow(data)}/>
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