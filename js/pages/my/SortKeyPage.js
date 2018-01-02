/**
 * Created by honghengqiang on 2018/1/2.
 */
/**
 * Created by honghengqiang on 2018/1/2.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import NavigationBar from  '../../common/NavigationBar';
import LanguageDao, {FLAG_LANGUAGE} from '../../expand/dao/LanguageDao';
import ArrayUtils from '../../util/ArrayUtils';
import SortableListView from 'react-native-sortable-listview';
import ViewUtils from '../../util/ViewUtils';

export default class SortKeyPage extends Component{
    constructor(props){
        super(props);
        this.dataArray=[];
        this.sortResultArray=[];
        this.originalCheckedArray=[];
        this.state={
            checkedArray:[]
        }
    }

    componentDidMount() {
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.loadData();
    }
    
    loadData(){
        this.languageDao.fetch()
            .then(result=>{
                this.getCheckedItems(result);
            })
            .catch(error=>{
                console.log(error);
            })
    }
    
    getCheckedItems(result){
        this.dataArray = result;
        let checkedArray=[];
        for(let i=0,len=result.length;i<len;i++){
            let data = result[i];
            if(data.checked) checkedArray.push(data);
        }
        this.setState({
             checkedArray:checkedArray,
            })
        this.originalCheckedArray=ArrayUtils.clone(checkedArray);
    }

    onBack(){
        if(ArrayUtils.isEqual(this.originalCheckedArray,this.state.checkedArray)){
            this.props.navigator.pop();
            return;
        }
        Alert.alert('提示','要保存修改吗？',[{text:'不保存',onPress:()=>{
            this.props.navigator.pop();
        },style:'cancel'},{text:'保存',onPress:()=>{this.onSave(true)}},])

    }

    onSave(isChecked){
        if(!isChecked&&ArrayUtils.isEqual(this.originalCheckedArray,this.state.checkedArray)){
            this.props. navigator.pop();
            return;
        }
        this.getSortResult();
        this.languageDao.save(this.sortResultArray);
        this.props. navigator.pop();
    }


    getSortResult(){
        this.sortResultArray = ArrayUtils.clone(this.dataArray);
        for(let i=0,l=this.originalCheckedArray.length;i<l;i++){
            let item = this.originalCheckedArray[i];
            let index = this.dataArray.indexOf(item);
            this.sortResultArray.splice(index,1,this.state.checkedArray[i]);
        }
    }

    render(){
        let rightButton = <TouchableOpacity
            onPress={() => this.onSave()}>
            <View style={{margin: 10}}>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>
        return(
            <View style={styles.container}>
                <NavigationBar
                    statusBar={{backgroundColor:'#6495ed'}}
                    style={{backgroundColor: '#6495ed'}}
                    leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
                    rightButton={rightButton}
                    title='我的'/>
                <SortableListView
                    style={{flex:1}}
                    data={this.state.checkedArray}
                    order={Object.keys(this.state.checkedArray)}
                    onRowMoved={e => {
                        this.state.checkedArray.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0])
                        this.forceUpdate()
                    }}
                    renderRow={row => <SortCell data={row} />}
                />
            </View>
        )
    }
}



class SortCell extends Component{
    render(){
        return (
            <TouchableHighlight
                underlayColor={'#eee'}
                style={styles.item}
                {...this.props.sortHandlers}
            >
                <View style={styles.row}>
                    <Image style={styles.image} source={require('./images/ic_sort.png')}/>
                    <Text>{this.props.data.name}</Text>
                </View>

            </TouchableHighlight>
        )

    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    tips:{
        fontSize:22,
        margin:5
    },
    item:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        tintColor:'#2196f3',
        width:16,
        height:16,
        marginRight:10
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
})