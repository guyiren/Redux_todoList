import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button,List } from 'antd';
import store from './store';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreator';

class TodoList extends Component{
    //获取这个公用数据
    constructor(props){
        super(props);
        //getState获取数据的方法
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        //组件订阅这个storm的改变，只要store发生改变，这个方法接收的回调函数就会被执行
        store.subscribe(this.handleStoreChange);
    }
  render(){
    return (
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
            <div>
                <Input
                    value={this.state.inputValue}
                    placeholder={"Todo Info"}
                    style={{width:'300px'}}
                    onChange={this.handleInputChange}
                />
                <Button
                    type="primary"
                    style={{marginLeft:'10px'}}
                    //为按钮绑定一个点击事件
                    onClick={this.handleBtnClick}
                >提交</Button>
            </div>
            <List
                style={{marginTop:'10px',width:'500px'}}
                bordered
                // 这个列表到底要渲染什么内容
                dataSource={this.state.list}
                // 怎么渲染
                renderItem={(item,index) => (
                    <List.Item onClick={this.hanleItemDelete.bind(this,index)}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    );
  }
    handleInputChange(e){
        //action里是一个对象，描述一下做什么样的事情
        const action = getInputChangeAction(e.target.value);
        // 把action的这句话传给storm，然后storm会把已有的数据和action传的数据一同发给reducers
        store.dispatch(action);
    };
    //组件发现store发生变化，组件就要更新状态，从而实现页面的联动
    handleStoreChange(){
        //调用getState方法重新取一次数据.重新取一次数据。这个数据就与storm里的数据同步了变成最新的数据了
        // 实现了input框与storm里的数据联动的效果了
        this.setState(store.getState());
    };
    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }
    hanleItemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}
export default TodoList;
