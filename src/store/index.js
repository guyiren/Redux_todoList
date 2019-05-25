// 创建storm代码存放的位置
// 引用redux第三方模块中引入一个方法createStore；调用这个方法就可以创建一个store出来
import {createStore} from 'redux';
import reducer from './reducer';

//接着，创建store的时候把笔记本作为第一个参数传给store,这样redux-devtools才有效果
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;