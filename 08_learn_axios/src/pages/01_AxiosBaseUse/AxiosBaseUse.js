/**
 * AxiosBaseUse$ - axios的基本使用
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/20 3:51 下午
 * @LastEditTime: 2021/2/20 3:51 下午
 */

import React, {PureComponent} from 'react';
import axios from "axios";
import request from "../../service/request";

class AxiosBaseUse extends PureComponent {
    async componentDidMount() {
        axios.get('/get',{
            params: {
                name: 'zyt'
            }
        }).then((res) => {
            if (res) {
                console.info('get',res)
            }
        }).catch((error) => {
            console.log(error)
        })

        axios.post('/post',{
            name: 'zyt'
        }).then((res) => {
            if(res) {
                console.info('post',res)
            }
        }).catch((err) => {
            console.log(err)
        })

        axios({
            url: '/get',
            params:{
                name: 'zyt'
            }
        }).then((res) => {
            if (res) {
                console.info('axios get', res)
            }
        }).catch((err) => {
            console.log(err)
        })

        axios({
            url: '/post',
            method: 'POST',
            data: {
                name: 'zyt'
            }
        }).then((res) => {
            if (res) {
                console.info('axios post', res)
            }
        }).catch((err) => {
            console.log(err)
        })

        // async await的使用
        const result = await axios.get('/get', {
            params: {
                name: 'zyt'
            }
        })
        console.info('result1', result)

        try {
            const result = await axios.get('/get', {
                params: {
                    name: 'zyt'
                }
            })
            console.log('result2',result)
        } catch (e) {
            console.log(e)
        }

        // 合并多个请求
        const result3 = axios.get('/get',{
            params: {
                name: 'zyt'
            }
        })
        const result4 = axios.post('/post',{
            data: {
                name: 'zyt'
            }
        })
        axios.all([result3,result4]).then(([res1, res2]) => {
                console.info('axios.all', res1, res2)
        }).catch((e) => {
            console.log(e)
        })

        axios.request({
            url: '/get',
            method: "get",
            params: {
                name: 'zyt'
            }
        }).then((res) => {
            console.info('request', res)
        }).catch((e) => {
            console.log(e)
        })

        request({
            url: '/get',
            method: 'get',
            params: {
                name: 'zyt'
            }
        }).then((res) => {
            if (res) {
                console.info('封装的res', res)
            }
        })
    }

    render() {
        return (
            <div>
                axios的基本使用
            </div>
        );
    }
}


export default AxiosBaseUse;
