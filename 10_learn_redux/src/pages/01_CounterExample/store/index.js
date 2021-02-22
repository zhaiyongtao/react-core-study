// 创建store ，需要一个reducer
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store;