// 使用actionCreator统一创建action，标准正规做法
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes';

export const getInputChangeAction = (value)=>({
     type: CHANGE_INPUT_VALUE,
     value
    }
);
export const getAddItemAction = ()=>({
        type: ADD_TODO_ITEM
    }
);
export const getDeleteItemAction = (index)=>({
        type: DELETE_TODO_ITEM,
        index
    }
);